import Phaser from 'phaser';
import WebFont from 'webfontloader';
import {
  colors
} from '../constants';

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
    this.load.image('lilypad', new URL('../../assets/lilypad.png',
      import.meta.url).href);
    this.load.image('rock', new URL('../../assets/rock.png',
      import.meta.url).href);
  }

  create() {
    this.add.image(this.game.config.width / 2, this.game.config.height * .425, 'background-3').setScale(1.1, 1.1);
    this.play = this.add.image(this.game.config.width / 3.5, this.game.config.height * .45, 'lilypad').setScale(0.9, 0.9);

    var button = this.add.image(this.game.config.width * .68, this.game.config.height * .49, 'rock').setInteractive().setScale(1.3, 1.3);
    button.on('pointerdown', () => {
      var url = 'index.html';
      var s = window.open(url, '_blank');
      if (s && s.focus) {
        s.focus();
      } else if (!s) {
        window.location.href = url;
      }
    });

    WebFont.load({
      custom: {
        families: ['Slackey'],
      },
      active: () => {
        this.add.text(this.game.config.width * .285, this.game.config.height * .63, 'Play', {
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
        this.add.text(this.game.config.width / 2, this.game.config.height * .287, 'Shrexy', {
            fontFamily: 'Luminari Regular',
            fontSize: '120px',
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
        this.add.text(this.game.config.width * .5, this.game.config.height * .29, 'Escape Lord Farquaad!', {
            fontFamily: 'Luminari Regular',
            fontSize: '55px',
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
        this.add.text(this.game.config.width * .7, this.game.config.height * .63, 'Back to \nShrexy Page', {
            fontFamily: 'Luminari Regular',
            fontSize: '50px',
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

    this.input.keyboard.on('keydown-UP', () => {
      this.scene.start('GameScene');
    });

    this.play.setInteractive();
    this.play.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}