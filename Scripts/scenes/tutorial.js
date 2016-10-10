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
    var Tutorial = (function (_super) {
        __extends(Tutorial, _super);
        function Tutorial() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Tutorial.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 2 choice 1 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node2C1BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("This is your first son. He's married to an acceptable daughter in law, but has given you no grandchildren yet. First son is employed and has a lot of money saved up. Should he travel by air or sea?", "25px Consolar", "#000000", config.Screen.CENTER_X * 2, config.Screen.CENTER_Y * 1.2);
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
            // if (isTriedAirTravel == true){
            //     this._moneyBTN = new objects.Button("BorrowBTN", config.Screen.CENTER_X + 300, config.Screen.CENTER_Y - 150);
            //     this.addChild(this._moneyBTN);
            //     this._moneyBTN.on("click", this._onMoneyBTN, this);
            // }
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Tutorial.prototype.update = function () {
            // Update objects
        };
        Tutorial.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            //scene = config.Scene.NODE3C1;
            changeScene();
        };
        Tutorial.prototype._onNode2C2BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            //scene = config.Scene.NODE3C2;
            changeScene();
        };
        Tutorial.prototype._onOtherBTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            //scene = config.Scene.NODE2C2;
            changeScene();
        };
        Tutorial.prototype._onMoneyBTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            alert("You Borrowed Money!");
            //isBorMoney = true;
        };
        return Tutorial;
    }(objects.Scene));
    scenes.Tutorial = Tutorial;
})(scenes || (scenes = {}));
//# sourceMappingURL=tutorial.js.map