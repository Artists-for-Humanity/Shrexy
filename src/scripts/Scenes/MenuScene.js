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

    this.home;
    this.graphics;
    this.bounds1;
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
    this.play = this.add.image(this.game.config.width / 3.5, this.game.config.height * .45, 'lilypad').setScale(0.8, 0.8);

    this.home = this.add.image(this.game.config.width * .68, this.game.config.height * .49, 'rock').setInteractive().setScale(1.2, 1.2);

    // this.home.setSize(25, 25);
    // this.home.setPadding(16);

    console.log(this.home);

    this.graphics = this.add.graphics();



    this.bounds1 = this.home.getBounds();

    this.graphics.lineStyle(1, 0xff0000);
    // this.graphics.strokeRectShape(this.bounds1);

    this.home.on('pointerdown', () => {
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
        families: ['Slackey', 'Luminari'],
      },
      active: () => {
        this.add.text(this.game.config.width - 930, this.game.config.height - 535, 'Play', {
          fontFamily: 'Luminari',
          fontSize: '100px',
          fill: colors.white,
          align: 'center',
          fontStyle: 'normal',
          stroke: '#000000',
          strokeThickness: 8,
          shadow: {
            blur: 42
          }
        }).setPadding(16);

        this.add.text(this.game.config.width - 775, this.game.config.height - 875, 'Shrexy', {
          fontFamily: 'Luminari',
          fontSize: '120px',
          fill: colors.shrexyGreen,
          align: 'center',
          fontStyle: 'italic',
          stroke: '#000000',
          strokeThickness: 8,
          shadow: {
            blur: 42
          }
        }).setPadding(16);
        this.add.text(this.game.config.width - 875, this.game.config.height - 730, 'Escape Lord Farquaad!', {
          fontFamily: 'Luminari',
          fontSize: '55px',
          fill: colors.escapeGold,
          align: 'center',
          fontStyle: 'italic',
          stroke: '#000000',
          strokeThickness: 8,
          shadow: {
            blur: 42
          }
        }).setPadding(16);
        this.add.text(this.game.config.width - 500, this.game.config.height - 535, 'Home', {
          fontFamily: 'Luminari',
          fontSize: '100px',
          fill: colors.white,
          align: 'center',
          fontStyle: 'normal',
          stroke: '#000000',
          strokeThickness: 8,
          shadow: {
            blur: 42
          }
        }).setPadding(16);
      },
    });

    this.play.setInteractive();
    this.play.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }

  // update() {

  //   // this.home.rotation += 0.013;


  //   this.graphics.clear();

  //   this.graphics.lineStyle(1, 0xff0000);
  //   this.graphics.strokeRectShape(this.bounds1);

  // }
}