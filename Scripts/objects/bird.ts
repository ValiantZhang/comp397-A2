module objects {
    export class Bird extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string, x:number, y:number, speed: number) {
            super(imageString, "fly");

            this.name = "bird";
            this.position = new objects.Vector2(x, y);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = speed;

        }

        public update() : void {
            super.update();
            this.position.y -= this._speed;
        }
    }
}