import Wavedash from "@wvdsh/sdk-js";
import StartGame from './game/main';

document.addEventListener('DOMContentLoaded', async () => {

    // Phaser booting; the Game scene calls init() once its loader completes.
    Wavedash.updateLoadProgressZeroToOne(0.5);
    StartGame('game-container');

});
