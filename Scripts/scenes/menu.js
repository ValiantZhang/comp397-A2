/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._bg = new createjs.Bitmap(assets.getResult("menuBG"));
            this.addChild(this._bg);
            this._menuLabel = new objects.Label("Pie Baron", "70px Impact", "#00008B", config.Screen.CENTER_X, config.Screen.CENTER_Y - 150);
            this.addChild(this._menuLabel);
            if (highScore == null) {
                highScore = 0;
            }
            this._highScoreLabel = new objects.Label("Most Pies: " + highScore, "40px Impact", "#000000", config.Screen.CENTER_X + 360, config.Screen.CENTER_Y - 350);
            this.addChild(this._highScoreLabel);
            // Add button to scene. Register for click callback function
            this._playButton = new objects.Button("PlayBTN", config.Screen.CENTER_X - 190, config.Screen.CENTER_Y - 100);
            this.addChild(this._playButton);
            this._playButton.on("click", this._playButtonClick, this);
            this._tutButton = new objects.Button("TutBTN", config.Screen.CENTER_X - 190, config.Screen.CENTER_Y + 25);
            this.addChild(this._tutButton);
            this._tutButton.on("click", this._tutButtonClick, this);
            this._musicButton = new objects.Button("MusicBTN", config.Screen.CENTER_X + 450, config.Screen.CENTER_Y - 350);
            this.addChild(this._musicButton);
            this._musicButton.on("click", this._musicButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        Menu.prototype._playButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.MAINGAME;
            changeScene();
        };
        Menu.prototype._tutButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.TUTORIAL;
            changeScene();
        };
        Menu.prototype._musicButtonClick = function (event) {
            if (this._isMusicPlaying) {
                createjs.Sound.stop();
                this._isMusicPlaying = false;
            }
            else {
                createjs.Sound.play("themeSound", { loop: 99 });
                this._isMusicPlaying = true;
            }
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map