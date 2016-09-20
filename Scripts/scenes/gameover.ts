/*

    This scene is displayed when the game ends.
    
*/

    module scenes {
        export class GameOver extends objects.Scene{
            
            private _bg: createjs.Bitmap;
            
            
            //CONSTRUCTOR
            constructor(){
                super();
            }
            
            //Run when scene is started
            public start() : void{
                this._bg = new createjs.Bitmap(assets.getResult("BG"));
                this.addChild(this._bg);
                
                stage.addChild(this);
            }
            
            //Run every tick
            public update() : void{
                
            }
            
        }
        
        
    }