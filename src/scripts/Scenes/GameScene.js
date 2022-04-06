import Phaser from 'phaser';
import Player from '../Sprites/Player';
import LogObstacle from '../Sprites/LogObstacle';
import BirdObstacle from '../Sprites/BirdObstacle';
import {
  colors
} from '../constants';

export default class GameScene extends Phaser.Scene {
  player;
  obstacle;

  constructor() {
    super({
      key: 'GameScene',
    });
    this.gameSpeed = 15;
    this.obstacles;
    this.ground;
    this.birdObstacles;
    this.isAlive = true;
    this.tries = 0;
    this.randObstacle;

    // Variables for score timer
    this.timerEvent = 0;
    this.tick = false;
    this.score = 0;
    this.scoreText;
    this.randObstacle;
    this.timeCheck = false;
    // this.numObstacles = 0;

  }

  preload() {
    this.load.image('bg1', new URL('../../assets/shrexy-bg4.png',
      import.meta.url).href);
    this.load.image('stick', new URL('../../assets/log-with-roses.png',
      import.meta.url).href);
    this.load.image('ground', new URL('../../assets/shrexy-ground1.png',
      import.meta.url).href);
    this.load.spritesheet('shrekanim', new URL('../../assets/shrekrun.png',
      import.meta.url).href, {
      frameWidth: 84,
      frameHeight: 84
    });
    this.load.spritesheet('birdanim', new URL('../../assets/birdsheet.png',
      import.meta.url).href, {
      frameWidth: 144,
      frameHeight: 144
    });

  }

  // Spawns in Shrek on the X-axis & Stick on the opposite side of Shrek
  create() {

    // this.timedEvent = this.time.delayedCall(3000, ()=>{}, [], this);
   
    this.background = this.add.tileSprite(this.game.config.width / 2, this.game.config.height / 2, 1152, 864, 'bg1');

    this.ground = this.add.tileSprite(this.game.config.width / 2, this.game.config.height, 1152, 108, 'ground');

    this.ground.setOrigin(0.5, 1);
    this.physics.world.enable(this.ground);
    this.ground.body.setImmovable(true);

    this.obstacles = this.physics.add.group();
    this.player = new Player(this, this.game.config.width / 4, this.game.config.height / 2);

    // console.log(this.timerEvent);

    // this.obstacles.add(new LogObstacle(this, 20,  this.game.config.height - 143));
    this.physics.add.collider(this.player, this.ground);
    this.physics.add.collider(this.obstacles, this.ground);
    // this.timerEvent = this.time.delayedCall((Phaser.Math.Between(2, 7) * 1000), this.generateObstacle, [this.obstacles], this);


    this.physics.add.collider(this.player, this.obstacles, (a, b) => {
      if (b.type === 'stick') {
        b.destroy();
//         this.obstacles.add(new LogObstacle(this, this.game.config.width, this.game.config.height - 143));
        // this.obstacles.add(new LogObstacle(this, this.game.config.width * 2, this.game.config.height - 143));
      }
      if (b.type === 'bird') {
        b.destroy();
        // this.obstacles.add(new BirdObstacle(this, this.game.config.width * 2, this.game.config.height / 1.85));
      }
      this.tries += 1;
      if (this.tries === 3) {
        this.isAlive = false;
        this.tries = 0;
      }
    });
    this.getAnim(); 
    
    this.scoreText = this.add.text(160, 12, '', {
      fontFamily: 'Space Mono',
      fontSize: '24px',
      fontStyle: 'bold',
      fill: colors.black,
      align: 'center',
    });
  }

  update(time, delta) {
    this.timerEvent += delta;
    this.timer();

    this.spawner();
    this.obstacles.getChildren().forEach((obstacle) => {
      if (obstacle.type === "bird") {
        obstacle.anims.play('fly', true);
      }
    });
    this.player.anims.play('run', true);
    this.player.update();
    this.moveObstacle();
    this.gameOver();
    this.background.tilePositionX += this.gameSpeed * .85;
    this.ground.tilePositionX += this.gameSpeed;
  }

  spawner() {
    // this.physics.add.overlap(this.player, this.enemies, () => {
    if (this.timeCheck === false) {
      this.generateObstacle();
      // console.log(this.obstacles)
      this.timeCheck = true;
      this.timerEvent = 0;
    }
    if (this.timeCheck === true && this.timerEvent > (Phaser.Math.Between(1, 4) * 1000)) {
      // this.timerEvent -=  3000;
      this.timeCheck = false;
    }
    // });

  }

  setScoreText() {
    // console.log('hello')
    this.scoreText.setText('SCORE: ' + this.score)
  }

  timer() {
    if (this.tick === false) {
      console.log(this.score);
      this.score += 1;
      this.setScoreText();
      this.tick = true;
      this.timerEvent = 0;
    }
    if (this.tick === true && this.timerEvent > 500) {
      this.timerEvent -= 500;
      this.tick = false;
    }
  }

  moveObstacle() {
    //The stick sprite approaches Shrek at an x-axis with a starting speed
    Phaser.Actions.IncX(this.obstacles.getChildren(), -this.gameSpeed);

    this.obstacles.getChildren().forEach((obstacle) => {
      // obstacle.setImmovable(true)
      if (obstacle.getBounds().right < 0) {
        // obstacle.setXPosition(this.game.config.width * 1.5);
        obstacle.destroy()

        //The bird sprite approaches shrek at a const y-axis with a starting speed
        if (obstacle.type === "bird") {
          // obstacle.y = this.game.config.height / 1.85;
          obstacle.destroy();

        }
      }
    });
  }

  generateObstacle() {
   
    // this.numObstacles++
    this.randObstacle = Phaser.Math.Between(1, 2);
    // console.log(this.randObstacle);
    if (this.randObstacle === 1) {
      this.obstacles.add(new BirdObstacle(this, this.game.config.width , this.game.config.height / 1.85));
    } else {
      this.obstacles.add(new LogObstacle(this, this.game.config.width, this.game.config.height - 143));
    }
    // console.log('reachme 00')

  }

  getAnim() {
    this.anims.create({
      key: 'run',
      frames: [{
          key: 'shrekanim',
          frame: 0
        },
        {
          key: 'shrekanim',
          frame: 1
        },
        {
          key: 'shrekanim',
          frame: 2
        },
        {
          key: 'shrekanim',
          frame: 3
        },
        {
          key: 'shrekanim',
          frame: 4
        },
      ],
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
      key: 'fly',
      frames: [{
          key: 'birdanim',
          frame: 0
        },
        {
          key: 'birdanim',
          frame: 1
        },
        {
          key: 'birdanim',
          frame: 2
        },
        {
          key: 'birdanim',
          frame: 3
        },
        {
          key: 'birdanim',
          frame: 4
        },
        {
          key: 'birdanim',
          frame: 5
        },
        {
          key: 'birdanim',
          frame: 6
        },
        {
          key: 'birdanim',
          frame: 7
        },
      ],
      frameRate: 10,
      repeat: 0
    });
  }

  //If the Game Over screen is up; allow option for player to play again, or to access the shop
  gameOver() {
    if (this.isAlive == false) {
      this.scene.start('MenuScene');
      // console.log('DONKEH!!');
    }
    this.isAlive = true;
  }
}


/* 
1. generate obstacle from obj source
2. randomize the wait time between obstacle generation
3. randomize the type of obstalce being generated


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

// If the Quit button is clicked, shut down all service of the game*/