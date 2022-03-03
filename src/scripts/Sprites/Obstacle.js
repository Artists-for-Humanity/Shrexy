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
    this.type="stick"

    // this.create(this.game.config.width, this.game.config.height,'stick');
    // this.obstacles = scene.physics.add.group();
    // this.stick = this.obstacles.create(1152, 864, 'stick');
    // console.log(this.logOne)
    return this;
  }

  update() { 
    // Phaser.Actions.IncX(this.getChildren(), -this.gameSpeed);

    // this.obstacles.getChildren().forEach((obstacle) => {
    //   if (obstacle.getBounds().right < 0) {
    //     this.obstacles.killAndHide(obstacle);
    //   }
    // });

    // this.x -=this.gamespeed;
    // if(this.getBounds().right < 0){
    //   this.obstacles.killAndHide(obstacle);
    // }

  }

  setXPosition(val) {
    // console.log("X value was")
    this.x = val;
  }

}
