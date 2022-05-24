import Phaser from 'phaser';
import Player from '../Sprites/Player';
import LogObstacle from '../Sprites/LogObstacle';
import BirdObstacle from '../Sprites/BirdObstacle';
import Coin from '..//Sprites/Coin.js';
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
    this.randObject;
    this.coins;

    // Variables for score timer
    this.timerEvent = 0;
    this.timerEvent2 = 0;
    this.tick = false;
    // this.score = 0;
    this.scoreText;
    this.randObject;
    this.timeCheck = false;
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
    this.load.spritesheet('birdanim', new URL('../../assets/owl-spreadsheet_ccexpress.png',
      import.meta.url).href, {
      frameWidth: 150,
      frameHeight: 120
    });
    this.load.spritesheet('coinanim', new URL('../../assets/coin.png',
      import.meta.url).href, {
      frameWidth: 56,
      frameHeight: 62
    });
  }

  // Spawns in Shrek on the X-axis & Stick on the opposite side of Shrek

  create() {
    this.background = this.add.tileSprite(this.game.config.width / 2, this.game.config.height / 2, 1152, 864, 'bg1');

    this.ground = this.add.tileSprite(this.game.config.width / 2, this.game.config.height, 1152, 108, 'ground');

    this.ground.setOrigin(0.5, 1);
    this.physics.world.enable(this.ground);
    this.ground.body.setImmovable(true);

    this.obstacles = this.physics.add.group();
    this.player = new Player(this, this.game.config.width / 4, this.game.config.height / 2);

    this.coins = this.physics.add.group()
    this.physics.add.collider(this.player, this.coins, (a, b) => {
      this.globalState.score += 10;
      b.destroy();
    });

    this.physics.add.collider(this.player, this.ground);
    this.physics.add.collider(this.obstacles, this.ground);
    this.physics.add.collider(this.coins, this.ground);

    this.physics.add.collider(this.player, this.obstacles, (a, b) => {
      if (b.type === 'stick') {
        b.destroy();
      }
      if (b.type === 'bird') {
        b.destroy();
      }
      this.tries += 1;
      if (this.tries === 3) {
        this.isAlive = false;
        this.tries = 0;
      }
    });
    this.getAnim();

    this.globalState.resetScore();

    this.scoreText = this.add.text(this.game.config.width * .05, this.game.config.height * .05, '', {
      fontFamily: 'Luminari Regular',
      fontSize: '24px',
      fontStyle: 'bold',
      fill: colors.white,
      align: 'center',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: {
        blur: 42
      }
    });
  }

  update(time, delta) {
    this.timerEvent += delta;
    this.timerEvent2 += delta;
    this.timer();
    this.spawner();
    this.obstacles.getChildren().forEach((obstacle) => {
      if (obstacle.type === "bird") {
        obstacle.anims.play('fly', true);
        // console.log(obstacle)
      }
    });
    this.player.anims.play('run', true);
    // console.log(this.player)
    // console.log(this.coins)
    this.coins.getChildren().forEach((coin) => {
      coin.anims.play('spin', true);
    });
    this.player.update();
    this.moveObject();
    this.gameOver();
    this.background.tilePositionX += this.gameSpeed * .85;
    this.ground.tilePositionX += this.gameSpeed;


  }

  spawner() {
    if (this.timeCheck === false) {
      this.generateObject();
      this.timeCheck = true;
      this.timerEvent2 = 0;
    }
    if (this.timeCheck === true && this.timerEvent2 > (Phaser.Math.Between(1, 4) * 1000)) {
      this.timeCheck = false;
    }
  }

  setScoreText() {
    this.scoreText.setText('SCORE: ' + this.globalState.score)
  }

  timer() {
    if (this.tick === false) {
      this.globalState.score += 1;
      this.setScoreText();
      this.tick = true;
      this.timerEvent = 0;
    }
    if (this.tick === true && this.timerEvent > 500) {
      this.timerEvent -= 500;
      this.tick = false;
    }
  }

  moveObject() {
    //The stick sprite approaches Shrek at an x-axis with a constant speed
    Phaser.Actions.IncX(this.obstacles.getChildren(), -this.gameSpeed);
    Phaser.Actions.IncX(this.coins.getChildren(), -this.gameSpeed);

    this.obstacles.getChildren().forEach((obstacle) => {
      //The bird sprite approaches shrek from the sky or from the ground
      if (obstacle.type === "bird") {
        obstacle.setYPosition(this.game.config.height / 1.85, this.game.config.height - 143)
      }
      if (obstacle.getBounds().right < 0) {
        obstacle.destroy()

      }
    });
  }

  generateObject() {
    this.randObject = Phaser.Math.Between(1, 4);
    if (this.randObject === 1) {
      this.obstacles.add(new BirdObstacle(this, this.game.config.width, this.game.config.height / 1.85));
    } else if (this.randObject === 2) {
      this.obstacles.add(new BirdObstacle(this, this.game.config.width, this.game.config.height - 143));
    } else if (this.randObject === 3) {
      this.obstacles.add(new LogObstacle(this, this.game.config.width, this.game.config.height - 143));
    } else if (this.randObject === 4) {
      this.coins.add(new Coin(this, this.game.config.width, this.game.config.height - 143));
    }
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
      ],
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
      key: 'spin',
      frames: [{
          key: 'coinanim',
          frame: 0
        },
        {
          key: 'coinanim',
          frame: 1
        },
        {
          key: 'coinanim',
          frame: 2
        },
        {
          key: 'coinanim',
          frame: 3
        },
        {
          key: 'coinanim',
          frame: 4
        },
        {
          key: 'coinanim',
          frame: 6
        },
        {
          key: 'coinanim',
          frame: 7
        },
        {
          key: 'coinanim',
          frame: 8
        },
        {
          key: 'coinanim',
          frame: 9
        },
        {
          key: 'coinanim',
          frame: 10
        },
        {
          key: 'coinanim',
          frame: 11
        },
        {
          key: 'coinanim',
          frame: 12
        },

      ],
      frameRate: 10,
      repeat: 0
    });
  }

  //If the Game Over screen is up; allow option for player to play again, or to access the shop
  gameOver() {
    if (this.isAlive == false) {
      this.scene.start('GameOverScene');
    }
    this.isAlive = true;
  }
}


//Input Knights.png in the side of the frame

//Increase the score count based on the amount of coins collected or whilst collected.

//if player is in Shop, allow option to exit or buy

//If player is buying an item; check the condition if the amount is True for item to be purchased with current amount of coins

//If player doesnt have enough, input an pop-out, mentioning that the amount of coins are insufficient

//If player does have enough, input an pop-out, mentioning that the item had been purchased

//At the start of every game, allow the player to choose an option o whether equip an item bought from the store

//if Game Over screen is up; allow option for player to access the settings

// Once clicked, pop out different imaegs to represent its function

//If player clicks on "General", allow the player to change the general settings

//If player clicks on "Audio", allow the player to change the audio

//If player clicks on "Control" allow the player to switch the controls or binds

//If player clicks on "Screen" allow the player to change aspects of the screen management of the game

//Allow the player to exit the settings; back to the play again screen

//If player is done playing, after either an "Back" or an "Game over"; give access to an "Quit" button to exit the game

// If the Quit button is clicked, shut down all service of the game*/