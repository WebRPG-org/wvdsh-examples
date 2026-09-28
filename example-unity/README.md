# Unity

A minimal Unity Pong game on Wavedash, using Netcode for GameObjects with the Wavedash P2P transport, exported to WebGL.

## Prerequisites

- [Unity 6](https://unity.com/releases/editor/archive) (6000.0.73f1)
- [Wavedash CLI](https://github.com/wvdsh/cli/releases)

## Quick start

1. Open the project in Unity.
2. The Wavedash SDK package (`com.wavedash.sdk`) is already listed in `Packages/manifest.json`, pinned to a tested commit; Unity installs it when the project opens. To use it in your own project, add `https://github.com/wvdsh/sdk-unity.git` via **Window → Package Manager → Add package from git URL**.
3. Build for **WebGL** with the output directory set to `Build/index/`.
4. Replace `game_id` in [`wavedash.toml`](./wavedash.toml) with your Wavedash game ID.
5. Run:

    ```
    wavedash dev
    ```
