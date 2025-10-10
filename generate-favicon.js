const fs = require('fs');
const { createCanvas } = require('canvas');

// Create favicons of different sizes
const sizes = [16, 32, 180, 192, 512];

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#2563eb'); // blue-600
  gradient.addColorStop(1, '#9333ea'); // purple-600

  // Draw rounded rectangle background
  const radius = size * 0.2;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw text
  ctx.fillStyle = 'white';
  ctx.font = `bold ${size * 0.32}px Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('TTR', size / 2, size / 2);

  // Save file
  const buffer = canvas.toBuffer('image/png');
  let filename;

  if (size === 16) {
    filename = 'public/favicon-16x16.png';
  } else if (size === 32) {
    filename = 'public/favicon-32x32.png';
  } else if (size === 180) {
    filename = 'public/apple-touch-icon.png';
  } else if (size === 192) {
    filename = 'public/android-chrome-192x192.png';
  } else if (size === 512) {
    filename = 'public/android-chrome-512x512.png';
  }

  fs.writeFileSync(filename, buffer);
  console.log(`Generated ${filename}`);
});

// Generate favicon.ico (using 32x32 as base)
const canvas32 = createCanvas(32, 32);
const ctx32 = canvas32.getContext('2d');

const gradient32 = ctx32.createLinearGradient(0, 0, 32, 32);
gradient32.addColorStop(0, '#2563eb');
gradient32.addColorStop(1, '#9333ea');

const radius32 = 32 * 0.2;
ctx32.beginPath();
ctx32.moveTo(radius32, 0);
ctx32.lineTo(32 - radius32, 0);
ctx32.quadraticCurveTo(32, 0, 32, radius32);
ctx32.lineTo(32, 32 - radius32);
ctx32.quadraticCurveTo(32, 32, 32 - radius32, 32);
ctx32.lineTo(radius32, 32);
ctx32.quadraticCurveTo(0, 32, 0, 32 - radius32);
ctx32.lineTo(0, radius32);
ctx32.quadraticCurveTo(0, 0, radius32, 0);
ctx32.closePath();
ctx32.fillStyle = gradient32;
ctx32.fill();

ctx32.fillStyle = 'white';
ctx32.font = 'bold 10px Arial, sans-serif';
ctx32.textAlign = 'center';
ctx32.textBaseline = 'middle';
ctx32.fillText('TTR', 16, 16);

const buffer32 = canvas32.toBuffer('image/png');
fs.writeFileSync('public/favicon.ico', buffer32);
console.log('Generated public/favicon.ico');

console.log('\nAll favicons generated successfully!');
