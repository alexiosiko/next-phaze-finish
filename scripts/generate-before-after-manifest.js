const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const dir = path.join(publicDir, 'before-after');
if (!fs.existsSync(dir)) {
  console.error('Directory /public/before-after does not exist.');
  process.exit(1);
}

const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f));

// group by base name prefix: beforeX & afterX
const groups = {};
for (const f of files) {
  const name = path.parse(f).name; // e.g., before1 or after1
  const m = name.match(/^(before|after)(\d+)/i);
  if (m) {
    const key = m[2];
    if (!groups[key]) groups[key] = {};
    groups[key][m[1].toLowerCase()] = f;
  }
}

const pairs = Object.keys(groups).sort((a,b) => Number(a) - Number(b)).map((k, idx) => {
  const g = groups[k];
  return {
    before: g.before ? `/before-after/${g.before}` : null,
    after: g.after ? `/before-after/${g.after}` : null,
    caption: g.before && g.after ? `Project ${k}` : `Project ${k}`
  };
}).filter(p => p.before && p.after);

fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify({ pairs }, null, 2));
console.log('Wrote manifest.json with', pairs.length, 'pairs');
