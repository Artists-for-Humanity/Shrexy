import Phaser from 'phaser';
import Line from '../Sprites/Line';
import Player from '../Sprites/Player';

export default class GameScene extends Phaser.Scene {
  player;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  preload() {
    this.load.image('player', new URL('../../assets/player.png', import.meta.url).href);
    this.load.image('line', new URL('../../assets/line.png', import.meta.url).href);
    this.load.image('start', new URL('../../assets/burger.png', import.meta.url).href);
  }

  create() {
    this.player = new Player(this, this.game.config.width / 2, this.game.config.height / 2);
    this.line = new Line(this, this.game.config.width / 2, this.game.config.height / 2);
  }

  update() {
    this.line.update();
  }
}
