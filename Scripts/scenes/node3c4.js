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
    var Node3C4 = (function (_super) {
        __extends(Node3C4, _super);
        function Node3C4() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node3C4.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 2 choice 1 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node1BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Node 3 Choice 4", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("Node2C1BTN", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C2BTN = new objects.Button("Node2C2BTN", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C2BTN);
            this._node2C2BTN.on("click", this._onNode2C2BTN, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Node3C4.prototype.update = function () {
            // Update objects
        };
        Node3C4.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE4C7;
            changeScene();
        };
        Node3C4.prototype._onNode2C2BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE4C8;
            changeScene();
        };
        return Node3C4;
    }(objects.Scene));
    scenes.Node3C4 = Node3C4;
})(scenes || (scenes = {}));
//# sourceMappingURL=node3c4.js.map