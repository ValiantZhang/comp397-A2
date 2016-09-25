/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static NODE1 : number = 1;
        public static NODE2C1 : number = 2;
        public static NODE2C2 : number = 3;
        
        public static NODE3C1 : number = 4;
        public static NODE3C2 : number = 5;
        public static NODE3C3 : number = 6;
        public static NODE3C3BLK : number = 7;
        public static NODE3C4 : number = 8;
        
        public static NODE4C1 : number = 9;
        public static NODE4C2 : number = 10;
        public static NODE4C3 : number = 11;
        public static NODE4C4 : number = 12;
        public static NODE4C5 : number = 13;
        public static NODE4C6 : number = 14;
        public static NODE4C7 : number = 15;
        public static NODE4C8 : number = 16;
        
    }

    export class Screen {
        public static WIDTH : number = 1024;
        public static HEIGHT : number = 768;
        public static CENTER_X : number = 512;
        public static CENTER_Y : number = 384;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}