import Phaser from 'phaser';
import Player from '../Sprites/Player';
import Obstacle from '../Sprites/Obstacle';
import BirdObstacle from '../Sprites/BirdObstacle';

export default class GameScene extends Phaser.Scene {
  player;
  obstacle;

  constructor() {
    super({
      key: 'GameScene',
    });

    this.gameSpeed = 10;
    this.obstacles;
    this.ground;
    this.birdObstacles;
    this.isAlive = true;
  }

  preload() {
    this.load.image('shrek-standing', new URL('../../assets/newshrek.png', import.meta.url).href);
    this.load.image('shrek-crouching', new URL('../../assets/shrek-crouch.png', import.meta.url).href);
    this.load.image('bg1',new URL('../../assets/shrexy-bg3.png', import.meta.url).href);
    this.load.image('stick', new URL('../../assets/log.png', import.meta.url).href);
    this.load.image('bird', new URL('../../assets/bird.png', import.meta.url).href);
    this.load.image('ground',new URL('../../assets/shrexy-ground1.png', import.meta.url).href);
  }
  //Spawns in Shrek on the X-axis
  // Spawns in Stick on the opposite side of Shrek
  create() {
    this.background = this.add.tileSprite(this.game.config.width / 2, this.game.config.height / 2, 1152, 864, 'bg1');


    // this.ground = this.physics.add.staticGroup();
    this.ground = this.add.tileSprite(this.game.config.width/2, this.game.config.height, 1152, 108, 'ground');
    // this.ground = this.add.sprite(this.game.config.width/2, this.game.config.height, 'ground');

    // this.ground.body.collideWorldBounds(true);

    this.ground.setOrigin(0.5, 1);
    this.physics.world.enable(this.ground);
    this.ground.body.setImmovable(true);
    // this.ground.visible = false;
    // this.physics.world.enableBody(this.ground);

    this.obstacles = this.physics.add.group(); 
    this.player = new Player(this, this.game.config.width / 4, this.game.config.height / 2);
    this.obstacles.add(new Obstacle(this, this.game.config.width,  this.game.config.height - 143));
    this.obstacles.add(new BirdObstacle(this, this.game.config.width * 2, this.game.config.height / 2));
    //console.log(this.obstacles);
    this.physics.add.collider(this.player, this.ground);
    this.physics.add.collider(this.obstacles, this.ground);

    this.physics.add.collider(this.player, this.obstacles, () => {
      this.isAlive = false;
    });
  }

  update() {
    this.player.update();
    this.generateObstacle();
    this.gameOver();
    this.background.tilePositionX += 2;
    this.ground.tilePositionX += 3;
  }


  generateObstacle(){
    //The stick sprite to approach Shrek at an x-axis base with a starting speed
    Phaser.Actions.IncX(this.obstacles.getChildren(), -this.gameSpeed);

    this.obstacles.getChildren().forEach((obstacle) => {
      obstacle.setImmovable(true)
      if (obstacle.getBounds().right < 0) {
        // const randNum = Math.random() * (1500 - 1000) + 1000;
        obstacle.setXPosition(this.game.config.width * 1.5);
        obstacle.setSize();

        //The bird sprite to approach shrek at an y-axis base with a starting speed
        if (obstacle.type === "bird") {
          // obstacle.y = Math.random() * (500 - 100) + 100;;
          obstacle.y = this.game.config.height / 2;
        }
      }
    });
  }

  //If the Game Over screen is up; allow option for player to play again, or to access the shop
  gameOver(){
    if (this.isAlive == false){
      // this.scene.start('MenuScene');
      console.log('DONKEH!!');
    }
    this.isAlive = true;
  }


  //Input Knights.png in the side of the frame

  //Increase the score count based on the amount of coins collected or whilst collected.


  //if player is in Shop, allow option to exit or buy

  //If player is buying an item; check the condition if the amount is True for item to be purchased with current amount of coins

  //If player doesnt have enough, input an pop-out, mentioning that the amount of coins are insufficient

  //If player does have enough, input an pop-out, mentioning that the item had been purchased

  //At the start of every game, allow the player to choose an option o whether equip an item bought from the store

  //

  //if Game Over screen is up; allow option for player to access the settings

  // Once clicked, pop out different imaegs to represent its function

  //If player clicks on "General", allow the player to change the general settings

  //If player clicks on "Audio", allow the player to change the audio

  //If player clicks on "Control" allow the player to switch the controls or binds

  //If player clicks on "Screen" allow the player to change aspects of the screen management of the game

  //Allow the player to exit the settings; back to the play again screen

  //

  //If player is done playing, after either an "Back" or an "Game over"; give access to an "Quit" button to exit the game

  // If the Quit button is clicked, shut down all service of the game
}
