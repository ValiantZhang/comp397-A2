/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Node4C1 extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label;
        private _node2C1BTN : objects.Button;
        private _bg: createjs.Bitmap;
        private _son1Img : createjs.Bitmap;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Node 4 choice 1 Loaded");
            
            this._bg = new createjs.Bitmap(assets.getResult("Node4C1BG"));
            this.addChild(this._bg);

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("While filling out the form with his personal information, your first son reminisce about his wife and decides to return to his love. All that wasted effort just for him to return. Maybe after this litle escapade, your first son will finally father some grandchildren for you.",
                "25px Consolar", "#000000", config.Screen.CENTER_X * 2.7, config.Screen.CENTER_Y * 1.2);
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
        }

        public update() : void {
            // Update objects
            this._son1Img.x = this._son1Img.x + 3;
            if (this._son1Img.x > 1024) {
                this._son1Img.x = -250; 
            }
        }

        private _onNode2C1BTN(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
        
        
    }
}