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
    var Node4C7 = (function (_super) {
        __extends(Node4C7, _super);
        function Node4C7() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node4C7.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 4 choice 7 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node4C7BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Using all his cunning, your second son hides away from the authorities as they detain people around him. When all is quite, your second son hears that the ship he's on is being confiscated. Luckily, the boat will be sent back to where it originated. Your second son will be returning to you.", "25px Consolar", "#000000", config.Screen.CENTER_X * 2.9, config.Screen.CENTER_Y * 1.2);
            this._gameLabel.lineWidth = 900;
            this._gameLabel.lineHeight = 30;
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("ReplayBTN", config.Screen.CENTER_X - 25, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Node4C7.prototype.update = function () {
            // Update objects
        };
        Node4C7.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node4C7;
    }(objects.Scene));
    scenes.Node4C7 = Node4C7;
})(scenes || (scenes = {}));
//# sourceMappingURL=node4c7.js.map