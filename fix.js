const fs = require('fs');

const files = [
  'd:/kehu/xiyiye/frontend/src/app/page.tsx',
  'd:/kehu/xiyiye/frontend/src/app/shop/page.tsx',
  'd:/kehu/xiyiye/frontend/src/app/about/page.tsx',
  'd:/kehu/xiyiye/frontend/src/app/contact/page.tsx',
  'd:/kehu/xiyiye/frontend/src/app/product/[slug]/page.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // Remove Header
  c = c.replace(/\{\/\*\s*顶部工具栏[\s\S]*?<\/header>/, '');
  // Remove Footer
  c = c.replace(/\{\/\*\s*(6\.\s*)?页脚[\s\S]*?<\/footer>/, '');
  
  c = c.replace(/<div className="bg-\[\#f8f9fa\] min-h-screen flex flex-col">/, '<div className="bg-[#f8f9fa] flex-1 flex flex-col">');
  
  // page.tsx has an extra fragment we can replace
  c = c.replace(/return \(\s*<>\s*/, 'return (\n    <div className="bg-[#f8f9fa] flex-1 flex flex-col">\n');
  c = c.replace(/\s*<\/>\s*\);\s*\}\s*$/, '\n    </div>\n  );\n}');
  
  fs.writeFileSync(f, c);
});
console.log('Success');
