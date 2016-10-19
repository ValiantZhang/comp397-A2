/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class MainGame extends objects.Scene {

        // PRIVATE VARIABLES
        private _node2C1BTN : objects.Button;
        private _node2C2BTN : objects.Button;
        private _pie : objects.Pie;
        private _bird : objects.Bird;
        private _bg: createjs.Bitmap;
        private _healthBar : createjs.Shape;
        private _scoreLabel : objects.Label;
        
        private _randomNum : number;
        private _spawnTime : number;
        private _spawnDelay : number;
        private _currentTick : number;
        private _health : number;
        private _score : number;
        
        private _pieSpeed : number;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
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
            
            this._scoreLabel = new objects.Label("Pies Re-Claimed: ",
                "30px Tahoma", "#000000", config.Screen.CENTER_X + 360, config.Screen.CENTER_Y - 350);
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
        }

        public update() : void {
            // Update objects
            
            this._spawnPie();
            this._moveObjects();
            this._updateScore();
            this._increaseDifficulty();
            this._checkHealth();
        }

        private _onNode2C1BTN(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
        
        private _addHealthBar() : void{
            this._healthBar = new createjs.Shape;
            this._healthBar.graphics.beginFill(" #ff0000  ").drawRect(30,0,70,this._health);
            this._healthBar.x = config.Screen.CENTER_X + 435;
            this._healthBar.y = config.Screen.CENTER_Y + 100;
            this._healthBar.rotation += 180;
            this.addChild(this._healthBar);
        }
        
        private _updateScore(){
            this._score = score;
            this._scoreLabel.text = "Pies Re-Claimed: " + this._score;
            
            if (score > highScore){
                highScore = score;
            }
        }
        
        private _spawnPie() : void {
            if (createjs.Ticker.getTime() >= this._spawnTime){
                this._pie = new objects.Pie("Pie", config.Screen.CENTER_X - this._getRandomNum(), config.Screen.CENTER_Y + 450);
                this._pie.name = "pie";
                this.addChild(this._pie);
                
                this._bird = new objects.Bird("bird", this._pie.x + 100, this._pie.y + 100, this._pieSpeed);
                this.addChild(this._bird);
                
                this._currentTick = createjs.Ticker.getTime();
                this._spawnTime = this._currentTick + this._spawnDelay;
            }
        }
        
        private _getRandomNum() {
            return Math.floor(Math.random() * ((200 + 200 - 200) + 200));
        }
        
        private _increaseDifficulty(){
            if (createjs.Ticker.getTime() > 20000 && createjs.Ticker.getTime() < 21000){
                this._pieSpeed = 10;
            }
        }
        
        private _checkHealth(){
            if (this._health <= 0){
                alert("Birds Win, Game Over");
                scene = config.Scene.MENU;
                changeScene();
            }
        }
        
        private _moveObjects(){
            for(var i = 0; i < currentScene.children.length; i++){
                if(currentScene.children[i].name == "pie")
                    currentScene.children[i].y = currentScene.children[i].y - this._pieSpeed;
                    
                    if (currentScene.children[i].y < config.Screen.CENTER_Y - 600) {
                    currentScene.removeChild(currentScene.children[i]);
                    this._health -= 50;
                    this._healthBar.scaleY = this._health/350;
                }
            }
            
            for(var j = 0; j < currentScene.children.length; j++){
                if(currentScene.children[j].name == "bird")
                    this._bird.update();
                    
                    if (currentScene.children[j].y < config.Screen.CENTER_Y - 600) {
                    currentScene.removeChild(currentScene.children[j]);
                }
            }
            
        }
    }
}