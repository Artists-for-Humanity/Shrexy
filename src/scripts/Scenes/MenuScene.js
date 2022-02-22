import Phaser from 'phaser';
import WebFont from 'webfontloader';
import { colors } from '../constants';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'background-2' });
  }

  preload() {   
  this.load.image('background-2',new URL('../../assets/background-shrekshouse.png', import.meta.url).href);
}

  create() {
    this.add.image(this.game.config.width / 2, this.game.config.height / 2,  'background-2');

    WebFont.load({
      custom: {
        families: ['Slackey'],
      },
      active: () => {
        this.add
          .text(this.game.config.width / 2, this.game.config.height * (2 / 3), 'Shrexy shrexy', {
            fontFamily: 'Slackey',
            fontSize: '100px',
            fill: colors.white,
            align: 'center',
          })
          .setOrigin(0.5, 1.7);
      },
    });

    this.input.keyboard.on('keydown-UP', () => {
      console.log('reachme 00')
      this.scene.start('GameScene');
      console.log('reachme 01')
    });
  }
}
