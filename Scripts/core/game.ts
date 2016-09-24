/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var isBorMoney: boolean;
var isTriedAirTravel: boolean;

var currentScene : objects.Scene;
var scene: number;

// Game scenes
var menuScene : scenes.Menu;

var node1 : scenes.Node1;
var node2c1 : scenes.Node2C1;
var node2c2 : scenes.Node2C2;

var node3c1 : scenes.Node3C1;
var node3c2 : scenes.Node3C2;
var node3c3 : scenes.Node3C3;
var node3c3Blk : scenes.Node3C3Blk;
var node3c4 : scenes.Node3C4;

var node4c1 : scenes.Node4C1;
var node4c2 : scenes.Node4C2;
var node4c3 : scenes.Node4C3;
var node4c4 : scenes.Node4C4;
var node4c5 : scenes.Node4C5;
var node4c6 : scenes.Node4C6;
var node4c7 : scenes.Node4C7;
var node4c8 : scenes.Node4C8;

var gameOverScene : scenes.GameOver;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "StartBTN", src:"../../Assets/images/buttons/startBTN.png"}, 
    {id: "Back", src:"../../Assets/images/Back.png"},
    {id: "GameOver", src:"../../Assets/images/GameOver.png"}, 
    {id: "BG", src:"../../Assets/images/BG.jpg"},
    
    {id: "Node1BG", src:"../../Assets/images//backgrounds/node1BG.jpg"},
    {id: "Node2C1BTN", src:"../../Assets/images/buttons/node2C1BTN.png"},
    {id: "Node2C2BTN", src:"../../Assets/images/buttons/node2C2BTN.png"},
    
    {id: "OtherBTN", src:"../../Assets/images/buttons/OtherBTN.png"}
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);

    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    
    // Reference to canvas element
    canvas = document.getElementById("canvas");

    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);

    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);

    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
            
        case config.Scene.NODE1 :
            stage.removeAllChildren();
            currentScene = new scenes.Node1();
            console.log("Starting Node 1 scene");
            break;
        case config.Scene.NODE2C1 :
            stage.removeAllChildren();
            currentScene = new scenes.Node2C1();
            console.log("Starting Node 2 Choice 1 scene");
            break;
        case config.Scene.NODE2C2 :
            stage.removeAllChildren();
            currentScene = new scenes.Node2C2();
            console.log("Starting Node 2 Choice 2 scene");
            break;
            
        case config.Scene.NODE3C1 :
            stage.removeAllChildren();
            currentScene = new scenes.Node3C1();
            console.log("Starting Node 3 Choice 1 scene");
            break;
        case config.Scene.NODE3C2 :
            stage.removeAllChildren();
            currentScene = new scenes.Node3C2();
            console.log("Starting Node 3 Choice 2 scene");
            break;
        case config.Scene.NODE3C3 :
            stage.removeAllChildren();
            currentScene = new scenes.Node3C3();
            console.log("Starting Node 3 Choice 3 scene");
            break;
        case config.Scene.NODE3C3BLK :
            stage.removeAllChildren();
            currentScene = new scenes.Node3C3Blk();
            console.log("Starting Node 3 Choice 3 Block Path scene");
            break;
        case config.Scene.NODE3C4 :
            stage.removeAllChildren();
            currentScene = new scenes.Node3C4();
            console.log("Starting Node 3 Choice 4 scene");
            break;
            
        case config.Scene.NODE4C1 :
            stage.removeAllChildren();
            currentScene = new scenes.Node4C1();
            console.log("Starting Node 4 Choice 1 scene");
            break;
        case config.Scene.NODE4C2 :
            stage.removeAllChildren();
            currentScene = new scenes.Node4C2();
            console.log("Starting Node 4 Choice 2 scene");
            break;
        case config.Scene.NODE4C3 :
            stage.removeAllChildren();
            currentScene = new scenes.Node4C3();
            console.log("Starting Node 4 Choice 3 scene");
            break; 
        case config.Scene.NODE4C4 :
            stage.removeAllChildren();
            currentScene = new scenes.Node4C4();
            console.log("Starting Node 4 Choice 4 scene");
            break;
        case config.Scene.NODE4C5 :
            stage.removeAllChildren();
            currentScene = new scenes.Node4C5();
            console.log("Starting Node 4 Choice 5 scene");
            break;
        case config.Scene.NODE4C6 :
            stage.removeAllChildren();
            currentScene = new scenes.Node4C6();
            console.log("Starting Node 4 Choice 6 scene");
            break;
        case config.Scene.NODE4C7 :
            stage.removeAllChildren();
            currentScene = new scenes.Node4C7();
            console.log("Starting Node 4 Choice 7 scene");
            break; 
        case config.Scene.NODE4C8 :
            stage.removeAllChildren();
            currentScene = new scenes.Node4C8();
            console.log("Starting Node 4 Choice 8 scene");
            break;
            
        case config.Scene.GAMEOVER :
            stage.removeAllChildren();
            currentScene = new scenes.GameOver();
            console.log("Starting GAME OVER scene");
            break;
    }
    
}