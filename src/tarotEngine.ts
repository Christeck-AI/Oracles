import { TarotCardData, TAROT_DECK } from './data/tarotData';

export type SpreadPosition = "past" | "present" | "future";

export interface SpreadDrawResult {
  past: TarotCardData;
  present: TarotCardData;
  future: TarotCardData;
}

export { TAROT_DECK, type TarotCardData };

/**
 * Draws 3 unique random cards from the Major Arcana deck.
 */
export function drawTarotSpread(): SpreadDrawResult {
  const deck = [...TAROT_DECK];
  
  // Shuffle array (Fisher-Yates)
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return {
    past: deck[0],
    present: deck[1],
    future: deck[2]
  };
}
