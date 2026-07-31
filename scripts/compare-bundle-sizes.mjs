import { stat } from 'node:fs/promises';
import path from 'node:path';
import { writeFile } from 'node:fs/promises';

function fmt(n) {
  if (n == null) return '—';
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024*1024)).toFixed(2)} MB`;
}

async function sizeFor(dir, file) {
  try {
    const s = await stat(path.join(dir, file));
    return s.size;
  } catch {
    return null;
  }
}

async function run() {
  const files = ['index-BR7I-zAT.js', 'index-C3XRwkWz.css', 'synapse-enhance.js'];
  const currentDir = path.join(process.cwd(), 'docs', 'study-lab', 'assets');
  const baseDir = path.join(process.cwd(), 'main', 'docs', 'study-lab', 'assets');

  const current = {};
  const base = {};
  let curTotal = 0;
  let baseTotal = 0;
  for (const f of files) {
    const sCur = await sizeFor(currentDir, f);
    const sBase = await sizeFor(baseDir, f);
    current[f] = sCur;
    base[f] = sBase;
    if (Number.isInteger(sCur)) curTotal += sCur;
    if (Number.isInteger(sBase)) baseTotal += sBase;
  }

  const rows = [];
  rows.push('| File | Base | Current | Diff | % |');
  rows.push('|---:|---:|---:|---:|---:|');
  for (const f of files) {
    const b = base[f];
    const c = current[f];
    const diff = (c == null || b == null) ? null : c - b;
    const pct = (diff == null || b === 0) ? null : (diff / b) * 100;
    rows.push(`| ${f} | ${fmt(b)} | ${fmt(c)} | ${diff == null ? '—' : (diff>0?'+':'')+diff} | ${pct==null? '—' : pct.toFixed(1)+'%'} |`);
  }
  rows.push('');
  rows.push(`**Total**: Base ${fmt(baseTotal)} — Current ${fmt(curTotal)} — Diff ${baseTotal==null||curTotal==null?'—':(curTotal-baseTotal)} bytes`);

  const md = `## Study Lab bundle size report\n\n${rows.join('\n')}`;
  await writeFile('bundle-size-comment.md', md, 'utf8');
  console.log(md);
}

run().catch(err => { console.error(err); process.exit(1); });
