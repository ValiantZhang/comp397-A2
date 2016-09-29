/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var isBorMoney;
var isTriedAirTravel;
var currentScene;
var scene;
// Game scenes
var menuScene;
var node1;
var node2c1;
var node2c2;
var node3c1;
var node3c2;
var node3c3;
var node3c3Blk;
var node3c4;
var node4c1;
var node4c2;
var node4c3;
var node4c4;
var node4c5;
var node4c6;
var node4c7;
var node4c8;
// Preload Assets required
var assetData = [
    { id: "StartBTN", src: "../../Assets/images/buttons/startBTN.png" },
    { id: "menuBG", src: "../../Assets/images/backgrounds/menuBG.jpg" },
    { id: "Node1BG", src: "../../Assets/images//backgrounds/node1BG.jpg" },
    { id: "Node2C1BG", src: "../../Assets/images//backgrounds/node2c1BG.jpg" },
    { id: "Node2C2BG", src: "../../Assets/images//backgrounds/node2c2BG.jpg" },
    { id: "Node3C1BG", src: "../../Assets/images//backgrounds/node3c1BG.jpg" },
    { id: "Node3C2BG", src: "../../Assets/images//backgrounds/node3c2BG.jpg" },
    { id: "Node3C3BG", src: "../../Assets/images//backgrounds/node3c3BG.jpg" },
    { id: "Node3C3BlkBG", src: "../../Assets/images//backgrounds/node3c3BlkBG.jpg" },
    { id: "Node3C4BG", src: "../../Assets/images//backgrounds/node3c4BG.jpg" },
    { id: "Node4C1BG", src: "../../Assets/images//backgrounds/node4c1BG.jpg" },
    { id: "Node4C2BG", src: "../../Assets/images//backgrounds/node4c2BG.jpg" },
    { id: "Node4C3BG", src: "../../Assets/images//backgrounds/node4c3BG.jpg" },
    { id: "Node4C4BG", src: "../../Assets/images//backgrounds/node4c4BG.jpg" },
    { id: "Node4C5BG", src: "../../Assets/images//backgrounds/node4c5BG.jpg" },
    { id: "Node4C6BG", src: "../../Assets/images//backgrounds/node4c6BG.jpg" },
    { id: "Node4C7BG", src: "../../Assets/images//backgrounds/node4c7BG.jpg" },
    { id: "Node4C8BG", src: "../../Assets/images//backgrounds/node4c8BG.jpg" },
    { id: "Node2C1BTN", src: "../../Assets/images/buttons/node2C1BTN.png" },
    { id: "Node2C2BTN", src: "../../Assets/images/buttons/node2C2BTN.png" },
    { id: "AirBTN", src: "../../Assets/images/buttons/AirBTN.png" },
    { id: "SeaBTN", src: "../../Assets/images/buttons/SeaBTN.png" },
    { id: "BorrowBTN", src: "../../Assets/images/buttons/BorrowBTN.png" },
    { id: "BackBTN", src: "../../Assets/images/buttons/BackBTN.png" },
    { id: "GiveUpBTN", src: "../../Assets/images/buttons/GiveUpBTN.png" },
    { id: "FillBTN", src: "../../Assets/images/buttons/FillBTN.png" },
    { id: "NoFillBTN", src: "../../Assets/images/buttons/NoFillBTN.png" },
    { id: "JumpBTN", src: "../../Assets/images/buttons/JumpBTN.png" },
    { id: "BribeBTN", src: "../../Assets/images/buttons/BribeBTN.png" },
    { id: "HideBTN", src: "../../Assets/images/buttons/HideBTN.png" },
    { id: "OtherBTN", src: "../../Assets/images/buttons/OtherBTN.png" },
    { id: "ReplayBTN", src: "../../Assets/images/buttons/ReplayBTN.png" },
    { id: "Son1IMG", src: "../../Assets/images/son1Img.png" },
    { id: "themeSound", src: "../../Assets/music/oCanada.mp3" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
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
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.NODE1:
            stage.removeAllChildren();
            currentScene = new scenes.Node1();
            console.log("Starting Node 1 scene");
            break;
        case config.Scene.NODE2C1:
            stage.removeAllChildren();
            currentScene = new scenes.Node2C1();
            console.log("Starting Node 2 Choice 1 scene");
            break;
        case config.Scene.NODE2C2:
            stage.removeAllChildren();
            currentScene = new scenes.Node2C2();
            console.log("Starting Node 2 Choice 2 scene");
            break;
        case config.Scene.NODE3C1:
            stage.removeAllChildren();
            currentScene = new scenes.Node3C1();
            console.log("Starting Node 3 Choice 1 scene");
            break;
        case config.Scene.NODE3C2:
            stage.removeAllChildren();
            currentScene = new scenes.Node3C2();
            console.log("Starting Node 3 Choice 2 scene");
            break;
        case config.Scene.NODE3C3:
            stage.removeAllChildren();
            currentScene = new scenes.Node3C3();
            console.log("Starting Node 3 Choice 3 scene");
            break;
        case config.Scene.NODE3C3BLK:
            stage.removeAllChildren();
            currentScene = new scenes.Node3C3Blk();
            console.log("Starting Node 3 Choice 3 Block Path scene");
            break;
        case config.Scene.NODE3C4:
            stage.removeAllChildren();
            currentScene = new scenes.Node3C4();
            console.log("Starting Node 3 Choice 4 scene");
            break;
        case config.Scene.NODE4C1:
            stage.removeAllChildren();
            currentScene = new scenes.Node4C1();
            console.log("Starting Node 4 Choice 1 scene");
            break;
        case config.Scene.NODE4C2:
            stage.removeAllChildren();
            currentScene = new scenes.Node4C2();
            console.log("Starting Node 4 Choice 2 scene");
            break;
        case config.Scene.NODE4C3:
            stage.removeAllChildren();
            currentScene = new scenes.Node4C3();
            console.log("Starting Node 4 Choice 3 scene");
            break;
        case config.Scene.NODE4C4:
            stage.removeAllChildren();
            currentScene = new scenes.Node4C4();
            console.log("Starting Node 4 Choice 4 scene");
            break;
        case config.Scene.NODE4C5:
            stage.removeAllChildren();
            currentScene = new scenes.Node4C5();
            console.log("Starting Node 4 Choice 5 scene");
            break;
        case config.Scene.NODE4C6:
            stage.removeAllChildren();
            currentScene = new scenes.Node4C6();
            console.log("Starting Node 4 Choice 6 scene");
            break;
        case config.Scene.NODE4C7:
            stage.removeAllChildren();
            currentScene = new scenes.Node4C7();
            console.log("Starting Node 4 Choice 7 scene");
            break;
        case config.Scene.NODE4C8:
            stage.removeAllChildren();
            currentScene = new scenes.Node4C8();
            console.log("Starting Node 4 Choice 8 scene");
            break;
    }
}
//# sourceMappingURL=game.js.map