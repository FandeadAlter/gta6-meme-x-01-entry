// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is a post on X, not a file this program produces: the program's
// only job is to hand the post's address to the grader. It reads POST.json
// from the repository root, checks it names an X post, and copies it to
// /output/POST.json, where the gate reads it. The house then reads the post
// itself from X (its first picture and its text) and hands that to the judge.
// Nothing this program writes about the post is judged.
//
// Run it the way the grader does (outside the grader's container, the two
// env vars stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postPath = join(botDir, "POST.json");

// Read and validate POST.json before copying: it must be a JSON object
// with a url string naming an X post. A bad file fails loudly here
// instead of reaching the gate as an invalid entry.
const raw = readFileSync(postPath, "utf8");
const post = JSON.parse(raw) as unknown;
if (
  typeof post !== "object" ||
  post === null ||
  typeof (post as { url?: unknown }).url !== "string" ||
  !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/\w+\/status\/\d+/.test(
    (post as { url: string }).url,
  )
) {
  console.error(
    "POST.json must be {\"url\": \"https://x.com/<handle>/status/<id>\"}",
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, "POST.json"));
