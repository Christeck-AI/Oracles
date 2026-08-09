import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

// Asegúrate de tener configurada tu GEMINI_API_KEY en tu entorno:
// En windows: set GEMINI_API_KEY="tu_clave_aqui"
const ai = new GoogleGenAI({});

const OUTPUT_FILE = path.join(process.cwd(), 'src', 'data', 'hex_9_64.json');

const HEXAGRAM_BASICS = [
  // Ejemplo de datos, aquí estarían listados los hexagramas del 9 al 64.
  // Para propósitos de este script (Tarea 4), usaremos algunos nombres clave
  // pero el modelo sabrá su contenido basado en el número.
  { id: 9, name: "Hsiao Ch'u / La Fuerza Domesticadora de lo Pequeño" },
  { id: 10, name: "Lü / El Porte" },
  { id: 11, name: "T'ai / La Paz" },
  { id: 12, name: "P'i / El Estancamiento" }
  // ... añadir el resto hasta 64 en producción
];

// Hemos generado del 1 al 8 ya a mano con la máxima calidad. Empezaremos desde el 9.
const START_INDEX = 9;
const END_INDEX = 64; 

const SYSTEM_INSTRUCTION = `
Eres un experto psicólogo junguiano, estudioso del viaje del héroe de Joseph Campbell y maestro del I Ching de Richard Wilhelm.
Tu tarea es proporcionar el perfil psicológico y evolutivo de un hexagrama del I Ching.

Debes devolver EXCLUSIVAMENTE un objeto JSON válido con la siguiente estructura (sin bloques markdown \`\`\`json, solo el JSON puro):
{
  "summaryEs": "Descripción de la interpretación principal (200-300 palabras). Habla de arquetipos, individuación, sombras o etapas del viaje del héroe.",
  "summaryEn": "English translation of summaryEs.",
  "stageEs": "Etapa arquetípica o del Viaje del Héroe equivalente (3-5 palabras).",
  "stageEn": "Archetypal or Hero's Journey stage in English.",
  "lines": {
    "1": { "es": "Interpretación psicológica de la línea mutante 1 (30-50 palabras).", "en": "English line 1." },
    "2": { "es": "Interpretación línea mutante 2.", "en": "English line 2." },
    "3": { "es": "...", "en": "..." },
    "4": { "es": "...", "en": "..." },
    "5": { "es": "...", "en": "..." },
    "6": { "es": "...", "en": "..." }
  }
}
`;

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateHexagram(id) {
  const prompt = `Genera la interpretación profunda para el Hexagrama ${id} del I Ching original. Por favor extrae los conceptos más útiles psicológicamente para un ser humano, conservando las imágenes simbólicas del libro. Básate en la psicología de Carl Jung (símbolos, individuación, integración hacia el sí mismo) y de Joseph Campbell (El viaje del héroe).`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const text = response.text;
    // Limpieza de formato si el modelo incluyó tags markdown
    const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error(`Error generando el Hexagrama ${id}:`, error.message);
    return null;
  }
}

async function runPipeline() {
  console.log("Iniciando Pipeline de Generación Psicológica de Hexagramas...");
  
  let currentData = {};
  if (fs.existsSync(OUTPUT_FILE)) {
    currentData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
    console.log(`Leído archivo existente con ${Object.keys(currentData).length} hexagramas.`);
  }

  // Bucle por lotes para evitar límites de API
  for (let i = START_INDEX; i <= END_INDEX; i++) {
    if (currentData[i]) {
      console.log(`Hexagrama ${i} ya existe, saltando...`);
      continue;
    }

    console.log(`\nGenerando Hexagrama ${i}...`);
    const data = await generateHexagram(i);
    
    if (data) {
      currentData[i] = data;
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(currentData, null, 2));
      console.log(`Hexagrama ${i} guardado con éxito.`);
    }

    // Esperar unos segundos para evitar golpear los límites de cuota (Rate Limiting)
    await delay(3000); 
  }

  console.log("\n✅ Pipeline completado exitosamente.");
}

runPipeline().catch(console.error);
