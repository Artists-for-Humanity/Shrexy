import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class GameScene extends Phaser.Scene {
  player;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  preload() {
    this.load.image('shrek', new URL('../../assets/newshrek.png', import.meta.url).href);
    this.load.image('shrek-2', new URL('../../assets/shrek-crouch.png', import.meta.url).href);
  }

  create() {
    this.player = new Player(this, this.game.config.width / 4, this.game.config.height / 2);
  }

  update() {
    this.player.update();
  }
  //The stick sprite to approach Shrek at an x-axis base with a starting speed

  //The bird sprite to approach shrek at an y-axis base with a starting speed

  //Shrek loses an hitpoint as Shrek touches either obstacle

  //change the Shrek.png to an blinking-Shrek.png to indicate that Shrek had lost an hitpoint

  //Input Knights.png in the side of the frame
}
