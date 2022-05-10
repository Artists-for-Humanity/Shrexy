import Phaser from 'phaser';
import WebFont from 'webfontloader';


export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameOverScene'
    });
  }

  preload() {
    this.load.image('GameOver', new URL('../../assets/gameover.png',
      import.meta.url).href);

  }

  create() {
    this.add.image(this.game.config.width / 2, this.game.config.height * .5, 'GameOver');

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('MenuScene');
    });
  }
}