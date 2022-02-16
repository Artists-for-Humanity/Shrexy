import Phaser from 'phaser';
import Customer from '../Sprites/Customer';
import Line from '../Sprites/Line';
import Player from '../Sprites/Player';
import Counter from '../Sprites/Counter';

export default class GameScene extends Phaser.Scene {
  player;

  constructor() {
    super({
      key: 'GameScene',
    });
    this.customers = [];
  }

  preload() {
    this.load.image('player', new URL('../../assets/player.png', import.meta.url).href);
    this.load.image('counter', new URL('../../assets/counter.png', import.meta.url).href);
    this.load.image('line', new URL('../../assets/line.png', import.meta.url).href);
    this.load.image('start', new URL('../../assets/burger.png', import.meta.url).href);
    this.load.image('person1', new URL('../../assets/person1.png', import.meta.url).href);
    this.load.image('person2', new URL('../../assets/person2.png', import.meta.url).href);
    this.load.image('person3', new URL('../../assets/person3.png', import.meta.url).href);
    this.load.image('person4', new URL('../../assets/person4.png', import.meta.url).href);
    this.load.image('person5', new URL('../../assets/person5.png', import.meta.url).href);
    this.load.image('person6', new URL('../../assets/person6.png', import.meta.url).href);
    this.load.image('person7', new URL('../../assets/person7.png', import.meta.url).href);
    this.load.image('person8', new URL('../../assets/person8.png', import.meta.url).href);
  }

  create() {
    this.counter = new Counter(this, this.game.config.width / 2, this.game.config.height / 2);
    this.player = new Player(this, this.game.config.width / 2, this.game.config.height / 2);
    this.line = new Line(this, this.game.config.width / 2, this.game.config.height / 2);

    const customerPositions = [];
    for (let i = 1; i < 9; i++) {
      customerPositions.push({
        x: Math.floor(Math.random() * 960),
        y: Math.floor(Math.random() * 720),
        img: 'person' + i,
      });
    }

    // const customerPositions = [

    //   {
    //     x: Math.floor(Math.random() * 960),
    //     y: Math.floor(Math.random() * 720),
    //     img: 'person1',
    //   },
    //   {
    //     x: Math.floor(Math.random() * 960),
    //     y: Math.floor(Math.random() * 720),
    //     img: 'person2',
    //   },
    //   {
    //     x: Math.floor(Math.random() * 960),
    //     y: Math.floor(Math.random() * 720),
    //     img: 'person3',
    //   },
    //   {
    //     x: 600,
    //     y: 600,
    //     img: 'person4',
    //   },
    //   {
    //     x: 800,
    //     y: 600,
    //     img: 'person5',
    //   },
    //   {
    //     x: 600,
    //     y: 300,
    //     img: 'person6',
    //   },
    //   {
    //     x: 200,
    //     y: 400,
    //     img: 'person7',
    //   },
    //   {
    //     x: 800,
    //     y: 200,
    //     img: 'person8',
    //   },
    // ];
    customerPositions.map((position) => {
      console.log(position.x, position.y, position.img);
      const customer = new Customer(this, position.x, position.y, position.img);
      this.customers.push(customer);
      const collider = this.physics.add.overlap(this.counter, customer, (counter, customer) => {
        this.physics.world.removeCollider(collider);
        customer.body.stop();
      });
    });
  }

  update() {
    this.line.update();
    this.customers.map((customer) => {
      customer.update();
    });
  }
}
