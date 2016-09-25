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
    var Node2C2 = (function (_super) {
        __extends(Node2C2, _super);
        function Node2C2() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node2C2.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 2 choice 2 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node2C2BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("This is your second son. He recently finished school, and is not providing you with grandchildren anytime soon. Second son has little money, but always has chocolate when he travels. Should he travel by air or sea?", "25px Consolar", "#000000", config.Screen.CENTER_X * 2.2, config.Screen.CENTER_Y * 1.2);
            this._gameLabel.lineWidth = 900;
            this._gameLabel.lineHeight = 30;
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("AirBTN", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C2BTN = new objects.Button("SeaBTN", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C2BTN);
            this._node2C2BTN.on("click", this._onNode2C2BTN, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._otherBTN = new objects.Button("OtherBTN", config.Screen.CENTER_X - 25, config.Screen.CENTER_Y + 250);
            this.addChild(this._otherBTN);
            this._otherBTN.on("click", this._onOtherBTN, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Node2C2.prototype.update = function () {
            // Update objects
        };
        Node2C2.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            if (isBorMoney == true) {
                scene = config.Scene.NODE3C3;
                changeScene();
            }
            else {
                scene = config.Scene.NODE3C3BLK;
                changeScene();
            }
        };
        Node2C2.prototype._onNode2C2BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE3C4;
            changeScene();
        };
        Node2C2.prototype._onOtherBTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE2C1;
            changeScene();
        };
        return Node2C2;
    }(objects.Scene));
    scenes.Node2C2 = Node2C2;
})(scenes || (scenes = {}));
//# sourceMappingURL=node2c2.js.map