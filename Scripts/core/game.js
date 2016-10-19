/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
var spriteSheetLoader;
var bird;
// Game scenes
var menuScene;
var mainGame;
var tutorial;
var highScore;
var score;
// Preload Assets required
var assetData = [
    { id: "PlayBTN", src: "../../Assets/images/buttons/PlayBTN.png" },
    { id: "TutBTN", src: "../../Assets/images/buttons/TutBTN.png" },
    { id: "BackBTN", src: "../../Assets/images/buttons/BackBTN.png" },
    { id: "Pie", src: "../../Assets/images/sprites/smallPie.png" },
    { id: "menuBG", src: "../../Assets/images/backgrounds/menuBG.png" },
    { id: "BG", src: "../../Assets/images/backgrounds/BG.png" },
    { id: "tutBG", src: "../../Assets/images/backgrounds/TutBG.png" },
    { id: "birdSprite", src: "../../Assets/images/sprites/BirdSprite.png" },
    { id: "themeSound", src: "../../Assets/music/oCanada.mp3" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue();
    //assets.installPlugin(createjs.Sound);
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
    var birdData = {
        "images": [
            assets.getResult("birdSprite")
        ],
        "frames": { width: 210, height: 210, count: 4, regX: 105, regY: 210, spacing: 0, margin: 0 },
        "animations": {
            "fly": {
                "frames": [1, 2, 3, 4, 5, 4, 3, 2, 1], "speed": 0.1, next: false
            }
        }
    };
    bird = new createjs.SpriteSheet(birdData);
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
        case config.Scene.MAINGAME:
            stage.removeAllChildren();
            currentScene = new scenes.MainGame();
            console.log("Starting Main Game scene");
            break;
        case config.Scene.TUTORIAL:
            stage.removeAllChildren();
            currentScene = new scenes.Tutorial();
            console.log("Starting Tutorial scene");
            break;
    }
}
//# sourceMappingURL=game.js.map