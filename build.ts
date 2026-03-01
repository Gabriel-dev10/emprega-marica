import { build } from "bun";
import { cp, rm, writeFile, mkdir, readdir } from "fs/promises";
import { existsSync, readFileSync } from "fs";
import path from "path";
// @ts-ignore
import bunPluginTailwind from "bun-plugin-tailwind";

const outdir = "./dist";
const publicPath = process.env.BUN_PUBLIC_BASE_PATH || "/";

console.log("Building...");

if (existsSync(outdir)) {
  await rm(outdir, { recursive: true });
}

// Build functionality
const buildApp = async () => {
    const result = await build({
      entrypoints: ["./src/main.tsx"],
      outdir,
      publicPath,
      minify: true,
      naming: "[dir]/[name].[ext]",
      plugins: [bunPluginTailwind],
      define: {
        "process.env.BUN_PUBLIC_API_BASE_URL": JSON.stringify(process.env.BUN_PUBLIC_API_BASE_URL || ""),
      },
    });

    if (!result.success) {
      console.error("Build failed");
      for (const message of result.logs) {
        console.error(message);
      }
      process.exit(1);
    }
    
    return result;
};

await buildApp();

// Handle index.html
console.log("Processing index.html...");
let html = readFileSync("./index.html", "utf-8");
html = html.replace("/src/main.tsx", "/main.js");

const files = await readdir(outdir);
const cssFiles = files.filter(f => f.endsWith(".css"));

if (cssFiles.length > 0) {
    const cssLinks = cssFiles.map(f => `<link rel="stylesheet" href="/${f}">`).join("\n");
    html = html.replace("</head>", `${cssLinks}\n</head>`);
}

await writeFile(path.join(outdir, "index.html"), html);

// Copy public assets
if (existsSync("./public")) {
   console.log("Copying public assets...");
   const copyDir = async (src: string, dest: string) => {
       const entries = await readdir(src, { withFileTypes: true });
       await mkdir(dest, { recursive: true });
       for (const entry of entries) {
           const srcPath = path.join(src, entry.name);
           const destPath = path.join(dest, entry.name);
           if (entry.isDirectory()) {
               await copyDir(srcPath, destPath);
           } else {
               await cp(srcPath, destPath);
           }
       }
   };
   await copyDir("./public", outdir);
}

console.log("Build complete! Output in directories ./dist");