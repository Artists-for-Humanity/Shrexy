import Phaser from 'phaser';
import Customer from '../Sprites/Customer';
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
    this.load.image('person1', new URL('../../assets/person1.png', import.meta.url).href);
    this.load.image('person2', new URL('../../assets/person2.png', import.meta.url).href);
    this.load.image('person3', new URL('../../assets/person3.png', import.meta.url).href);
    this.load.image('person4', new URL('../../assets/person4.png', import.meta.url).href);
  }

  create() {
    this.player = new Player(this, this.game.config.width / 2, this.game.config.height / 2);
    this.line = new Line(this, this.game.config.width / 2, this.game.config.height / 2);
    this.person1 = new Customer(this, 200, 100, 'person1');
    this.person2 = new Customer(this, 600, 100, 'person2');
    this.person3 = new Customer(this, 200, 600, 'person3');
    this.person4 = new Customer(this, 600, 600, 'person4');
    // if(difficulty = 'easy') {
    //   easyCustomrs = ['c1', 'c2']
    // }
    // else if (difficulty = 'medium')
    //this.customers = [new Customer, new Customer]
  }

  update() {
    this.line.update();
    this.person1.update();
    this.person2.update();
    this.person3.update();
    this.person4.update();
  }
}
