import Phaser from 'phaser';
import WebFont from 'webfontloader';
import { colors } from '../constants';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {}

  create() {
    // this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'menu-scene-text');

    WebFont.load({
      custom: {
        families: ['Slackey'],
      },
      active: () => {
        this.add
          .text(this.game.config.width / 2, this.game.config.height * (2 / 3), 'Shrexy', {
            fontFamily: 'Slackey',
            fontSize: '100px',
            fill: colors.white,
            align: 'center',
          })
          .setOrigin(0.5, 1.7);
      },
    });

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('GameScene');
    });
  }
}
