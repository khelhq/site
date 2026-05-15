const sharp = require('sharp');
const fs = require('fs');

async function generate() {
    const darkSvg = `
    <svg width="1080" height="1080" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="black" />
      <path d="M6 3v18M18 6l-9 6 9 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </svg>`;

    const lightSvg = `
    <svg width="1080" height="1080" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="white" />
      <path d="M6 3v18M18 6l-9 6 9 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </svg>`;

    await sharp(Buffer.from(darkSvg))
        .png()
        .toFile('public/khel-logo-dark.png');
        
    await sharp(Buffer.from(lightSvg))
        .png()
        .toFile('public/khel-logo-light.png');
        
    console.log("Images generated successfully in the public/ folder.");
}

generate().catch(console.error);
