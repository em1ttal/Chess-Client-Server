// shared/types/Constants.ts

// Define constants used across the application
export const CHESS_CONSTANTS = {
    FILES: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    RANKS: [1, 2, 3, 4, 5, 6, 7, 8],
    STARTING_FEN: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    PIECE_VALUES: {
      'p': 1,
      'n': 3,
      'b': 3,
      'r': 5,
      'q': 9,
      'k': 0
    },
    DEFAULT_AI_DEPTH: 3,
    DEFAULT_THINKING_TIME: 1000
  };
  
  export const UI_CONSTANTS = {
    BOARD_THEMES: ['classic', 'wooden', 'blue', 'green', 'red'],
    PIECE_SETS: ['standard', 'cburnett', 'fantasy', 'spatial'],
    ANIMATION_SPEED: 300, // ms
    HIGHLIGHT_COLORS: {
      SELECTED: 'rgba(255, 255, 0, 0.5)',
      LEGAL_MOVE: 'rgba(0, 255, 0, 0.3)',
      LAST_MOVE: 'rgba(0, 0, 255, 0.3)',
      CHECK: 'rgba(255, 0, 0, 0.5)'
    }
  };