/*
 * Run this script only if you want me to download sample images into /public/before-after
 * It downloads a curated set of royalty-free images and saves them to the public directory.
 * The script is intentionally not executed automatically — you must approve running it.
 *
 * Usage (from project root):
 *   node scripts/fetch-before-after-images.js
 *
 * NOTE: When I download images I'll include a small attribution text file in /public/before-after/ATTRIBUTION.txt
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const destDir = path.join(__dirname, '..', 'public', 'before-after');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

// Curated example image URLs (Unsplash). Replace or remove as needed.
const photos = [
  {
    name: 'before1.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'after1.jpg',
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'before2.jpg',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'after2.jpg',
    url: 'https://images.unsplash.com/photo-1505691723518-36a33f1d5c6d?auto=format&fit=crop&w=1600&q=80'
  },
  // Additional example pairs (curated for refinishing / flooring)
  {
    name: 'before3.jpg',
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'after3.jpg',
    url: 'https://images.unsplash.com/photo-1505691723518-8a4f3d0f0d3b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'before4.jpg',
    url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'after4.jpg',
    url: 'https://images.unsplash.com/photo-1534151519088-8f8b59b2f2c7?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'before5.jpg',
    url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'after5.jpg',
    url: 'https://images.unsplash.com/photo-1524758631624-d6bf2ac0e8d8?auto=format&fit=crop&w=1600&q=80'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      })
      .on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

(async () => {
  console.log('Downloading sample images to', destDir);
  for (const p of photos) {
    const dest = path.join(destDir, p.name);
    try {
      await download(p.url, dest);
      console.log('Downloaded', p.name);
    } catch (e) {
      console.error('Failed to download', p.name, e.message);
    }
  }

  const attribution = photos.map(p => `${p.name} — ${p.url}`).join('\n');
  fs.writeFileSync(path.join(destDir, 'ATTRIBUTION.txt'), attribution);
  console.log('Done. Check /public/before-after and ATTRIBUTION.txt');
})();