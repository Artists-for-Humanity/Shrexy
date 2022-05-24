export default class BirdObstacle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'birdanim');
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setGravityY(4000);
    this.setScale(.75, .75);
    this.type = "bird";
    return this;
  }

  setYPosition(val1, val2) {
    if (this.y < val2) {
      this.y += 3;

    } else if (this.y >= val1) {
      this.y -= 3;
    }
  }
}