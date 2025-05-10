// shared/types/GameState.ts

export enum GameMode {
    PLAYER_VS_PLAYER = 'pvp',
    PLAYER_VS_AI = 'pva'
  }
  
  export enum GameStatus {
    WAITING = 'waiting',      // Waiting for players to join
    ACTIVE = 'active',        // Game is in progress
    CHECKMATE = 'checkmate',  // Game ended in checkmate
    STALEMATE = 'stalemate',  // Game ended in stalemate
    DRAW = 'draw',            // Game ended in draw
    ABANDONED = 'abandoned',  // One player left the game
  }
  
  export enum PlayerColor {
    WHITE = 'w',
    BLACK = 'b',
  }
  
  export interface Player {
    id: string;
    name: string;
    color: PlayerColor;
    isAI: boolean;
    aiLevel?: number;         // Only relevant for AI players
  }
  
  export interface GameState {
    id: string;               // Unique game identifier
    mode: GameMode;           // Type of game (pvp, pva)
    status: GameStatus;       // Current game status
    players: Player[];        // Array of 2 players
    fen: string;              // FEN notation of current board position
    pgn: string;              // PGN notation of the game
    turn: PlayerColor;        // Which color moves next
    moveHistory: string[];    // List of moves in algebraic notation
    startTime: number;        // Game start timestamp
    lastMoveTime: number;     // Last move timestamp
    timeControl?: {           // Optional time control settings
      initialTime: number;    // Initial time in seconds
      increment: number;      // Increment in seconds
      whiteTimeRemaining: number;
      blackTimeRemaining: number;
    };
    winner?: PlayerColor;     // Winner of the game if finished
    drawOffer?: PlayerColor;  // Player who offered a draw
    check: boolean;           // Is the king in check
    checkmate: boolean;       // Is it checkmate
    stalemate: boolean;       // Is it stalemate
    insufficientMaterial: boolean; // Draw due to insufficient material
    threefoldRepetition: boolean;  // Draw due to threefold repetition
    fiftyMoveRule: boolean;   // Draw due to fifty move rule
  }