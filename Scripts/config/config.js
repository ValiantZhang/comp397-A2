/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.NODE1 = 1;
        Scene.NODE2C1 = 2;
        Scene.NODE2C2 = 3;
        Scene.NODE3C1 = 4;
        Scene.NODE3C2 = 5;
        Scene.NODE3C3 = 6;
        Scene.NODE3C3BLK = 7;
        Scene.NODE3C4 = 8;
        Scene.NODE4C1 = 9;
        Scene.NODE4C2 = 10;
        Scene.NODE4C3 = 11;
        Scene.NODE4C4 = 12;
        Scene.NODE4C5 = 13;
        Scene.NODE4C6 = 14;
        Scene.NODE4C7 = 15;
        Scene.NODE4C8 = 16;
        Scene.GAMEOVER = 50;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 1024;
        Screen.HEIGHT = 768;
        Screen.CENTER_X = 512;
        Screen.CENTER_Y = 384;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map