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

    this.tintedTitle = this.add.text(this.game.config.width / 4.4, 75, 'LEADERBOARD', {
      fontFamily: 'OCR A Std',
      fontSize: '76px',
      fontStyle: 'bold',
      fill: colors.white,
      align: 'center',
     });

     
    WebFont.load({
      custom: {
        families: ['Slackey'],
      },
      active: () => {
        this.add.text(this.game.config.width * .5, this.game.config.height * .9, 'Press Space', {
            fontFamily: 'Luminari Regular',
            fontSize: '100px',
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

        },
      });
      
      this.add.image(this.game.config.width / 2, this.game.config.height * .5, 'GameOver');

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('MenuScene');
    });
  }
}