module objects {
    export class Pie extends createjs.Bitmap {
        width: number;
        height : number;

        constructor(pathString: string, x:number, y:number) {
            super(assets.getResult(pathString));
            // Set the position of the button
            this.x = x;
            this.y = y;

            // Set the size of the button
            this.width = 320;
            this.height = 200;

            // Set the registration point of the button. This is used for transformations
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            // Register mouseover and mouseout event listeners. 
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            this.on("mousedown", this.destroy, this);
            
        }

        // Modify the bitmaps alpha value when hovering over the button
        overButton(event: createjs.MouseEvent) : void {
            event.currentTarget.alpha = 0.7;
        }
        
        // Modify the bitmaps alphave when mouse is not hovering
        outButton(event:createjs.MouseEvent) : void {
            event.currentTarget.alpha = 1.0;
        }
        
        destroy(event:createjs.MouseEvent) : void{
            currentScene.removeChild(this);
            score += 1;
            currentScene.update();
        }
    }
}