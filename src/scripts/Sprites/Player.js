import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'shrek');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setGravityY(5000);
    this.setCollideWorldBounds(true);
    this.setOrigin(0.5);

    this.cursors = scene.input.keyboard.createCursorKeys();

    return this;
  }
  // Player clicking the UP key to jump up

  //Player clicking the DOWN key to crouch down
  update() {
    console.log(this.y)
    if (this.cursors.up.isDown && !this.cursors.down.isDown) {
      this.setTexture('shrek');
      this.y -= 25;
    } else if (this.cursors.down.isDown) {
      this.setTexture('shrek-2');
      this.setSize(300, 100);
      this.y += 10;
      if(this.y >= 670){
        this.y = 769;
      }
    }
    if (!this.cursors.down.isDown) {
      this.setTexture('shrek');
      this.setSize(300, 300);
    }

  }
}
