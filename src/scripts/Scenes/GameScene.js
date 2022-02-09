import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class GameScene extends Phaser.Scene {
  player;

  constructor() {
    super({
      key: 'GameScene',
    });
  }
  //input our Shrek.png to our player or character

  preload() {
    this.load.image('spraycan', new URL('../../assets/spraycan.png', import.meta.url).href);
  }

  create() {
    this.player = new Player(this, this.game.config.width / 2, this.game.config.height / 2);
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
