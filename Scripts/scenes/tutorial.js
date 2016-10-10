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
            console.log("Tutorial Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node2C1BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Tutorial", "25px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._gameLabel.lineWidth = 900;
            this._gameLabel.lineHeight = 30;
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._backBTN = new objects.Button("BackBTN", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._backBTN);
            this._backBTN.on("click", this._onBackBTN, this);
            this.addShape();
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
        Tutorial.prototype._onBackBTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        Tutorial.prototype._onMoneyBTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            alert("You Borrowed Money!");
            //isBorMoney = true;
        };
        Tutorial.prototype.addShape = function () {
            this._circle = new createjs.Shape;
            this._circle.graphics.beginFill(" #e9ff33  ").drawCircle(0, 0, 100);
            this._circle.x = config.Screen.CENTER_X;
            this._circle.y = config.Screen.CENTER_Y;
            stage.addChild(this._circle);
            this._circle.on("mouseover", this.changeTrans, this);
        };
        Tutorial.prototype.changeTrans = function () {
            this._circle.alpha = 0.5;
        };
        return Tutorial;
    }(objects.Scene));
    scenes.Tutorial = Tutorial;
})(scenes || (scenes = {}));
//# sourceMappingURL=tutorial.js.map