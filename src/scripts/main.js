import Phaser from 'phaser';
import MenuScene from './Scenes/MenuScene';
import GameScene from './Scenes/GameScene';
import { dimensions } from './constants';

// Set configuration for phaser game instance
const config = {
  type: Phaser.AUTO,
  width: dimensions.width,
  height: dimensions.height,

  // Add physics, arcade, scene, and audio
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: [MenuScene],
  audio: {
    disableWebAudio: true,
  },
};

// Initialize game instance
new Phaser.Game(config);
