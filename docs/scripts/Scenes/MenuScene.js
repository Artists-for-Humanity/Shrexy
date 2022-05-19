import * as __SNOWPACK_ENV__ from '../../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import Phaser from '../../snowpack/pkg/phaser.js';
import WebFont from '../../snowpack/pkg/webfontloader.js';
import {
  colors
} from '../constants.js';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'MenuScene'
    });
  }

  preload() {
    this.load.image('background-3', new URL('../../assets/menu.png',
      import.meta.url).href);
    this.load.image('logo', new URL('../../assets/shrexy_logo.png',
      import.meta.url).href);

  }

  create() {
    this.add.image(this.game.config.width / 2, this.game.config.height * .425, 'background-3').setScale(1.1, 1.1);
    // this.add.image(this.game.config.width / 2, this.game.config.height * .4, 'logo').setScale(.4, .4);

    WebFont.load({
      custom: {
        families: ['Slackey'],
      },
      active: () => {
        this.add.text(this.game.config.width * .5, this.game.config.height * .8, 'Press Up arrow to Play', {
            fontFamily: 'Luminari Regular',
            fontSize: '60px',
            fill: colors.white,
            align: 'center',
            fontStyle: 'normal',
            stroke: '#000000',
            strokeThickness: 8,
            shadow: {
              blur: 42
            }
          })
          .setOrigin(0.5, 1.7);
        this.add.text(this.game.config.width / 2, this.game.config.height * .9, 'Shrexy', {
            fontFamily: 'Luminari Regular',
            fontSize: '350px',
            fill: colors.shrexyGreen,
            align: 'center',
            fontStyle: 'italic',
            stroke: '#000000',
            strokeThickness: 8,
            shadow: {
              blur: 42
            }
          })
          .setOrigin(0.5, 1.7);
        this.add.text(this.game.config.width * .47, this.game.config.height * .7, 'Escape Lord Farquaad!', {
            fontFamily: 'Luminari Regular',
            fontSize: '70px',
            fill: colors.escapeGold,
            align: 'center',
            fontStyle: 'italic',
            stroke: '#000000',
            strokeThickness: 8,
            shadow: {
              blur: 42
            }
          })
          .setOrigin(0.5, 1.7);

      },
    });

    this.input.keyboard.on('keydown-UP', () => {
      this.scene.start('GameScene');
    });
  }
}