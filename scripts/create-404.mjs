import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// GitHub Pages does not automatically serve `index.html` for SPA routes.
// By creating `404.html` that contains our app, direct navigation like
// `/devops-premium-portfolio/projects` renders the correct client-side route.

const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
const notFoundPath = resolve(distDir, "404.html");

const indexHtml = readFileSync(indexPath, "utf8");
writeFileSync(notFoundPath, indexHtml, "utf8");

console.log("Created dist/404.html from dist/index.html");

