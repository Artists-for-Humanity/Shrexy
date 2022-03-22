import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'shrek-standing');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setGravityY(4000);
    this.setCollideWorldBounds(true);
    this.setOrigin(0.5, 1);
    this.setSize(75, 275)

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
      this.setVelocityY(-1400);
      this.setDisplaySize(180, 275);
    }
    else if (pressingDown && onFloor) {
      this.setTexture('shrek-crouching');
      this.setDisplaySize(180, 150);
     
    }
    else if (pressingDown && !onFloor) {
      this.setTexture('shrek-crouching');
      this.setVelocityY(1400);
      this.setDisplaySize(180, 150);
    }

    else if (!pressingDown && onFloor) {
      this.setTexture('shrek-standing');
      this.setDisplaySize(180, 275);
    }
  }
}