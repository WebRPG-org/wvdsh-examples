# Bevy

A minimal Bevy Pong game on Wavedash, compiled to WebAssembly via Trunk.

[See it live](https://wavedash.com/playtest/bevy-example/970c0a6e-ee84-48ee-b4f2-0a4ca8f14a9a)

## Prerequisites

- [Rust](https://rust-lang.org/tools/install/)
- [Wavedash CLI](https://github.com/wvdsh/cli/releases)

## Quick start

Replace `game_id` in [`wavedash.toml`](./wavedash.toml) with your Wavedash game ID, then:

```
rustup target install wasm32-unknown-unknown
cargo install trunk
trunk build --release --public-url ./
wavedash dev
```

## Load-progress shim

Trunk regenerates `dist/index.html` from the stock `index.html`, so after `trunk build` re-apply the module script at the top of the committed `dist/index.html` (it streams the `.wasm` download into `Wavedash.updateLoadProgressZeroToOne`). Without it the game still initializes; the loading bar just jumps to done.
