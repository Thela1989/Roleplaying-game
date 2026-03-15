# Roleplaying Game

A fantasy roleplaying game project built with React (frontend) and Express (backend).

## Project Status

This game is currently under development.

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL (via `pg`)

## Project Structure

```text
.
|- src/                # Frontend source code
|- public/             # Static assets
|- backend/            # Express API + database connection
|- package.json        # Frontend scripts and dependencies
|- backend/package.json
```

## Getting Started

### 1. Install dependencies

Frontend:

```bash
npm install
```

Backend:

```bash
cd backend
npm install
```

### 2. Configure environment variables (backend)

Create a `.env` file inside `backend/` and add:

```env
DB_USER=your_user
DB_HOST=localhost
DB_NAME=your_database
DB_PASSWORD=your_password
DB_PORT=5432
```

### 3. Run the app

Start backend (from `backend/`):

```bash
node index.js
```

Start frontend (from project root):

```bash
npm run dev
```

Frontend runs on Vite's default dev server and backend runs on `http://localhost:3000`.

## Available Frontend Scripts

From the project root:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Notes

- Backend currently has no dedicated start script in `backend/package.json`; use `node index.js`.
- External item data is fetched from the DnD 5e API.

## Roadmap

- Add quests and progression systems
- Expand combat mechanics and balancing
- Improve inventory management and item effects
- Add save/load support for player progress
- Increase test coverage for frontend and backend
