// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is a post on X, not a file this program produces. The program's
// only job is to hand the post's address to the grader: it reads POST.json
// from the repository, makes sure it names an X post, and copies it to
// /output/POST.json, where the gate reads it. The house then fetches the post
// itself from X — its first picture and its text — and hands that to the
// judge. Nothing this program writes about the post is judged.
//
// Run it the way the grader does (outside the grader's container the two
// environment variables stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");

// Read POST.json and check it is an object whose url points at an X post.
// A bad file fails loudly here, with a clear message, instead of slipping
// through to the gate as an invalid entry.
const parsed: unknown = JSON.parse(readFileSync(source, "utf8"));
const url =
  typeof parsed === "object" && parsed !== null
    ? (parsed as { url?: unknown }).url
    : undefined;
const isPostUrl =
  typeof url === "string" &&
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+([?#].*)?$/.test(
    url,
  );
if (!isPostUrl) {
  console.error(
    'POST.json must be {"url": "https://x.com/<handle>/status/<id>"}',
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
