import Phaser from '../snowpack/pkg/phaser.js';
import MenuScene from './Scenes/MenuScene.js';
import GameScene from './Scenes/GameScene.js';
import { dimensions } from './constants.js';
import GameOverScene from './Scenes/GameOverScene.js';

// Set configuration for phaser game instance
const config = {
  type: Phaser.AUTO,
  width: dimensions.width,
  height: dimensions.height,

  // Add physics, arcade, scene, and audio
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [MenuScene, GameScene, GameOverScene],
  audio: {
    disableWebAudio: true,
  },
};

// Initialize game instance
new Phaser.Game(config);
