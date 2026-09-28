# Construct

A minimal Construct 3 Pong game on Wavedash.

## Prerequisites

- [Construct 3](https://www.construct.net/)
- [Wavedash CLI](https://github.com/wvdsh/cli/releases)

## Quick start

1. Open the project in Construct 3 and export via **Menu → Project → Export → Web (HTML5)**, output directory `build/`
2. Replace `game_id` in [`wavedash.toml`](./wavedash.toml) with your Wavedash game ID
3. Run:

```
wavedash dev
```

## Load-progress shim

The committed `build/index.html` wraps `fetch` to stream Construct's asset downloads into `Wavedash.updateLoadProgressZeroToOne`. A fresh export from Construct doesn't include it — re-apply it after exporting, or the loading bar jumps straight to done (the game still initializes).
