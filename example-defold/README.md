# Defold

A minimal Defold Pong game on Wavedash, exported to HTML5.

## Prerequisites

- [Defold editor](https://defold.com/) (GUI build), **or** [Java](https://adoptium.net/) + [bob.jar](https://github.com/defold/defold/releases) (CLI build)
- [Wavedash CLI](https://github.com/wvdsh/cli/releases)

## Quick start

Replace `game_id` in [`wavedash.toml`](./wavedash.toml) with your Wavedash game ID, then either:

- **Editor**: Open the project in Defold and pick **Project → Bundle → HTML5 Application**, set output directory to `dist/`.
- **CLI**: Run `./build.sh` (requires `bob.jar` in the project root).

> Defold reserves the top-level `build/` directory for its own build cache, so upload from `dist/` instead.

## Wavedash integration

The project depends on the [Wavedash Defold SDK](https://github.com/wvdsh/sdk-defold) (`dependencies#0` in `game.project`; run **Project → Fetch Libraries** in the editor, or let `./build.sh` resolve it). The extension forwards engine load progress to Wavedash automatically, and `main/pong.gui_script` calls `wavedash.init({ debug = true }, callback)` once the court is set up. Native extensions are compiled by Defold's build server, so the first build needs a network connection.

Then:

```
wavedash dev
```
