// One Line of Earned Pride — entry for u-mang-one-line-of-earned-pride-a0138557.
// Writes a single line of text (1-240 characters) to /output/entry.txt,
// where the sealed gate scorer reads it and the house judge compares it
// pairwise against the other entries.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  'On her eleventh try the night-shift nurse slid the IV in clean, and the old man squeezed her hand and whispered, "Steady hands, kid."';

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Gate check, mirroring the sealed scorer: the text must be UTF-8 of
// 1 to 240 characters and not only white space. Fail loudly instead of
// writing an entry the gate would refuse.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 240) {
  console.error(`Entry is ${charCount} characters; the gate requires 1 to 240.`);
  process.exit(1);
}
if (ENTRY.trim().length === 0) {
  console.error("Entry is only white space; the gate requires real text.");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
