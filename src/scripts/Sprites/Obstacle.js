import Phaser from 'phaser';
import { dimensions } from '../constants';

export default class Obstacle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'stick');
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setOrigin(0.5, 1);
    return this;
  }

  update() {
    // console.log(this.x, this.y);
    // if (this.x > 0) {
    //   this.x -= 5;
    // }
    // if (this.x === 0) {
    //   // this.Obstacle = this.add.Obstacle(this, 1200, 0, 'stick');
    // }
  }
}
