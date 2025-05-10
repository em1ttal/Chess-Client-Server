// shared/types/ChessUtils.ts

// Helper types for chess-related utilities
export interface PiecePosition {
    type: PieceType;
    color: 'w' | 'b';
    square: string;
  }
  
  export enum PieceType {
    PAWN = 'p',
    KNIGHT = 'n',
    BISHOP = 'b',
    ROOK = 'r',
    QUEEN = 'q',
    KING = 'k'
  }
  
  export interface BoardPosition {
    pieces: PiecePosition[];
    fen: string;
  }
  
  export interface AnalysisResult {
    bestMove: string;
    evaluation: number;
    depth: number;
    pvLine: string[];
    positions: {
      [fen: string]: {
        evaluation: number;
        bestMove: string;
      }
    };
  }