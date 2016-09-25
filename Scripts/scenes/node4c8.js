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
    var Node4C8 = (function (_super) {
        __extends(Node4C8, _super);
        function Node4C8() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node4C8.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 4 choice 8 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node4C8BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("The authorities scoff at your second son's petty bribe, but they were unprepared for the sweetness of his chocolates! Huzzah! Your second son will not be arrested, and has got himself an escort back home to you; although, he will be unable to go to Canada.", "25px Consolar", "#000000", config.Screen.CENTER_X * 2.65, config.Screen.CENTER_Y * 1.2);
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
        Node4C8.prototype.update = function () {
            // Update objects
        };
        Node4C8.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node4C8;
    }(objects.Scene));
    scenes.Node4C8 = Node4C8;
})(scenes || (scenes = {}));
//# sourceMappingURL=node4c8.js.map