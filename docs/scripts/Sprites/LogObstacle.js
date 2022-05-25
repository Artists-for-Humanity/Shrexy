import Phaser from '../../snowpack/pkg/phaser.js';
import {
  dimensions
} from '../constants.js';

export default class LogObstacle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'stick');
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setGravityY(4000);
    this.scaleX = .75;
    this.setSize(100, 50);
    this.type = "stick";

    return this;
  }

  update() {}

  setXPosition(val) {
    this.x = val;
  }

}