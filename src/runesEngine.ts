import { RuneData, RUNES_DECK } from './data/runesData';

export type NornPosition = "urd" | "verdandi" | "skuld";

export interface RunesDrawResult {
  urd: RuneData;      // Past / Ancestral Root / What was
  verdandi: RuneData; // Present / Active Friction / What is happening
  skuld: RuneData;    // Future / Emerging Potential / What must become
}

export { RUNES_DECK, type RuneData };

/**
 * Draws 3 unique random runes from the Elder Futhark deck (The Norns Spread).
 */
export function drawRunesSpread(): RunesDrawResult {
  const deck = [...RUNES_DECK];

  // Fisher-Yates Shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return {
    urd: deck[0],
    verdandi: deck[1],
    skuld: deck[2]
  };
}
