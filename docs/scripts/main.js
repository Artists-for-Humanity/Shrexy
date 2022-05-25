import Phaser from '../snowpack/pkg/phaser.js';
import MenuScene from './Scenes/MenuScene.js';
import GameScene from './Scenes/GameScene.js';
import {
  dimensions
} from './constants.js';
import GameOverScene from './Scenes/GameOverScene.js';
import GlobalState from './GlobalState.js';

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
  scene: [MenuScene, GameScene, GameOverScene],
  audio: {
    disableWebAudio: true,
  },
  plugins: {
    global: [{
      key: 'GlobalState',
      plugin: GlobalState,
      start: false,
      mapping: 'globalState'

    }],
  },
};

// Initialize game instance
new Phaser.Game(config);