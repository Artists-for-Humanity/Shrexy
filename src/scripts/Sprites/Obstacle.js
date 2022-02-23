import Phaser from 'phaser';
import { dimensions } from '../constants';

export default class Obstacle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'stick');
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setOrigin(0.5, 1);
    // this.create(this.game.config.width, this.game.config.height,'stick');
    // this.obstacles = scene.physics.add.group();
    // this.stick = this.obstacles.create(1152, 864, 'stick');
    // console.log(this.logOne)
    return this;
  }

  update() { 
    console.log(this);
    Phaser.Actions.IncX(this.obstacles.getChildren(), -this.gameSpeed);

    this.obstacles.getChildren().forEach((obstacle) => {
      if (obstacle.getBounds().right < 0) {
        this.obstacles.killAndHide(obstacle);
      }
    });
  }
}
