import Phaser from 'phaser';

export default class Coin extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) { 
        super(scene, x, y, 'coinanim');
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.setGravityY(4000);
        // this.setOrigin(0.5, 1);
        this.scaleX = .75;
        this.setSize(100, 50);
        this.type= "coin";
    
        return this;
      }}