/*

    This scene is displayed when the game ends.
    
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        //CONSTRUCTOR
        function GameOver() {
            _super.call(this);
        }
        //Run when scene is started
        GameOver.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            stage.addChild(this);
        };
        //Run every tick
        GameOver.prototype.update = function () {
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map