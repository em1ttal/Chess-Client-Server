// shared/types/AIRequest.ts

import { GameState } from './GameState';

export enum AIDifficulty {
  EASY = 1,      // Makes random or basic moves
  MEDIUM = 3,    // Moderate search depth
  HARD = 5,      // Deeper search
  EXPERT = 8,    // Very challenging
}

export interface AIRequest {
  gameState: GameState;      // Current game state
  difficulty: AIDifficulty;  // AI difficulty level
  timeLimit?: number;        // Optional time limit in milliseconds
  position?: string;         // Optional FEN position to evaluate
}

export interface AIResponse {
  move: string;              // Best move in UCI format (e.g., "e2e4")
  evaluation: number;        // Position evaluation (positive favors white)
  depth: number;             // Search depth reached
  time: number;              // Time spent calculating in milliseconds
  pv?: string[];             // Principal variation (best line found)
}