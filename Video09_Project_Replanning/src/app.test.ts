import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import app from "./app";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");

describe("GET /", () => {
  it("returns HTTP 200", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
  });

  it("responds with an HTML content type", async () => {
    const res = await app.request("/");
    expect(res.headers.get("Content-Type")).toMatch(/text\/html/);
  });

  it("contains the AgentClinic heading", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toContain("<h1>AgentClinic</h1>");
  });

  it("contains a tagline", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toMatch(/<p>.+<\/p>/);
  });
});

describe("Config", () => {
  it("package.json pins hono without a ^ or ~ prefix", () => {
    const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf-8"));
    const honoVersion: string = pkg.dependencies.hono;
    expect(honoVersion).toBeDefined();
    expect(honoVersion).not.toMatch(/^[\^~]/);
  });

  it("tsconfig.json has strict: true", () => {
    const tsconfig = JSON.parse(
      readFileSync(join(root, "tsconfig.json"), "utf-8")
    );
    expect(tsconfig.compilerOptions.strict).toBe(true);
  });
});
