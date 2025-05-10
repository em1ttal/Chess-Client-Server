// shared/types/GameSettings.ts

import { GameMode } from './GameState';
import { AIDifficulty } from './AIRequest';

export interface GameSettings {
  mode: GameMode;
  timeControl: TimeControlSettings | null;
  aiSettings?: AISettings;
  allowTakebacks: boolean;
  allowDrawOffers: boolean;
  incrementBeforeMove: boolean; // Whether time increment is added before or after move
}

export interface TimeControlSettings {
  type: TimeControlType;
  baseTime: number;         // Base time in seconds
  increment: number;        // Increment in seconds
  movesPerTimeControl?: number; // For traditional time controls
}

export enum TimeControlType {
  NONE = 'none',            // No time control
  BULLET = 'bullet',        // Very fast (< 3 min)
  BLITZ = 'blitz',          // Fast (3-10 min)
  RAPID = 'rapid',          // Medium (10-30 min)
  CLASSICAL = 'classical',  // Slow (> 30 min)
  CUSTOM = 'custom'         // Custom time settings
}

export interface AISettings {
  difficulty: AIDifficulty;
  thinkingTime: number;    // Max calculation time in ms
  openingBook: OpeningBookType;
  depthLimit?: number;     // Limit search depth regardless of time
}

export enum OpeningBookType {
  NONE = 'none',
  STANDARD = 'standard',
  AGGRESSIVE = 'aggressive',
  DEFENSIVE = 'defensive',
  CUSTOM = 'custom'
}