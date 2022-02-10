import Phaser from 'phaser';
import MenuScene from './Scenes/MenuScene';
import GameScene from './Scenes/GameScene';

// Set configuration for phaser game instance
const config = {
  type: Phaser.AUTO,
  width: 960*1.2,
  height: 720*1.2,

  // Add physics, arcade, scene, and audio
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 1000,
      },
      debug: true,
    },
  },
  scene: [MenuScene, GameScene],
  audio: {
    disableWebAudio: true,
  },
};

// Initialize game instance
new Phaser.Game(config);
