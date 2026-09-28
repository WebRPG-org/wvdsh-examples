# GameMaker

A minimal GameMaker Studio 2 Pong game on Wavedash, exported with the GX.games (WebAssembly) target.

## Prerequisites

- [GameMaker Studio 2](https://gamemaker.io/)
- [Wavedash CLI](https://github.com/wvdsh/cli/releases)

## Quick start

1. Open `example_gamemaker.yyp` in GameMaker Studio 2.
2. Set the target platform to **GX.games** and choose **Build → Create Executable**.
3. Extract the resulting archive into `build/` so that `build/index.html` exists.
4. Replace `game_id` in [`wavedash.toml`](./wavedash.toml) with your Wavedash game ID.
5. Run:

    ```
    wavedash dev
    ```
