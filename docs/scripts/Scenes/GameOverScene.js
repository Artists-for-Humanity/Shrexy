import * as __SNOWPACK_ENV__ from '../../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import Phaser from '../../snowpack/pkg/phaser.js';
import WebFont from '../../snowpack/pkg/webfontloader.js';
import {
  colors
} from '../constants.js';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameOverScene'
    });
    this.gameOverText;
    this.replay;
    this.menu;

  }

  preload() {
    this.load.image('GameOver', new URL('../../assets/gameover.png',
      import.meta.url).href);
    this.load.image('btn', new URL('../../assets/return-button.png',
      import.meta.url).href);
  }

  create() {
    this.add.image(this.game.config.width / 2, this.game.config.height * .5, 'GameOver');

    this.menu = this.add.image(this.game.config.width - 750, this.game.config.height - 145, 'btn').setInteractive().setScale(1, 1.3);
    this.replay = this.add.image(this.game.config.width - 402, this.game.config.height - 145, 'btn').setInteractive().setScale(1, 1.3);

    this.menu.on('pointerdown', () => {
      this.scene.start('MenuScene');
    });

    this.replay.on('pointerdown', () => {
      this.scene.start('GameScene');
    });

    this.add.text(this.game.config.width - 845, this.game.config.height - 205, 'Menu', {
      fontFamily: 'Luminari',
      fontSize: '50px',
      fill: colors.white,
      align: 'center',
      fontStyle: 'normal',
      stroke: '#000000',
      strokeThickness: 8,
      shadow: {
        blur: 42
      }
    }).setPadding(16);
    this.add.text(this.game.config.width - 505, this.game.config.height - 205, 'Replay', {
      fontFamily: 'Luminari',
      fontSize: '50px',
      fill: colors.white,
      align: 'center',
      fontStyle: 'italic',
      stroke: '#000000',
      strokeThickness: 8,
      shadow: {
        blur: 42
      }
    }).setPadding(16);

  }
}