import Phaser from 'phaser';
import WebFont from 'webfontloader';
import {
  colors
} from '../constants';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameOverScene'
    });
    this.gameOverText;
  }

  preload() {
    this.load.image('GameOver', new URL('../../assets/gameover.png',
      import.meta.url).href);
  }

  create() {
    this.add.image(this.game.config.width / 2, this.game.config.height * .5, 'GameOver');
    this.mainMenu = this.gameOverText = this.add.text(this.game.config.width / 4, this.game.config.height * .8, 'Return To Menu', {
      fontFamily: 'Luminari Regular',
      fontSize: '90px',
      fill: colors.white,
      align: 'center',
      fontStyle: 'normal',
      stroke: '#000000',
      strokeThickness: 8,
      shadow: {
        blur: 42
      }
    });
    this.mainMenu.setInteractive();
    this.mainMenu.on('pointerdown', () => {
      this.scene.start('MenuScene');
    });
  }
}