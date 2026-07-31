import { stat } from 'node:fs/promises';
import path from 'node:path';
import { writeFile } from 'node:fs/promises';

const root = process.cwd();
const assetsDir = path.join(root, 'docs', 'study-lab', 'assets');
const files = ['index-BR7I-zAT.js', 'index-C3XRwkWz.css', 'synapse-enhance.js'];

async function run() {
  const results = { timestamp: new Date().toISOString(), files: {}, total: 0 };
  for (const file of files) {
    const full = path.join(assetsDir, file);
    try {
      const s = await stat(full);
      results.files[file] = s.size;
      results.total += s.size;
    } catch (err) {
      results.files[file] = null;
      results.errors = results.errors || {};
      results.errors[file] = err.message;
    }
  }
  const out = JSON.stringify(results, null, 2);
  // write to workspace-root bundle-sizes.json for CI artifact upload
  await writeFile('bundle-sizes.json', out, 'utf8');
  console.log(out);
}

run().catch(err => { console.error(err); process.exit(1); });
