import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const engineFile = path.join(__dirname, '../src/ichingEngine.ts');
let engineContent = fs.readFileSync(engineFile, 'utf8');

const allDataFiles = [
  'hex_1_4.json', 'hex_5_8.json', 'hex_9_12.json', 'hex_13_16.json',
  'hex_17_20.json', 'hex_21_24.json', 'hex_25_28.json', 'hex_29_32.json',
  'hex_33_36.json', 'hex_37_40.json', 'hex_41_44.json', 'hex_45_48.json',
  'hex_49_52.json', 'hex_53_56.json', 'hex_57_60.json', 'hex_61_64.json'
];

const allNames = {};

for (const file of allDataFiles) {
  const filePath = path.join(__dirname, '../src/data', file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for (const [num, hex] of Object.entries(data)) {
    // Attempt to extract from summaryEs: "Name in ES (Pinyin) ..."
    let esName = "";
    let pinyin = "";
    let enName = "";

    const esMatch = hex.summaryEs.match(/^(.*?)\((.*?)\)/);
    if (esMatch) {
      esName = esMatch[1].trim();
      pinyin = esMatch[2].trim();
    } else {
      esName = `Hexagrama ${num}`;
      pinyin = `Pinyin ${num}`;
    }

    const enMatch = hex.summaryEn.match(/^(.*?)\((.*?)\)/);
    if (enMatch) {
      enName = enMatch[1].trim();
    } else {
      enName = `Hexagram ${num}`;
    }

    allNames[num] = { es: esName, en: enName, pinyin: pinyin };
  }
}

console.log("Extracted names:", Object.keys(allNames).length);
fs.writeFileSync(path.join(__dirname, 'extracted_names.json'), JSON.stringify(allNames, null, 2));
