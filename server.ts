import { existsSync } from "node:fs";
import path from "node:path";

const PORT = Number(process.env.PORT) || 3070;
const DIST_DIR = path.join(import.meta.dir, "dist");

if (!existsSync(DIST_DIR)) {
    console.error(`dist/ directory not found at ${DIST_DIR}. Run 'bun run build' first.`);
    process.exit(1);
}

const securityHeaders: Record<string, string> = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "Content-Security-Policy":
    "default-src 'none'; base-uri 'none'; frame-ancestors 'none'; object-src 'none'; script-src 'self' https://safrastatic-a.akamaihd.net https://*.cardinalcommerce.com; connect-src 'self' https://*.safrapay.com.br https://*.cardinalcommerce.com; frame-src 'self' https://*.safrapay.com.br https://*.cardinalcommerce.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://*.safrapay.com.br; font-src 'self' https://fonts.gstatic.com;",
};

// Pre-scan dist/ at startup — zero-allocation static serving via Bun routes
const staticRoutes: Record<string, Response> = {};
const glob = new Bun.Glob("**/*");

for await (const relativePath of glob.scan({ cwd: DIST_DIR, onlyFiles: true })) {
    const filePath = path.join(DIST_DIR, relativePath);
    const file = Bun.file(filePath);

    if (file.size === 0) continue;

    const route = `/${relativePath}`;
    const headers: Record<string, string> = { ...securityHeaders };

    // Cache hashed assets (e.g. app-a1b2c3d4.js) for 1 year
    if (/\.[a-f0-9]{8,}\.\w+$/.test(relativePath)) {
        headers["Cache-Control"] = "public, max-age=31536000, immutable";
    }

    headers["Content-Type"] = file.type;
    staticRoutes[route] = new Response(await file.bytes(), { headers });
}

// SPA fallback: index.html for all unmatched routes
const indexBytes = await Bun.file(path.join(DIST_DIR, "index.html")).bytes();
staticRoutes["/*"] = new Response(indexBytes, {
    headers: {
        ...securityHeaders,
        "Content-Type": "text/html; charset=utf-8",
    },
});

const fileCount = Object.keys(staticRoutes).length - 1; // exclude wildcard

const server = Bun.serve({
    port: PORT,
    routes: staticRoutes,
});

console.log(`Static server running on http://localhost:${server.port} (${fileCount} files pre-loaded)`);