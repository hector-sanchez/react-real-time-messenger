
# Real-Time Messenger

A real-time chat application built with React, TypeScript, Vite, and Supabase.

## Features

- User authentication (login/register)
- Create and join chat rooms
- Real-time messaging with instant updates
- Room list and chat dashboard
- Modern, responsive UI

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/) (for authentication and real-time database)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Supabase project (see below)

### Setup

1. **Clone the repository:**
  ```sh
  git clone https://github.com/your-username/real-time-messenger.git
  cd real-time-messenger
  ```

2. **Install dependencies:**
  ```sh
  npm install
  # or
  yarn install
  ```

3. **Configure environment variables:**
  - Copy `.env.example` to `.env` and fill in your Supabase credentials:
    ```sh
    cp .env.example .env
    ```
  - Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env`.

4. **Start the development server:**
  ```sh
  npm run dev
  # or
  yarn dev
  ```
  The app will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

- `src/components/` – Reusable UI components (Auth, Navbar, ChatMessages, etc.)
- `src/pages/` – Main pages (RoomList, ChatRoom, CreateRoom)
- `src/store/` – State management (chatStore)
- `src/supabaseClient.ts` – Supabase client setup

## Deployment

You can deploy this app to Vercel, Netlify, or any static hosting provider. Make sure to set the required environment variables in your deployment settings.

## License

MIT
