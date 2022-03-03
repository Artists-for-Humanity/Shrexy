
export default class BirdObstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) { 
      super(scene, x, y, 'bird');
      console.log("sdfsdf")
      scene.add.existing(this);
      scene.physics.world.enableBody(this);
      this.setGravityY(4000);
      // this.setOrigin(0.5, 1);
      this.scaleX = .5;
      this.scaleY = .5;
      // this.create(this.game.config.width, this.game.config.height,'stick');
      // this.obstacles = scene.physics.add.group();
      // this.stick = this.obstacles.create(1152, 864, 'stick');
      // console.log(this.logOne)
      this.type = "bird";
      return this;
    }

    update() {
        console.log("asdfasdf")
    }


  setXPosition(val) {
    // console.log("X value was")
    this.x = val;
  }

}