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
    var Node3C1 = (function (_super) {
        __extends(Node3C1, _super);
        function Node3C1() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node3C1.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 3 choice 1 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node3C1BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("First son can afford a swanky Business Class seat, he seems a bit too happy and proud for leaving you. While on his way to Canada, your first son is handed declaration forms. Should he fill out the forms?", "25px Consolar", "#000000", config.Screen.CENTER_X * 2.15, config.Screen.CENTER_Y * 1.2);
            this._gameLabel.lineWidth = 900;
            this._gameLabel.lineHeight = 30;
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("FillBTN", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C2BTN = new objects.Button("NoFillBTN", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C2BTN);
            this._node2C2BTN.on("click", this._onNode2C2BTN, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Node3C1.prototype.update = function () {
            // Update objects
        };
        Node3C1.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE4C1;
            changeScene();
        };
        Node3C1.prototype._onNode2C2BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE4C2;
            changeScene();
        };
        return Node3C1;
    }(objects.Scene));
    scenes.Node3C1 = Node3C1;
})(scenes || (scenes = {}));
//# sourceMappingURL=node3c1.js.map