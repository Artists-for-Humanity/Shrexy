import Phaser from 'phaser';
import { dimensions } from '../constants';

export default class Obstacle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) { 
    super(scene, x, y, 'stick');
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setGravityY(4000);
    // this.setOrigin(0.5, 1);
    this.scaleX = .75;
    this.setSize(100, 50);
    this.type= "stick";

    return this;
  }

  update() {
  }

  setXPosition(val) {
    this.x = val;
  }

}
