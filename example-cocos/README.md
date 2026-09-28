# Cocos

A minimal Cocos Creator Pong game on Wavedash, exported to Web Mobile.

## Prerequisites

- [Cocos Creator 3.8+](https://www.cocos.com/en/creator-download)
- [Wavedash CLI](https://github.com/wvdsh/cli/releases)

## Quick start

Replace `game_id` in [`wavedash.toml`](./wavedash.toml) with your Wavedash game ID, then:

1. Open this folder in Cocos Creator (via the Dashboard, "Add Project"). Cocos will generate `.meta` files and the `library/`, `temp/`, and `profiles/` directories on first open.
2. Build for **Web Mobile** with the default output directory (`build/web-mobile`).
3. Run:

    ```
    wavedash dev
    ```

## Controls

- `W` / `S` — left paddle. The right paddle is controlled by a simple tracking AI.

## Notes

- A built `build/web-mobile` is committed so the example runs as-is; rebuild from Cocos Creator (Web Mobile template) after changing the project, before running `wavedash dev`.

## Load-progress shim

The committed `build/web-mobile/index.html` wraps `fetch` to stream Cocos's bundle downloads into `Wavedash.updateLoadProgressZeroToOne`. A fresh build doesn't include it — re-apply it after building (or move it into a `build-templates/web-mobile/index.ejs`), or the loading bar jumps straight to done (the game still initializes).
