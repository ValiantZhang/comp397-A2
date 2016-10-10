/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var MainGame = (function (_super) {
        __extends(MainGame, _super);
        function MainGame() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        MainGame.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 1 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node1BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("You are a proud mother of two sons, but they are ungrateful and want to have a better life elsewhere! You hear of a wonderful place called CANADA and decide to send one of your beloved sons there. You can only send one, who will it be?", "25px Consolar", "#000000", config.Screen.CENTER_X * 2.5, config.Screen.CENTER_Y * 1.2);
            this._gameLabel.lineWidth = 900;
            this._gameLabel.lineHeight = 30;
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("Node2C1BTN", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 200);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C2BTN = new objects.Button("Node2C2BTN", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 200);
            this.addChild(this._node2C2BTN);
            this._node2C2BTN.on("click", this._onNode2C2BTN, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        MainGame.prototype.update = function () {
            // Update objects
        };
        MainGame.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            //scene = config.Scene.NODE2C1;
            changeScene();
        };
        MainGame.prototype._onNode2C2BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            //scene = config.Scene.NODE2C2;
            changeScene();
        };
        return MainGame;
    }(objects.Scene));
    scenes.MainGame = MainGame;
})(scenes || (scenes = {}));
//# sourceMappingURL=mainGame.js.map