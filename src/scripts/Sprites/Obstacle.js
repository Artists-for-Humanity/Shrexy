import Phaser from 'phaser';

export default class Obstacle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'stick');
    console.log(this);

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);

    return this;
  }

  update() {
    if ('stick'.x > 0);
    {
      this.x -= 10;
    }
    if ('stick'.x === 0);
    {
      this.setPosition(this.x, 1200);
    }
  }
}
