/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _menuButton : objects.Button;
        private _menuLabel : objects.Label;
        private _bg: createjs.Bitmap;

        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            createjs.Sound.play("themeSound",{loop: 99});
            
            isTriedAirTravel = false;
            isBorMoney = false;
            
            this._bg = new createjs.Bitmap(assets.getResult("menuBG"));
            this.addChild(this._bg);
            
            this._menuLabel = new objects.Label("Journey to Canada", "50px Arial", "#00008B", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100);
            this.addChild(this._menuLabel);

            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("StartBTN", config.Screen.CENTER_X - 25, config.Screen.CENTER_Y + 100);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.NODE1;
            changeScene();
        }
        
    }
}