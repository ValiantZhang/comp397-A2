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
    var Node4C1 = (function (_super) {
        __extends(Node4C1, _super);
        function Node4C1() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node4C1.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 4 choice 1 Loaded");
            this._bg = new createjs.Bitmap(assets.getResult("Node4C1BG"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("While filling out the form with his personal information, your first son reminisce about his wife and decides to return to his love. All that wasted effort just for him to return. Maybe after this litle escapade, your first son will finally father some grandchildren for you.", "25px Consolar", "#000000", config.Screen.CENTER_X * 2.7, config.Screen.CENTER_Y * 1.2);
            this._gameLabel.lineWidth = 900;
            this._gameLabel.lineHeight = 30;
            this.addChild(this._gameLabel);
            this._son1Img = new createjs.Bitmap(assets.getResult("Son1IMG"));
            this._son1Img.x = config.Screen.CENTER_X;
            this._son1Img.y = config.Screen.CENTER_Y - 390;
            this.addChild(this._son1Img);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("ReplayBTN", config.Screen.CENTER_X - 25, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Node4C1.prototype.update = function () {
            // Update objects
            this._son1Img.x = this._son1Img.x + 3;
            if (this._son1Img.x > 1024) {
                this._son1Img.x = -250;
            }
        };
        Node4C1.prototype._onNode2C1BTN = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node4C1;
    }(objects.Scene));
    scenes.Node4C1 = Node4C1;
})(scenes || (scenes = {}));
//# sourceMappingURL=node4c1.js.map