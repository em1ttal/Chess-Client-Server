// shared/types/Move.ts

import { PlayerColor, GameState } from './GameState';

export interface Square {
  file: string;     // 'a' to 'h'
  rank: number;     // 1 to 8
  notation: string; // e.g., 'a1', 'e4'
}

export interface Move {
  from: Square;     // Starting square
  to: Square;       // Target square
  piece: string;    // Piece being moved ('p','n','b','r','q','k')
  color: PlayerColor; // Color of the piece being moved
  captured?: string; // Type of piece captured (if any)
  promotion?: string; // Type of piece promoted to (if pawn promotion)
  san: string;      // Standard Algebraic Notation (e.g., "e4", "Nf3")
  uci: string;      // Universal Chess Interface notation (e.g., "e2e4")
  flags: MoveFlags; // Special move flags
  timestamp: number; // When the move was made
}

export interface MoveFlags {
  capture: boolean;  // Move captures a piece
  promotion: boolean; // Move includes a promotion
  enPassant: boolean; // Move is an en passant capture
  castling: boolean;  // Move is a castling move
  kingSide?: boolean; // If castling, is it kingside?
  queenside?: boolean; // If castling, is it queenside?
  check: boolean;     // Move puts opponent in check
  checkmate: boolean; // Move puts opponent in checkmate
}

export interface MoveRequest {
  gameId: string;   // ID of the game
  playerId: string; // ID of the player making the move
  move: {           // The move in one of several formats
    from: string;   // e.g., "e2"
    to: string;     // e.g., "e4"
    promotion?: string; // If pawn promotion, the piece to promote to
  };
}

export interface MoveResponse {
  success: boolean;
  gameState?: GameState;
  error?: string;
  move?: Move;
}

export interface LegalMovesRequest {
  gameId: string;
  position?: string; // Optional FEN position, uses current position if not provided
  square?: string;   // Optional square to get moves from (e.g., "e2")
}

export interface LegalMovesResponse {
  moves: Move[];
}