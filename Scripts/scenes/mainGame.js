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
    var MainGame = (function (_super) {
        __extends(MainGame, _super);
        function MainGame() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        MainGame.prototype.start = function () {
            // Add objects to the scene
            console.log("Game Loaded");
            //time in milliseconds
            this._spawnDelay = 5000 - this._getRandomNum();
            this._currentTick = createjs.Ticker.getTime();
            this._spawnTime = this._currentTick + this._spawnDelay;
            this._health = 350;
            this._pieSpeed = 5;
            score = 0;
            this._score = score;
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            this._scoreLabel = new objects.Label("Pies Re-Claimed: ", "30px Tahoma", "#000000", config.Screen.CENTER_X + 360, config.Screen.CENTER_Y - 350);
            this._scoreLabel.lineWidth = 900;
            this._scoreLabel.lineHeight = 30;
            this.addChild(this._scoreLabel);
            this._addHealthBar();
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("BackBTN", config.Screen.CENTER_X + 180, config.Screen.CENTER_Y + 150);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        MainGame.prototype.update = function () {
            // Update objects
            this._spawnPie();
            this._moveObjects();
            this._updateScore();
            this._increaseDifficulty();
            this._checkHealth();
        };
        MainGame.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        MainGame.prototype._addHealthBar = function () {
            this._healthBar = new createjs.Shape;
            this._healthBar.graphics.beginFill(" #ff0000  ").drawRect(30, 0, 70, this._health);
            this._healthBar.x = config.Screen.CENTER_X + 435;
            this._healthBar.y = config.Screen.CENTER_Y + 100;
            this._healthBar.rotation += 180;
            this.addChild(this._healthBar);
        };
        MainGame.prototype._updateScore = function () {
            this._score = score;
            this._scoreLabel.text = "Pies Re-Claimed: " + this._score;
            if (score > highScore) {
                highScore = score;
            }
        };
        MainGame.prototype._spawnPie = function () {
            if (createjs.Ticker.getTime() >= this._spawnTime) {
                this._pie = new objects.Pie("Pie", config.Screen.CENTER_X - this._getRandomNum(), config.Screen.CENTER_Y + 450);
                this._pie.name = "pie";
                this.addChild(this._pie);
                this._bird = new objects.Bird("bird", this._pie.x + 100, this._pie.y + 100, this._pieSpeed);
                this.addChild(this._bird);
                this._currentTick = createjs.Ticker.getTime();
                this._spawnTime = this._currentTick + this._spawnDelay;
            }
        };
        MainGame.prototype._getRandomNum = function () {
            return Math.floor(Math.random() * ((200 + 200 - 200) + 200));
        };
        MainGame.prototype._increaseDifficulty = function () {
            if (createjs.Ticker.getTime() > 20000 && createjs.Ticker.getTime() < 21000) {
                this._pieSpeed = 10;
            }
        };
        MainGame.prototype._checkHealth = function () {
            if (this._health <= 0) {
                alert("Birds Win, Game Over");
                scene = config.Scene.MENU;
                changeScene();
            }
        };
        MainGame.prototype._moveObjects = function () {
            for (var i = 0; i < currentScene.children.length; i++) {
                if (currentScene.children[i].name == "pie")
                    currentScene.children[i].y = currentScene.children[i].y - this._pieSpeed;
                if (currentScene.children[i].y < config.Screen.CENTER_Y - 600) {
                    currentScene.removeChild(currentScene.children[i]);
                    this._health -= 50;
                    this._healthBar.scaleY = this._health / 350;
                }
            }
            for (var j = 0; j < currentScene.children.length; j++) {
                if (currentScene.children[j].name == "bird")
                    this._bird.update();
                if (currentScene.children[j].y < config.Screen.CENTER_Y - 600) {
                    currentScene.removeChild(currentScene.children[j]);
                }
            }
        };
        return MainGame;
    }(objects.Scene));
    scenes.MainGame = MainGame;
})(scenes || (scenes = {}));
//# sourceMappingURL=mainGame.js.map