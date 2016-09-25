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
    var Node3C2 = (function (_super) {
        __extends(Node3C2, _super);
        function Node3C2() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node3C2.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 3 choice 2 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node3C2BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Look at your first son, he had enough money for a cabin with a view! That's a new shirt he's wearing as well, someone is having a lot of fun after leaving their mother. The ship your first son is on was suddenly detained on suspicions of transporting some illegal immigrants. Inspectors rush into your first son's room, should he avoid capture by jumping into the sea or bribing the inspectors?", "25px Consolar", "#000000", config.Screen.CENTER_X * 3.9, config.Screen.CENTER_Y * 1.2);
            this._gameLabel.lineWidth = 900;
            this._gameLabel.lineHeight = 30;
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("JumpBTN", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C2BTN = new objects.Button("BribeBTN", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C2BTN);
            this._node2C2BTN.on("click", this._onNode2C2BTN, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Node3C2.prototype.update = function () {
            // Update objects
        };
        Node3C2.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE4C3;
            changeScene();
        };
        Node3C2.prototype._onNode2C2BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE4C4;
            changeScene();
        };
        return Node3C2;
    }(objects.Scene));
    scenes.Node3C2 = Node3C2;
})(scenes || (scenes = {}));
//# sourceMappingURL=node3c2.js.map