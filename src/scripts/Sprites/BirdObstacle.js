
export default class BirdObstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) { 
      super(scene, x, y, 'bird');
      scene.add.existing(this);
      scene.physics.world.enableBody(this);
      this.setGravityY(4000);
      // this.setOrigin(0.5, 1);
      this.scaleX = .35;
      this.scaleY = .35;
      this.type = "bird";
      return this;
    }

    // update() {
    // }


  setXPosition(val) {
    this.x = val;
  }
}