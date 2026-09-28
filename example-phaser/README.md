# example-phaser

Pong in Phaser 4 + Vite, deployed to Wavedash.

## Commands

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the Vite dev server on `localhost:8080` |
| `npm run build` | Build to `./dist` |
| `wavedash dev` | Run the built `./dist` in the Wavedash sandbox |

## Wavedash integration

The Wavedash host injects `window.Wavedash` (the live SDK instance) before your code runs. `src/main.js` reports early progress and starts Phaser; the `Game` scene calls `init()` when its loader completes (not from `postBoot`, which fires before any scene has loaded):

```js
// src/game/scenes/Game.js
import Wavedash from "@wvdsh/sdk-js";

preload() {
  this.load.on('progress', (p) => Wavedash.updateLoadProgressZeroToOne(p));
  this.load.once('complete', () => {
    Wavedash.updateLoadProgressZeroToOne(1);
    Wavedash.init({ debug: true });
  });
}
```

`@wvdsh/sdk-js` (v1.3+) is a thin wrapper: its default export is the host-injected `window.Wavedash`, typed. Importing it outside Wavedash (e.g. the Vite dev server) throws a clear error.
