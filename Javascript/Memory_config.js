import { PlayScene } from "./memory_scene.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: '#game',
    scene: [PlayScene]
}

var game = new Phaser.Game(arguments);