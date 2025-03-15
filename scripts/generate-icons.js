const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Simple SVG template for a placeholder icon
const createSvgIcon = size => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#000000"/>
  <text x="50%" y="50%" font-family="Arial" font-size="${size / 5}px" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${size}x${size}
  </text>
</svg>
`;

// Generate icons
const sizes = [192, 512];
sizes.forEach(size => {
  const filePath = path.join(iconsDir, `icon-${size}x${size}.svg`);
  fs.writeFileSync(filePath, createSvgIcon(size));
  console.log(`Created ${filePath}`);
});

console.log('Icon generation complete!');
