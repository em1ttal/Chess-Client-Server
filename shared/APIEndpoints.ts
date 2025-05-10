// shared/types/APIEndpoints.ts

// Define all your REST API endpoints in one place for consistency
export const API = {
    GAMES: '/api/games',
    GAME_BY_ID: (id: string) => `/api/games/${id}`,
    GAME_MOVES: (id: string) => `/api/games/${id}/moves`,
    LEGAL_MOVES: (id: string) => `/api/games/${id}/legal-moves`,
    ANALYSIS: '/api/analysis',
    USERS: '/api/users',
    USER_BY_ID: (id: string) => `/api/users/${id}`,
    AUTH: {
      LOGIN: '/api/auth/login',
      REGISTER: '/api/auth/register',
      LOGOUT: '/api/auth/logout'
    }
  };