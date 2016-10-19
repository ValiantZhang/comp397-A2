/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playButton : objects.Button;
        private _tutButton : objects.Button;
        private _menuLabel : objects.Label;
        private _highScoreLabel : objects.Label;
        private _bg: createjs.Bitmap;
        private _musicButton : objects.Button;
        private _isMusicPlaying : boolean;

        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            
            this._bg = new createjs.Bitmap(assets.getResult("menuBG"));
            this.addChild(this._bg);
            
            this._menuLabel = new objects.Label("Pie Baron", "70px Impact", "#00008B", config.Screen.CENTER_X, config.Screen.CENTER_Y - 150);
            this.addChild(this._menuLabel);
            
            if (highScore == null){
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
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _playButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.MAINGAME;
            changeScene();
        }
        
        private _tutButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.TUTORIAL;
            changeScene();
        }
        
        private _musicButtonClick(event : createjs.MouseEvent) {
            if (this._isMusicPlaying){
                createjs.Sound.stop();
                this._isMusicPlaying = false;
            }
            else{
                createjs.Sound.play("themeSound",{loop: 99});
                this._isMusicPlaying = true;
            }
        }
        
    }
}