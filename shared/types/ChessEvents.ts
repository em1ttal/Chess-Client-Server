// shared/types/ChessEvents.ts

import { GameState } from './GameState';
import { Move } from './Move';
import { GameSettings } from './GameSettings';

// Socket event names
export enum SocketEvents {
  // Game events
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CREATE_GAME = 'create_game',
  JOIN_GAME = 'join_game',
  LEAVE_GAME = 'leave_game',
  MAKE_MOVE = 'make_move',
  GAME_UPDATED = 'game_updated',
  REQUEST_AI_MOVE = 'request_ai_move',
  
  // Game actions
  OFFER_DRAW = 'offer_draw',
  ACCEPT_DRAW = 'accept_draw',
  DECLINE_DRAW = 'decline_draw',
  REQUEST_TAKEBACK = 'request_takeback',
  ACCEPT_TAKEBACK = 'accept_takeback',
  DECLINE_TAKEBACK = 'decline_takeback',
  RESIGN = 'resign',
  
  // Chat events
  SEND_MESSAGE = 'send_message',
  RECEIVE_MESSAGE = 'receive_message',
  
  // Error events
  ERROR = 'error'
}

// Payloads for socket events
export interface CreateGamePayload {
  settings: GameSettings;
  playerName: string;
  preferredColor?: 'w' | 'b' | 'random';
}

export interface JoinGamePayload {
  gameId: string;
  playerName: string;
}

export interface MakeMovePayload {
  gameId: string;
  move: {
    from: string;
    to: string;
    promotion?: string;
  };
}

export interface GameUpdatedPayload {
  gameState: GameState;
  lastMove?: Move;
}

export interface ChatMessagePayload {
  gameId: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: number;
}

export interface GameErrorPayload {
  gameId: string;
  errorCode: string;
  message: string;
}