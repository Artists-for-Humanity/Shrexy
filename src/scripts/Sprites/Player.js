import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'shrek');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);

    this.cursors = scene.input.keyboard.createCursorKeys();

    return this;
  }
  // Player clicking the UP key to jump up

  //Player clicking the DOWN key to crouch down
  update() {
    if (this.cursors.up.isDown && !this.cursors.down.isDown) {
      this.setTexture('shrek');
      this.y -= 10;
    } else if (this.cursors.down.isDown) {
      this.setTexture('shrek-2');
      this.setSize(300, 150);
      this.y += 10;
    }

    if (!this.cursors.down.isDown) {
      this.setTexture('shrek');
      this.setSize(300, 300);
    }
  }
}
