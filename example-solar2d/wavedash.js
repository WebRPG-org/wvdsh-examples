// Solar2D JavaScript module loader. `require "wavedash"` in main.lua picks
// up this file because its path matches the module name; the global
// `wavedash` object below becomes a table of callable methods from Lua.
// The host injects window.Wavedash (the live SDK instance) before the game
// runs, so call it directly.

var Wavedash = window.Wavedash;

var wavedash = {
    init: function () {
        Wavedash.init();
    },
    updateLoadProgressZeroToOne: function (p) {
        Wavedash.updateLoadProgressZeroToOne(p);
    },
};
