export type LineValue = 6 | 7 | 8 | 9; // 6: Old Yin (mutating), 7: Young Yang (stable), 8: Young Yin (stable), 9: Old Yang (mutating)

export interface CoinRollResult {
  coins: [number, number, number]; // 2 (Yin/heads) or 3 (Yang/tails)
  sum: LineValue;
}

export interface TrigramInfo {
  id: string;
  name: { es: string; en: string };
  symbol: { es: string; en: string };
  character: string;
}

export interface HexagramData {
  number: number;
  name: { es: string; en: string; pinyin: string };
  image: { es: string; en: string };
  trigrams: {
    upper: TrigramInfo;
    lower: TrigramInfo;
  };
  summary: { es: string; en: string };
  heroJourneyStage: { es: string; en: string };
  lines?: { [key: number]: { es: string; en: string } };
}

// Trigram definitions (from line 1 to 3, bottom-to-top)
export const trigrams: Record<string, TrigramInfo> = {
  "111": { id: "Chien", name: { es: "Lo Creativo", en: "The Creative" }, symbol: { es: "Cielo", en: "Heaven" }, character: "乾" },
  "000": { id: "Kun", name: { es: "Lo Receptivo", en: "The Receptive" }, symbol: { es: "Tierra", en: "Earth" }, character: "坤" },
  "100": { id: "Chen", name: { es: "Lo que Despierta", en: "The Arousing" }, symbol: { es: "Trueno", en: "Thunder" }, character: "震" },
  "010": { id: "Kan", name: { es: "El Abismo", en: "The Abysmal" }, symbol: { es: "Agua", en: "Water" }, character: "坎" },
  "001": { id: "Ken", name: { es: "Manteniéndose Quieto", en: "Keeping Still" }, symbol: { es: "Montaña", en: "Mountain" }, character: "艮" },
  "011": { id: "Sun", name: { es: "Lo Suave", en: "The Gentle" }, symbol: { es: "Viento/Madera", en: "Wind/Wood" }, character: "巽" },
  "101": { id: "Li", name: { es: "Lo Oscilante", en: "The Clinging" }, symbol: { es: "Fuego", en: "Fire" }, character: "離" },
  "110": { id: "Tui", name: { es: "Lo Gozoso", en: "The Joyous" }, symbol: { es: "Lago", en: "Lake" }, character: "兌" }
};

// Map of lower + upper trigram keys to hexagram number (Wilhelm matrix)
const hexagramMatrix: Record<string, Record<string, number>> = {
  Chien: { Chien: 1, Chen: 34, Kan: 5, Ken: 26, Kun: 11, Sun: 9, Li: 14, Tui: 43 },
  Chen: { Chien: 25, Chen: 51, Kan: 3, Ken: 27, Kun: 24, Sun: 42, Li: 21, Tui: 17 },
  Kan: { Chien: 6, Chen: 40, Kan: 29, Ken: 4, Kun: 7, Sun: 59, Li: 64, Tui: 47 },
  Ken: { Chien: 33, Chen: 62, Kan: 39, Ken: 52, Kun: 15, Sun: 53, Li: 56, Tui: 31 },
  Kun: { Chien: 12, Chen: 16, Kan: 8, Ken: 23, Kun: 2, Sun: 20, Li: 35, Tui: 45 },
  Sun: { Chien: 44, Chen: 32, Kan: 48, Ken: 18, Kun: 46, Sun: 57, Li: 50, Tui: 28 },
  Li: { Chien: 13, Chen: 55, Kan: 63, Ken: 22, Kun: 36, Sun: 37, Li: 30, Tui: 49 },
  Tui: { Chien: 10, Chen: 54, Kan: 60, Ken: 41, Kun: 19, Sun: 61, Li: 38, Tui: 58 }
};

import hex_1_4 from './data/hex_1_4.json';
import hex_5_8 from './data/hex_5_8.json';
import hex_9_12 from './data/hex_9_12.json';
import hex_13_16 from './data/hex_13_16.json';
import hex_17_20 from './data/hex_17_20.json';
import hex_21_24 from './data/hex_21_24.json';
import hex_25_28 from './data/hex_25_28.json';
import hex_29_32 from './data/hex_29_32.json';
import hex_33_36 from './data/hex_33_36.json';
import hex_37_40 from './data/hex_37_40.json';
import hex_41_44 from './data/hex_41_44.json';
import hex_45_48 from './data/hex_45_48.json';
import hex_49_52 from './data/hex_49_52.json';
import hex_53_56 from './data/hex_53_56.json';
import hex_57_60 from './data/hex_57_60.json';
import hex_61_64 from './data/hex_61_64.json';

const allHexData: Record<string, any> = {
  ...hex_1_4,
  ...hex_5_8,
  ...hex_9_12,
  ...hex_13_16,
  ...hex_17_20,
  ...hex_21_24,
  ...hex_25_28,
  ...hex_29_32,
  ...hex_33_36,
  ...hex_37_40,
  ...hex_41_44,
  ...hex_45_48,
  ...hex_49_52,
  ...hex_53_56,
  ...hex_57_60,
  ...hex_61_64
};

// Mock descriptions for testing the UI. 
// These will be fully expanded dynamically by the Python pipeline to detailed JSONs later.
export const getHexagramBasicData = (num: number, lower: TrigramInfo, upper: TrigramInfo): HexagramData => {
  const names: Record<number, { es: string; en: string; pinyin: string; summaryEs: string; summaryEn: string; stageEs: string; stageEn: string }> = {
    1: {
      es: "El Creador", en: "The Creative", pinyin: "Ch'ien",
      summaryEs: "Representa el impulso espiritual masculino puro y la fuerza activa de la psique. En términos de individuación, es la chispa del Yo que busca manifestarse en el mundo real.",
      summaryEn: "Represents the pure masculine spiritual impulse and active force of the psyche. In terms of individuation, it is the spark of the Self seeking manifestation.",
      stageEs: "El Llamado a la Aventura", stageEn: "The Call to Adventure"
    },
    2: {
      es: "Lo Receptivo", en: "The Receptive", pinyin: "K'un",
      summaryEs: "Representa el vientre materno psicológico, la matriz de la sombra y la asimilación pasiva necesaria para que los arquetipos germinen en el inconsciente.",
      summaryEn: "Represents the psychological maternal womb, the matrix of the shadow, and the passive assimilation needed for archetypes to germinate in the unconscious.",
      stageEs: "El Vientre de la Ballena", stageEn: "The Belly of the Whale"
    },
    3: {
      es: "La Dificultad Inicial", en: "Difficulty at the Beginning", pinyin: "Chun",
      summaryEs: "Representa el caos creativo del héroe enfrentando por primera vez el Umbral. El brote verde que rompe la tierra dura y seca.",
      summaryEn: "Representing the creative chaos of the hero first facing the Threshold. The green shoot breaking through hard, dry earth.",
      stageEs: "El Cruce del Primer Umbral", stageEn: "Crossing the First Threshold"
    },
    4: {
      es: "La Necedad Juvenil", en: "Youthful Folly", pinyin: "Mêng",
      summaryEs: "La inexperiencia del ego joven que busca guía. Simboliza la necesidad de un maestro o mentor arquetípico para no perderse en la inflación del ego.",
      summaryEn: "The inexperience of the young ego seeking guidance. Symbolizes the need for an archetypal mentor to avoid inflation.",
      stageEs: "Encuentro con el Mentor", stageEn: "Meeting with the Mentor"
    },
  };

  const fallback = {
    es: `Hexagrama ${num}`,
    en: `Hexagram ${num}`,
    pinyin: `Hexagram ${num}`,
    summaryEs: `Interpretación psicológica del Hexagrama ${num} bajo la lente de Carl Jung (Individuación y Símbolos) y Joseph Campbell (El Viaje del Héroe).`,
    summaryEn: `Psychological interpretation of Hexagram ${num} under the lens of Carl Jung (Individuation & Symbols) and Joseph Campbell (The Hero's Journey).`,
    stageEs: "Etapa del Viaje del Héroe",
    stageEn: "Stage of the Hero's Journey"
  };

  const info = names[num] || fallback;
  const aiData = allHexData[String(num)];

  return {
    number: num,
    name: { es: info.es, en: info.en, pinyin: info.pinyin },
    image: {
      es: `${upper.symbol.es} sobre ${lower.symbol.es}`,
      en: `${upper.symbol.en} over ${lower.symbol.en}`
    },
    trigrams: { upper, lower },
    summary: { 
      es: aiData ? aiData.summaryEs : info.summaryEs, 
      en: aiData ? aiData.summaryEn : info.summaryEn 
    },
    heroJourneyStage: { 
      es: aiData ? aiData.stageEs : info.stageEs, 
      en: aiData ? aiData.stageEn : info.stageEn 
    },
    lines: aiData ? aiData.lines : undefined
  };
};

export const rollCoins = (): CoinRollResult => {
  const coins: [number, number, number] = [
    Math.random() < 0.5 ? 2 : 3,
    Math.random() < 0.5 ? 2 : 3,
    Math.random() < 0.5 ? 2 : 3
  ];
  const sum = (coins[0] + coins[1] + coins[2]) as LineValue;
  return { coins, sum };
};

export const getTrigramFromLines = (line1: boolean, line2: boolean, line3: boolean): TrigramInfo => {
  const key = `${line1 ? 1 : 0}${line2 ? 1 : 0}${line3 ? 1 : 0}`;
  return trigrams[key];
};

export const getHexagramNumber = (lowerId: string, upperId: string): number => {
  return hexagramMatrix[lowerId]?.[upperId] || 1;
};

export const interpretHexagram = (lines: LineValue[]): { primary: HexagramData; secondary?: HexagramData; movingLines: number[] } => {
  // Convert line values to binary representation for primary hexagram
  // line 1 is index 0 (bottom)
  const primaryLowerTrigram = getTrigramFromLines(
    lines[0] === 7 || lines[0] === 9,
    lines[1] === 7 || lines[1] === 9,
    lines[2] === 7 || lines[2] === 9
  );
  const primaryUpperTrigram = getTrigramFromLines(
    lines[3] === 7 || lines[3] === 9,
    lines[4] === 7 || lines[4] === 9,
    lines[5] === 7 || lines[5] === 9
  );

  const primaryNum = getHexagramNumber(primaryLowerTrigram.id, primaryUpperTrigram.id);
  const primaryData = getHexagramBasicData(primaryNum, primaryLowerTrigram, primaryUpperTrigram);

  // Check for moving lines (6 or 9)
  const movingLines: number[] = [];
  const secondaryLines: boolean[] = [];

  for (let i = 0; i < 6; i++) {
    const val = lines[i];
    const isYang = val === 7 || val === 9;
    if (val === 6 || val === 9) {
      movingLines.push(i + 1); // 1-indexed for the UI
      secondaryLines.push(!isYang); // Mutate line
    } else {
      secondaryLines.push(isYang); // Stable line
    }
  }

  if (movingLines.length > 0) {
    const secondaryLowerTrigram = getTrigramFromLines(secondaryLines[0], secondaryLines[1], secondaryLines[2]);
    const secondaryUpperTrigram = getTrigramFromLines(secondaryLines[3], secondaryLines[4], secondaryLines[5]);
    const secondaryNum = getHexagramNumber(secondaryLowerTrigram.id, secondaryUpperTrigram.id);
    const secondaryData = getHexagramBasicData(secondaryNum, secondaryLowerTrigram, secondaryUpperTrigram);

    return {
      primary: primaryData,
      secondary: secondaryData,
      movingLines
    };
  }

  return {
    primary: primaryData,
    movingLines
  };
};
