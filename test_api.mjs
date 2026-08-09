import { GoogleGenAI } from '@google/genai';

async function test() {
  try {
    console.log("Probando conexión con Gemini...");
    const ai = new GoogleGenAI();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Di "Hola Mundo desde el SDK de Gemini" si recibes este mensaje.',
    });
    console.log("Respuesta de la API:", response.text);
  } catch (error) {
    console.error("Error al conectar con la API:", error);
  }
}

test();
