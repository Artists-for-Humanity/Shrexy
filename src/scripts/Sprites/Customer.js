import Phaser from 'phaser';

export default class Customer extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, personIcon) {
    super(scene, x, y, personIcon);

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);
    this.setScale(0.15);

    // this.physics.moveTo(480, 360, 100);
    this.scene.physics.moveToObject(this, this.scene.player, 200);

    return this;
  }
  //   preload() {
  //     this.load.image('person1', new URL('../../assets/person1.png', import.meta.url).href);
  //     // this.load.image('person2', new URL('../../assets/person2.png', import.meta.url).href);
  //     // this.load.image('person3', new URL('../../assets/person3.png', import.meta.url).href);
  //     // this.load.image('person4', new URL('../../assets/person4.png', import.meta.url).href);
  //     // this.load.image('person5', new URL('../../assets/person5.png', import.meta.url).href);
  //     // this.load.image('person6', new URL('../../assets/person6.png', import.meta.url).href);
  //     // this.load.image('person7', new URL('../../assets/person7.png', import.meta.url).href);
  //     // this.load.image('person8', new URL('../../assets/person8.png', import.meta.url).href);
  //   }

  //   create() {
  //     this.person1 = new Customer(this, 0, 0, 'person1');
  //   }

  update() {
    console.log(this.body.x, this.body.y);
    // if (this.x > 480 && this.y < 360) {
    //   this.setX((this.x -= Math.random(1 - 10)));
    //   this.setY((this.y += Math.random(1 - 10)));
    // } else if (this.x < 480 && this.y < 360) {
    //   this.setX((this.x += Math.random(1 - 10)));
    //   this.setY((this.y += Math.random(1 - 10)));
    // } else if (this.x > 480 && this.y > 360) {
    //   this.setX((this.x += Math.random(1 - 10)));
    //   this.setY((this.y += Math.random(1 - 10)));
    // } else if (this.x < 480 && this.y > 360) {
    //   this.setX((this.x += Math.random(1 - 10)));
    //   this.setY((this.y += Math.random(1 - 10)));
    // }
  }
}
