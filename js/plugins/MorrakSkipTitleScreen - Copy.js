/*:
 * @target MZ
 * @plugindesc Skips the title screen and starts a new game directly on a specified map.
 * @author Morrak
 * 
 * @help
 * This plugin skips the title screen and launches a new game on a specified map
 * with proper game system initialization.
 * 
 * Set your desired starting map, X/Y coordinates, and direction in the code below.
 */

(() => {
    const startMapId = 4;   // 🔧 Change this to your map ID
    const startX = 5;      // 🔧 Change this to your start X coordinate
    const startY = 6;      // 🔧 Change this to your start Y coordinate
    const startDirection = 2; // 2 = down, 4 = left, 6 = right, 8 = up
    const fadeType = 0;     // 0 = black, 1 = white

    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        _Scene_Boot_start.call(this);
        if (!DataManager.isBattleTest() && !DataManager.isEventTest()) {
            this.checkPlayerLocation();
            DataManager.setupNewGame();
            $gamePlayer.reserveTransfer(startMapId, startX, startY, startDirection, fadeType);
            SceneManager.goto(Scene_Map);
        }
    };
})();