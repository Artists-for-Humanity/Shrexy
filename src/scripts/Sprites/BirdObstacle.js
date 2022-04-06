
export default class BirdObstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) { 
      super(scene, x, y, 'birdanim');
      scene.add.existing(this);
      scene.physics.world.enableBody(this);
      this.setGravityY(4000);
      // this.setOrigin(0.5, 1);
      // this.scaleX = .35;
      // this.scaleY = .35;
      this.setScale(.75, .75);
      this.type = "bird";
      // this.setSize(200, 250);
      return this;
    }

  // birdUpdate() {
  //   this.obstacles.anims.play('fly', true);
  // }


  // setXPosition(val) {
  //   this.x = val;
  // }

  setYPosition(val1, val2) {
    // if (this.y >= val1){
    //   Phaser.Actions.IncY(this, -this.gameSpeed * .067);
      console.log('hello');
      console.log(this);

    // }
    // if (this.y <= val2){
    //   Phaser.Actions.IncY(this, this.gameSpeed * .067);
    // }
    if (this.y <= val2) {
      // this.setVelocityY(3);
      this.y += 3;

    } else if (this.y >= val1) {
      // this.setVelocityX(3);
      this.y -= 3;
    }
    }
}