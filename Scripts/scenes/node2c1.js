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
    var Node2C1 = (function (_super) {
        __extends(Node2C1, _super);
        function Node2C1() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node2C1.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 2 choice 1 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node1BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Node 2 Choice 1", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("Node2C1BTN", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C2BTN = new objects.Button("Node2C2BTN", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C2BTN);
            this._node2C2BTN.on("click", this._onNode2C2BTN, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._otherBTN = new objects.Button("OtherBTN", config.Screen.CENTER_X - 25, config.Screen.CENTER_Y + 250);
            this.addChild(this._otherBTN);
            this._otherBTN.on("click", this._onOtherBTN, this);
            if (isTriedAirTravel == true) {
                this._moneyBTN = new objects.Button("OtherBTN", config.Screen.CENTER_X - 25, config.Screen.CENTER_Y + 100);
                this.addChild(this._moneyBTN);
                this._moneyBTN.on("click", this._onMoneyBTN, this);
            }
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Node2C1.prototype.update = function () {
            // Update objects
        };
        Node2C1.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE3C1;
            changeScene();
        };
        Node2C1.prototype._onNode2C2BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE3C2;
            changeScene();
        };
        Node2C1.prototype._onOtherBTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE2C2;
            changeScene();
        };
        Node2C1.prototype._onMoneyBTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            alert("You Borrowed Money!");
            isBorMoney = true;
        };
        return Node2C1;
    }(objects.Scene));
    scenes.Node2C1 = Node2C1;
})(scenes || (scenes = {}));
//# sourceMappingURL=node2c1.js.map