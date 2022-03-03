import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'shrek-standing');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setGravityY(4000);
    this.setCollideWorldBounds(true);
    this.setOrigin(0.5, 1);

    this.cursors = scene.input.keyboard.createCursorKeys();

    return this;
  }
  // Player clicking the UP key to jump up

  //Player clicking the DOWN key to crouch down
  update() {
    const pressingUp = this.cursors.up.isDown;
    const pressingDown = this.cursors.down.isDown;
    const onFloor = this.body.onFloor();

    if (pressingUp && onFloor) {
      this.setTexture('shrek-standing');
      this.setVelocityY(-1600);
      // this.setSize(250, 300);
      this.setDisplaySize(200, 275);


    }

    else if (pressingDown && onFloor) {
      this.setTexture('shrek-crouching');
      // this.setSize(250, 150).setOffset(5, 125);
      // this.setSize(250, 150);
      this.setDisplaySize(200, 150);
      // console.log('REACHME 00')
    }

    else if (!pressingDown && onFloor) {
      this.setTexture('shrek-standing');
      this.setDisplaySize(200, 275);
      // this.setSize(250, 300);
    }

    // if (this.y > 756)
    // {
    //   this.y = 756;

    // }

    // if (pressingUp && !pressingDown) {
    //   this.setTexture('shrek-standing');
    //   this.y -= 25;
    // } else if (pressingDown) {
    //   this.setTexture('shrek-crouching');
    //   this.setSize(300, 100);
    //   this.y += 10;
    //   if(this.y >= 670){
    //     this.y = 769;
    //   }
    // }
    // if (!pressingDown) {
    //   this.setTexture('shrek-standing');
    //   this.setSize(300, 300);
    // }
  }
}
