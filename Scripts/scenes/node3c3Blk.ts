/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Node3C3Blk extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label;
        private _node2C1BTN : objects.Button;
        private _node2C2BTN : objects.Button;
        private _bg: createjs.Bitmap;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Node 3 choice 3 Block Path Loaded");
            isTriedAirTravel = true;
            
            this._bg = new createjs.Bitmap(assets.getResult("Node3C3BlkBG"));
            this.addChild(this._bg);

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Your second son cannot afford air travel!",
                "25px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y * 1.2);
            this._gameLabel.lineWidth = 900;
            this._gameLabel.lineHeight = 30;
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C1BTN = new objects.Button("BackBTN", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C1BTN);
            this._node2C1BTN.on("click", this._onNode2C1BTN, this);
            
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._node2C2BTN = new objects.Button("GiveUpBTN", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 250);
            this.addChild(this._node2C2BTN);
            this._node2C2BTN.on("click", this._onNode2C2BTN, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onNode2C1BTN(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NODE2C2;
            changeScene();
        }
        
        private _onNode2C2BTN(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}