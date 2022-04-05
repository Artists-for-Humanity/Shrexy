import Phaser from 'phaser';
import WebFont from 'webfontloader';
import { colors } from '../constants';

export default class MenuScene extends Phaser.Scene {
  constructor() {
super({ key: 'MenuScene' });
  }

  preload() {   
  this.load.image('background-3',new URL('../../assets/menu.png', import.meta.url).href);
  this.load.image('logo',new URL('../../assets/shrexy_logo.png', import.meta.url).href);

}

  create() {
    this.add.image(this.game.config.width / 2, this.game.config.height * .45,  'background-3').setScale(1.1, 1.1);
    this.add.image(this.game.config.width / 2, this.game.config.height * .4, 'logo').setScale(.4, .4);

    WebFont.load({
      custom: {
        families: ['Slackey'],
      },
      active: () => {
        this.add
          .text(this.game.config.width / 2, this.game.config.height * .7, 'Press Up arrow to Play', {
            fontFamily: 'Slackey',
            fontSize: '35px',
            fill: colors.white,
            align: 'center',
          })
          .setOrigin(0.5, 1.7);
      },
    });

    this.input.keyboard.on('keydown-UP', () => {
      this.scene.start('GameScene');
    });
  }
}
