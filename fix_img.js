const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('d:/kehu/xiyiye/frontend/src');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('await res.json()') && !c.includes('JSON.parse(JSON.stringify')) {
    // Only replace if it hasn't been replaced yet
    c = c.replace(/await res\.json\(\)/g, "JSON.parse(JSON.stringify(await res.json()).replace(/http:\\/\\/45\\.145\\.229\\.20:6411/g, '/wp-proxy'))");
    fs.writeFileSync(f, c);
    console.log('Updated ' + f);
  }
});
console.log('Done');
