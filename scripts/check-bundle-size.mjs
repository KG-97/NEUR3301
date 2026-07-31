import { stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const assetsDir = path.join(root, 'docs', 'study-lab', 'assets');
const maxBytes = Number(process.env.MAX_BUNDLE_BYTES) || 500_000; // default 500KB

async function check() {
  const files = ['index-BR7I-zAT.js', 'index-C3XRwkWz.css'];
  let failed = false;
  for (const file of files) {
    const full = path.join(assetsDir, file);
    try {
      const s = await stat(full);
      console.log(`${file}: ${s.size} bytes`);
      if (s.size > maxBytes) {
        console.error(`Bundle size check failed: ${file} is ${s.size} bytes > ${maxBytes} bytes`);
        failed = true;
      }
    } catch (err) {
      console.error(`Could not stat ${full}: ${err.message}`);
      failed = true;
    }
  }
  if (failed) process.exit(1);
  console.log('Bundle size check passed.');
}

check();
