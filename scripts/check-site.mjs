import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const docs = path.join(root, "docs");
const failures = [];

async function exists(file) {
  try {
    return (await stat(file)).isFile();
  } catch {
    return false;
  }
}

function localTarget(url) {
  if (!url || /^(?:[a-z]+:|#|\/\/)/i.test(url)) return null;
  const clean = url.split(/[?#]/, 1)[0];
  if (!clean) return null;
  return clean.endsWith("/") ? clean + "index.html" : clean;
}

async function checkRegistry() {
  const file = path.join(docs, "apps.json");
  const apps = JSON.parse(await readFile(file, "utf8"));
  if (!Array.isArray(apps) || apps.length < 4) failures.push("docs/apps.json must register at least four tools.");
  for (const [index, app] of apps.entries()) {
    for (const field of ["name", "subtitle", "description", "url", "status"]) {
      if (typeof app[field] !== "string" || !app[field].trim()) failures.push(`apps.json item ${index + 1} is missing ${field}.`);
    }
    if (!Array.isArray(app.tags) || !app.tags.length) failures.push(`apps.json item ${index + 1} has no tags.`);
    const target = localTarget(app.url);
    if (target && !(await exists(path.join(docs, target)))) failures.push(`Broken app target: ${app.url}`);
  }
}

async function checkHtml(relativeFile) {
  const file = path.join(docs, relativeFile);
  const html = await readFile(file, "utf8");
  const base = path.dirname(file);
  const urls = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const url of urls) {
    const target = localTarget(url);
    if (!target) continue;
    if (!(await exists(path.resolve(base, target)))) failures.push(`${relativeFile}: broken local reference ${url}`);
  }
}

async function checkCourseFacts() {
  const landing = await readFile(path.join(docs, "index.html"), "utf8");
  const playbook = await readFile(path.join(docs, "resources/NEUR3301_Study_Playbook_2026.md"), "utf8");
  const bundle = await readFile(path.join(docs, "study-lab/assets/index-BR7I-zAT.js"), "utf8");
  const required = [
    ["landing seminar weight", landing, "30%"],
    ["landing final weight", landing, "50%"],
    ["Test 1 date", playbook, "24 August 2026"],
    ["Test 2 date", playbook, "7 September 2026"],
    ["final question choice", playbook, "8–10 long-answer questions, choose four"],
    ["local progress key", bundle, "synapse-neur3301-progress-v1"],
  ];
  for (const [label, text, needle] of required) {
    if (!text.includes(needle)) failures.push(`Missing verified course fact: ${label}.`);
  }
  if (bundle.includes("port/5000")) failures.push("Broken legacy progress endpoint remains in Study Lab bundle.");
}

await checkRegistry();
await Promise.all([
  checkHtml("index.html"),
  checkHtml("seminar/index.html"),
  checkHtml("study-lab/index.html"),
]);
await checkCourseFacts();

if (failures.length) {
  console.error("Static-site integrity checks failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log("Static-site integrity checks passed.");
