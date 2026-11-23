// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X"
// bounty (post-x-promote-make-your-own-bounty-01), Node 22, standard
// library only.
//
// The entry itself is a post on X: one post of the entrant's own that
// quotes make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it,
// with a photo of its own attached, make.fun or the @makefunai tag and the
// entrant's play code in its text. POST.json at this repository's root
// names that post's address, and the house reads the post's replies,
// reposts and quotes from X; places go by their sum, the highest first.
// The placeholder address the file ships with is replaced with the real
// post's address once the post is up, before the entry is submitted.
//
// This program does exactly one thing: it copies POST.json from the
// repository into the output directory, where the gate reads it. Nothing
// it writes about the post is scored — the house reads the post itself.
//
// Local run, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader's sandbox the repository is mounted at /bot and the
// output directory is /output. Outside it, the two environment variables
// below stand in for them so the program can be run locally as-is.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
