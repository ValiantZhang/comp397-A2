/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Tutorial extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label;
        private _backBTN : objects.Button;
        private _bg: createjs.Bitmap;
        private _circle : createjs.Shape;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Tutorial Loaded");
            
            this._bg = new createjs.Bitmap(assets.getResult("Node2C1BG"));
            this.addChild(this._bg);

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Tutorial",
                "25px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
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
        }

        public update() : void {
            // Update objects
        }
        
        private _onBackBTN(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
        
        private _onMoneyBTN(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            alert("You Borrowed Money!");
            //isBorMoney = true;
        }
        
        private addShape(){
        this._circle = new createjs.Shape;
        this._circle.graphics.beginFill(" #e9ff33  ").drawCircle(0, 0, 100);
        this._circle.x = config.Screen.CENTER_X;
        this._circle.y = config.Screen.CENTER_Y;
        stage.addChild(this._circle);
        this._circle.on("mouseover", this.changeTrans, this);
    }
    
    private changeTrans(){
        this._circle.alpha = 0.5;
    }
    }
}