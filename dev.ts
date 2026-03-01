import { build, serve } from "bun";
import { rmSync, existsSync, readFileSync, writeFileSync, readdirSync, watch } from "fs";
import { join } from "path";
// @ts-ignore
import bunPluginTailwind from "bun-plugin-tailwind";

const outdir = "./dist";

console.log("Starting dev server...");

// Clean
if (existsSync(outdir)) rmSync(outdir, { recursive: true });

// Helper to update index.html
const updateHtml = () => {
    try {
        let html = readFileSync("./index.html", "utf-8");
        html = html.replace("/src/main.tsx", "/main.js");
        
        if (existsSync(outdir)) {
            const files = readdirSync(outdir);
            const cssFiles = files.filter(f => f.endsWith(".css"));
            if (cssFiles.length > 0) {
                // simple injection check
                if (!html.includes(".css")) { 
                    const cssLinks = cssFiles.map(f => `<link rel="stylesheet" href="/${f}">`).join("\n");
                    html = html.replace("</head>", `${cssLinks}\n</head>`);
                }
            }
        }
        
        writeFileSync(join(outdir, "index.html"), html);
    } catch (e) {
        console.error("Error updating HTML:", e);
    }
};

// Build function
const buildApp = async () => {
    const result = await build({
        entrypoints: ["./src/main.tsx"],
        outdir,
        minify: false,
        sourcemap: "external",
        plugins: [bunPluginTailwind],
        define: {
            "process.env.BUN_PUBLIC_API_BASE_URL": JSON.stringify(process.env.BUN_PUBLIC_API_BASE_URL || ""),
        },
    });
    
    if (!result.success) {
        console.error("Build failed:", result.logs);
    }
    
    updateHtml();
};

// Initial build
await buildApp();

// Watcher
const watcher = watch("./src", { recursive: true }, async (event, filename) => {
   console.log(`Change detected in ${filename}. Rebuilding...`);
   await buildApp();
});


console.log("Dev server running on http://localhost:3052");

serve({
  port: 3052,
  fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;
    
    if (path === "/") {
        updateHtml(); // Ensure html is fresh-ish
        path = "/index.html";
    }
    
    // Try serving from dist
    let filePath = join(outdir, path);
    let file = Bun.file(filePath);
    
    // Check if file exists and has size
    if (file.size === 0) {
        // Try public
        filePath = join("./public", path);
        file = Bun.file(filePath);
    }

    if (file.size > 0) return new Response(file);

    // SPA Fallback
    updateHtml();
    return new Response(Bun.file(join(outdir, "index.html")));
  },
});