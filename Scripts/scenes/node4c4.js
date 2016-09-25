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
    var Node4C4 = (function (_super) {
        __extends(Node4C4, _super);
        function Node4C4() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node4C4.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 2 choice 1 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node4C4BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Your first son quickly flashes his money in an attempt to bribe the authorities. The inspectors are insulted, but agree not to arrest your first son. There is no way your first son can go to Canada now, he will be sent back to you immediately.", "25px Consolar", "#000000", config.Screen.CENTER_X * 2.5, config.Screen.CENTER_Y * 1.2);
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
        Node4C4.prototype.update = function () {
            // Update objects
        };
        Node4C4.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node4C4;
    }(objects.Scene));
    scenes.Node4C4 = Node4C4;
})(scenes || (scenes = {}));
//# sourceMappingURL=node4c4.js.map