# LiveKit Meet Electron

Electron + React + TypeScript + Vite desktop meeting app powered by LiveKit.

## Setup
Copy .env.example to .env, install dependencies, then run Vite and Electron in separate terminals.

```bash
npm install
npm run dev
```

In another terminal:
```bash
npm run electron
```

Build Windows installer:
```bash
npm run build
```

The current MVP keeps token generation in Electron main-process IPC. For production, move token generation to your backend because a packaged desktop app cannot keep an API secret permanently secret.

Features: camera, microphone, pre-join preview, participant grid, screen sharing via LiveKit controls, audio renderer, and Windows NSIS packaging.