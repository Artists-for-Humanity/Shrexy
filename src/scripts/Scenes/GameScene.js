import Phaser from 'phaser';
import { Player } from '../Sprites/Player';
import Obstacle from '../Sprites/Obstacle';

export default class GameScene extends Phaser.Scene {
  player;
  obstacle;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  preload() {
    this.load.image('shrek', new URL('../../assets/shrek.png', import.meta.url).href);
    this.load.image('shrek-2', new URL('../../assets/shrek-crouch.png', import.meta.url).href);
    this.load.image('stick', new URL('../../assets/log.png', import.meta.url).href);
  }
  //Spawns in Shrek on the X-axis
  // Spawns in Stick on the opposite side of Shrek
  create() {
    this.player = new Player(this, this.game.config.width / 4, this.game.config.height / 2);
    this.obstacle = new Obstacle(this, this.game.config.width / 0.2);
  }

  update() {
    this.player.update();
    this.obstacle.update();
  }
  //The stick sprite to approach Shrek at an x-axis base with a starting speed

  //The bird sprite to approach shrek at an y-axis base with a starting speed

  //Input Knights.png in the side of the frame

  //

  //Increase the score count based on the amount of coins collected or whilst collected.

  //

  //If the Game Over screen is up; allow option for player to play again, or to access the shop

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
