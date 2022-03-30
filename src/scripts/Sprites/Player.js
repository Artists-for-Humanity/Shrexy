import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'shrekanim');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setGravityY(4000);
    this.setCollideWorldBounds(true);
    this.setScale(2.5, 3.5);
    // this.setOrigin(0.5, 1);
    this.setSize(50, 75)

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
      // this.setTexture('shrek-standing');
      this.setVelocityY(-1400);
      this.setDisplaySize(200, 300);
    }
    else if (pressingDown && onFloor) {
      // this.setTexture('shrek-crouching');
      this.setDisplaySize(200, 250);
     
    }
    else if (pressingDown && !onFloor) {
      // this.setTexture('shrek-crouching');
      this.setVelocityY(1400);
      this.setDisplaySize(200, 250);
    }

    else if (!pressingDown && onFloor) {
      // this.setTexture('shrek-standing');
      // this.setDisplaySize(150, 300);
    }
  }
}