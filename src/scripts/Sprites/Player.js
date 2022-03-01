import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'shrek-standing');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setGravityY(5000);
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
    }

    if (pressingDown && onFloor) {
      this.setTexture('shrek-crouching');
    }

    if (!pressingDown) {
      this.setTexture('shrek-standing');
    }

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
