# Chess Game Project Structure

## Overview
This project is a chess application featuring player vs player, player vs AI, and AI vs AI gameplay modes. The system uses a Python-based chess AI engine with a TypeScript/Node.js client-server architecture.

## Project Structure

```
chess-project/
├── README.md                     # Project documentation
├── client/                       # Frontend application 
│   ├── public/                   # Static assets
│   │   ├── images/               # Chess piece images
│   │   └── sounds/               # Game sound effects
│   ├── src/                      # Client source code
│   │   ├── components/           # React components
│   │   │   ├── Board.tsx         # Chess board component
│   │   │   ├── Piece.tsx         # Chess piece component
│   │   │   ├── MoveHistory.tsx   # Game history display
│   │   │   └── GameControls.tsx  # Game control buttons
│   │   ├── services/             # Client-side services
│   │   │   ├── GameService.ts    # Game logic service
│   │   │   └── SocketService.ts  # WebSocket connection manager
│   │   ├── models/               # TypeScript interfaces/types
│   │   │   ├── Game.ts           # Game state interface
│   │   │   └── Move.ts           # Move representation
│   │   ├── utils/                # Utility functions
│   │   │   └── notation.ts       # Chess notation utilities
│   │   ├── App.tsx               # Main React component
│   │   └── index.tsx             # Entry point
│   ├── package.json              # Client dependencies
│   └── tsconfig.json             # TypeScript configuration
├── server/                       # Backend server
│   ├── src/                      # Server source code
│   │   ├── controllers/          # Route controllers
│   │   │   ├── gameController.ts # Game management endpoints
│   │   │   └── userController.ts # User management endpoints
│   │   ├── models/               # Data models
│   │   │   ├── Game.ts           # Game model
│   │   │   └── User.ts           # User model
│   │   ├── services/             # Business logic services
│   │   │   ├── GameService.ts    # Game state management
│   │   │   └── AIService.ts      # AI service integration
│   │   ├── websocket/            # WebSocket handlers
│   │   │   └── gameHandlers.ts   # Game event handlers
│   │   ├── utils/                # Utility functions
│   │   │   └── validation.ts     # Input validation
│   │   ├── routes.ts             # API routes
│   │   └── server.ts             # Entry point
│   ├── package.json              # Server dependencies
│   └── tsconfig.json             # TypeScript configuration
├── chess_ai/                     # Python chess AI
│   ├── src/                      # AI source code
│   │   ├── engine/               # Core AI engine
│   │   │   ├── board.py          # Board representation
│   │   │   ├── evaluation.py     # Position evaluation
│   │   │   ├── search.py         # Move search algorithms
│   │   │   └── move_generator.py # Legal move generation
│   │   ├── models/               # AI models
│   │   │   ├── basic_ai.py       # Simple minimax AI
│   │   │   └── advanced_ai.py    # Advanced AI with learning
│   │   ├── utils/                # Utility functions
│   │   │   ├── notation.py       # Chess notation handling
│   │   │   └── bitboard.py       # Bitboard operations
│   │   ├── api.py                # REST API for AI service
│   │   └── main.py               # Entry point
│   ├── tests/                    # AI tests
│   │   ├── test_board.py         # Board tests
│   │   ├── test_evaluation.py    # Evaluation tests
│   │   └── test_search.py        # Search algorithm tests
│   ├── requirements.txt          # Python dependencies
│   └── Dockerfile                # AI service containerization
├── shared/                       # Shared code/types
│   └── types/                    # Type definitions
│       ├── GameState.ts          # Game state interface
│       └── AIRequest.ts          # AI request/response types
├── docker-compose.yml            # Multi-container setup
└── .gitignore                    # Git ignore file
```

## Key Components

### Client
The frontend is built with React and TypeScript, providing a responsive user interface for the chess game. It handles rendering the board, pieces, and game controls, as well as managing client-side game state and communicating with the server.

### Server
The Node.js/TypeScript server manages game sessions, player connections, and game state. It uses WebSockets for real-time communication with clients and interfaces with the AI service for computer moves.

### Chess AI
The Python-based AI engine implements chess game logic, move generation, position evaluation, and search algorithms. It exposes an API that the server can call to get AI moves.

## Setup Instructions

1. Install dependencies:
   ```
   # Server
   cd server
   npm install

   # Client
   cd client
   npm install

   # AI
   cd chess_ai
   pip install -r requirements.txt
   ```

2. Start the services:
   ```
   # Start all services
   docker-compose up

   # Or start individually:
   # AI service
   cd chess_ai
   python src/main.py

   # Server
   cd server
   npm run dev

   # Client
   cd client
   npm start
   ```

3. Access the application at http://localhost:3000

## Development Workflow

1. AI development:
   - Implement and test algorithms in the chess_ai directory
   - Run tests to verify functionality
   - Ensure the API endpoints are working correctly

2. Server development:
   - Implement game state management and validation
   - Set up WebSocket handlers for real-time updates
   - Create endpoints for AI move requests

3. Client development:
   - Build UI components for the chess board and game controls
   - Implement WebSocket communication with the server
   - Add animations and user feedback

## Deployment

The project can be deployed using Docker:
```
docker-compose build
docker-compose up -d
```

This will start all three services: client, server, and AI engine.
