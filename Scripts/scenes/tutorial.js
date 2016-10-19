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
            this._bg = new createjs.Bitmap(assets.getResult("tutBG"));
            this.addChild(this._bg);
            this._addAssets();
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Tutorial", "70px Impact", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y + 250);
            this._gameLabel.lineWidth = 900;
            this._gameLabel.lineHeight = 30;
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._backBTN = new objects.Button("BackBTN", config.Screen.CENTER_X + 180, config.Screen.CENTER_Y + 150);
            this.addChild(this._backBTN);
            this._backBTN.on("click", this._onBackBTN, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Tutorial.prototype.update = function () {
            // Update objects
            this._bird.update();
        };
        Tutorial.prototype._onBackBTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        Tutorial.prototype._addAssets = function () {
            this._pie = new objects.Pie("Pie", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._pie.name = "pie";
            this.addChild(this._pie);
            this._bird = new objects.Bird("bird", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 120, 0);
            this.addChild(this._bird);
            this._healthBar = new createjs.Shape;
            this._healthBar.graphics.beginFill(" #ff0000  ").drawRect(30, 0, 70, 350);
            this._healthBar.x = config.Screen.CENTER_X + 435;
            this._healthBar.y = config.Screen.CENTER_Y + 100;
            this._healthBar.rotation += 180;
            this.addChild(this._healthBar);
        };
        return Tutorial;
    }(objects.Scene));
    scenes.Tutorial = Tutorial;
})(scenes || (scenes = {}));
//# sourceMappingURL=tutorial.js.map