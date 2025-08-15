import { InputHandler } from "./userInput.js";
import { GamePlayer } from "./player.js";
import {
  FirstSetBackground,
  SecondSetBackground,
  NumberSetBackground,
} from "./background.js";
import {
  AlphabetOne,
  AlphabetTwo,
  AlphabetThree,
  AlphabetFour,
  AlphabetFive,
  AlphabetSix,
  AlphabetSeven,
  AlphabetEight,
  AlphabetNine,
  AlphabetTen,
  AlphabetEleven,
  AlphabetTwelve,
  AlphabetThirteen,
  AlphabetFourteen,
  AlphabetFifteen,
  AlphabetSixteen,
  AlphabetSeventeen,
  AlphabetEighteen,
  AlphabetNineteen,
  AlphabetTwenty,
  AlphabetTwentyOne,
  AlphabetTwentyTwo,
  AlphabetTwentyThree,
  AlphabetTwentyFour,
  AlphabetTwentyFive,
  AlphabetTwentySix,
  AlphabetTwentySeven,
  AlphabetTwentyEight,
  AlphabetTwentyNine,
  AlphabetThirty,
  AlphabetThirtyOne,
  AlphabetThirtyTwo,
  AlphabetThirtyThree,
  AlphabetThirtyFour,
  AlphabetThirtyFive,
  AlphabetThirtySix,
  AlphabetThirtySeven,
  AlphabetThirtyEight,
  AlphabetThirtyNine,
  AlphabetForty,
  AlphabetFortyOne,
  AlphabetFortyTwo,
  AlphabetFortyThree,
  AlphabetFortyFour,
  AlphabetFortyFive,
  AlphabetFortySix,
  AlphabetFortySeven,
  AlphabetFortyEight,
} from "./alphabets.js";
import {
  NumberOne,
  NumberTwo,
  NumberThree,
  NumberFour,
  NumberFive,
  NumberSix,
  NumberSeven,
  NumberEight,
  NumberNine,
  NumberTen,
  NumberEleven,
  NumberTwelve,
  NumberThirteen,
  NumberFourteen,
  NumberFifteen,
  NumberSixteen,
  NumberSeventeen,
  NumberEighteen,
  NumberNineteen,
  NumberTwenty,
  NumberTwentyOne,
  NumberTwentyTwo,
  NumberTwentyThree,
  NumberTwentyFour,
  NumberTwentyFive,
  NumberTwentySix,
  NumberTwentySeven,
  NumberTwentyEight,
  NumberTwentyNine,
  NumberThirty,
  NumberThirtyOne,
  NumberThirtyTwo,
  NumberThirtyThree,
  NumberThirtyFour,
  NumberThirtyFive,
  NumberThirtySix,
  NumberThirtySeven,
  NumberThirtyEight,
  NumberThirtyNine,
  NumberForty,
  NumberFortyOne,
  NumberFortyTwo,
  NumberFortyThree,
  NumberFortyFour,
  NumberFortyFive,
  NumberFortySix,
  NumberFortySeven,
  NumberFortyEight,
  NumberFortyNine,
  NumberFifty,
  NumberFiftyOne,
  NumberFiftyTwo,
  NumberFiftyThree,
  NumberFiftyFour,
  NumberFiftyFive,
  NumberFiftySix,
  NumberFiftySeven,
  NumberFiftyEight,
  NumberFiftyNine,
  NumberSixty,
  NumberSixtyOne,
  NumberSixtyTwo,
  NumberSixtyThree,
  NumberSixtyFour,
  NumberSixtyFive,
  NumberSixtySix,
  NumberSixtySeven,
  NumberSixtyEight,
  NumberSixtyNine,
  NumberSeventy,
  NumberSeventyOne,
  NumberSeventyTwo,
  NumberSeventyThree,
  NumberSeventyFour,
  NumberSeventyFive,
  NumberSeventySix,
  NumberSeventySeven,
  NumberSeventyEight,
  NumberSeventyNine,
  NumberEighty,
  NumberEightyOne,
  NumberEightyTwo,
  NumberEightyThree,
  NumberEightyFour,
  NumberEightyFive,
  NumberEightySix,
  NumberEightySeven,
  NumberEightyEight,
  NumberEightyNine,
  NumberNinety,
  NumberNinetyOne,
  NumberNinetyTwo,
  NumberNinetyThree,
  NumberNinettyFour,
  NumberNinetyFive,
  NumberNinetySix,
  NumberNinetySeven,
  NumberNinetyEight,
  NumberNinetyNine,
  NumberHundred,
} from "./numbers.js";
import {
  GhostEnemy,
  BatEnemy,
  GroundEnemy,
  GrumpyBee,
  GrassMonster,
  PurpleBug,
} from "./enemy.js";
import { Ui } from "./ui.js";
import { Lifes } from "./lifes.js";
import { Collision } from "./collisioncheck.js";

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.speed = 1;
    this.maxSpeed = 3;
    this.time = 0;
    this.score = 0;
    this.coins = 0;
    this.totalScore = 0;
    this.totalCoins = 0;
    this.lives = 5;
    this.player = null;
    this.maxLives = this.lives;
    this.assestInterval = 1000;
    this.assetTimer = 0;
    this.input = new InputHandler(this);
    this.uI = new Ui(this);
    this.floatingMessages = [];
    this.collisions = [];
    this.particles = [];
    this.lifeArray = [];

    this.maxParticles = 50;
    this.gameOver = false;
  }
  update(deltaTime) {
    this.time += deltaTime;

    if (this.assetTimer > this.assestInterval && this.lives <= 2) {
      this.addLives();
      this.assetTimer = 0;
    } else {
      this.assetTimer += deltaTime;
    }

    // handling Floating messages
    this.floatingMessages.forEach((message) => {
      message.update(deltaTime);
    });
    this.floatingMessages = this.floatingMessages.filter(
      (messages) => !messages.markedForDeletion
    );
    //handling collisions
    this.collisions.forEach((collision, index) => {
      collision.update(deltaTime);
      if (collision.markedForDeletion) {
        this.collisions.splice(index, 1);
      }
    });
    this.collisions = this.collisions.filter(
      (collision) => !collision.markedForDeletion
    );
    // handling particles
    this.particles.forEach((particle, index) => {
      particle.update();
      if (particle.markedForDeletion) {
        this.particles.splice(index, 1);
      }
    });
    if (this.particles.length > this.maxParticles) {
      this.particles.length = this.maxParticles;
    }
    this.particles = this.particles.filter(
      (particle) => !particle.markedForDeletion
    );
    // handling lifes
    this.lifeArray.forEach((live, index) => {
      live.update(deltaTime);
      if (live.markedForDeletion) {
        this.lifeArray.splice(index, 1);
      }
    });
    this.lifeArray = this.lifeArray.filter((live) => !live.markedForDeletion);
    //handling credits

    // handling game over conditons
    if (this.coins >= this.maxCoins) {
      this.gameOver = true;
      this.coins += 500;
      this.score += 100;
      this.totalScore += this.score;
      this.totalCoins += this.coins;
    }
    if (this.score <= 0) {
      this.score = 0;
    }
    if (this.lives === 0) {
      this.gameOver = true;
    }
  }

  draw(context) {
    this.uI.draw(context);
    //drawing floating messages
    this.floatingMessages.forEach((message) => {
      message.draw(context);
    });
    // drawing collisions
    this.collisions.forEach((collision) => {
      collision.draw(context);
    });
    // drawing particles
    this.particles.forEach((particle) => {
      particle.draw(context);
    });
    //drawing lifes

    this.lifeArray.forEach((live) => {
      live.draw(context);
    });
  }
  addLives() {
    if (this.speed >= 0 && Math.random() > 0.5) {
      this.lifeArray.push(new Lifes(this));
    }
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }
}

export class FirstSetAlphabets extends Game {
  constructor(width, height) {
    super(width, height);
    this.background = new FirstSetBackground(this);
    this.player = new GamePlayer(this);
    this.player.currentState = this.player.states[0];
    this.player.currentState.enter();
    this.firstSetAlphabets = [];
    this.firstSetAlphabetType = [
      AlphabetOne,
      AlphabetTwo,
      AlphabetThree,
      AlphabetFour,
      AlphabetFive,
      AlphabetSix,
      AlphabetSeven,
      AlphabetEight,
      AlphabetNine,
      AlphabetTen,
      AlphabetEleven,
      AlphabetTwelve,
      AlphabetThirteen,
      AlphabetFourteen,
      AlphabetFifteen,
    ];
    this.firstSetAlphabetIndex = 0;
    this.enemies = [];
    this.maxCoins = 1500;
    this.collision = new Collision(this);
  }
  update(deltaTime) {
    super.update(deltaTime);

    //handling background
    this.background.update();
    //handling player
    this.player.update(this.input.keys, deltaTime);
    this.collision.grabAlphabets(this.player);
    this.collision.attackGhost(this.player);
    this.collision.attackFlyingEnemy(this.player);

    // handling Alphabets

    if (this.assetTimer > this.assestInterval) {
      this.addAlphabet();
      this.assetTimer = 0;
    } else {
      this.assetTimer += deltaTime;
    }
    this.firstSetAlphabets.forEach((alphabet) => {
      alphabet.update(deltaTime);
      if (alphabet.markedForDeletion) {
        this.firstSetAlphabets.splice(
          this.firstSetAlphabets.indexOf(alphabet),
          1
        );
      }
    });
    this.firstSetAlphabets = this.firstSetAlphabets.filter(
      (alphabet) => !alphabet.markedForDeletion
    );
    // handling enemies
    if (this.assetTimer > this.assestInterval) {
      this.addEnemy();
      this.assetTimer = 0;
    } else {
      this.assetTimer += deltaTime;
    }
    this.enemies.forEach((enemy) => {
      enemy.update(deltaTime);
      if (enemy.markedForDeletion)
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
    });
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
    if (!this.gameOver) {
      this.player.sounds["running"].pause();
    }
  }
  draw(context) {
    this.background.draw(context);
    super.draw(context);
    this.player.draw(context);
    //drawing Alphabets
    this.firstSetAlphabets.forEach((alphabet) => {
      alphabet.draw(context);
    });
    //drawing enemies
    this.enemies.forEach((enemy) => {
      enemy.draw(context);
    });
  }
  addAlphabet() {
    if (
      this.firstSetAlphabets.length === 0 ||
      this.firstSetAlphabets[this.firstSetAlphabets.length - 1].x <
        this.width * 0.25
    ) {
      const newAlphabet = new this.firstSetAlphabetType[
        this.firstSetAlphabetIndex
      ](this);
      this.firstSetAlphabets.push(newAlphabet);
      this.firstSetAlphabetIndex =
        (this.firstSetAlphabetIndex + 1) % this.firstSetAlphabetType.length;
    }
  }

  addEnemy() {
    if (this.speed >= 0 && Math.random() > 0.5) {
      this.enemies.push(new GhostEnemy(this));
    } else if (this.speed >= 0) {
      this.enemies.push(new BatEnemy(this));
    }
  }
}
export class SecondSetAlphabets extends Game {
  constructor(width, height) {
    super(width, height);
    this.background = new SecondSetBackground(this);
    this.player = new GamePlayer(this);
    this.player.currentState = this.player.states[0];
    this.player.currentState.enter();
    this.secondSetAlphabets = [];
    this.secondSetAlphabetType = [
      AlphabetSixteen,
      AlphabetSeventeen,
      AlphabetEighteen,
      AlphabetNineteen,
      AlphabetTwenty,
      AlphabetTwentyOne,
      AlphabetTwentyTwo,
      AlphabetTwentyThree,
      AlphabetTwentyFour,
      AlphabetTwentyFive,
      AlphabetTwentySix,
      AlphabetTwentySeven,
      AlphabetTwentyEight,
      AlphabetTwentyNine,
      AlphabetThirty,
      AlphabetThirtyOne,
      AlphabetThirtyTwo,
      AlphabetThirtyThree,
      AlphabetThirtyFour,
      AlphabetThirtyFive,
      AlphabetThirtySix,
      AlphabetThirtySeven,
      AlphabetThirtyEight,
      AlphabetThirtyNine,
      AlphabetForty,
      AlphabetFortyOne,
      AlphabetFortyTwo,
      AlphabetFortyThree,
      AlphabetFortyFour,
      AlphabetFortyFive,
      AlphabetFortySix,
      AlphabetFortySeven,
      AlphabetFortyEight,
    ];
    this.secondSetAlphabetIndex = 0;
    this.enemies = [];
    this.maxCoins = 3300;
    this.collision = new Collision(this);
  }
  update(deltaTime) {
    super.update(deltaTime);
    // handling background
    this.background.update();
    //handling Player
    this.player.update(this.input.keys, deltaTime);
    this.collision.newGrabAlphabets(this.player);
    this.collision.attackFlyingEnemy(this.player);
    this.collision.attackGroundEnemyNew(this.player);
    if (this.assetTimer > this.assestInterval) {
      this.addAlphabet();
      this.assetTimer = 0;
    } else {
      this.assetTimer += deltaTime;
    }
    this.secondSetAlphabets.forEach((alphabet) => {
      alphabet.update(deltaTime);
      if (alphabet.markedForDeletion) {
        this.secondSetAlphabets.splice(
          this.secondSetAlphabets.indexOf(alphabet),
          1
        );
      }
    });
    this.secondSetAlphabets = this.secondSetAlphabets.filter(
      (alphabet) => !alphabet.markedForDeletion
    );
    //handleEnemies
    if (this.assetTimer > this.assestInterval) {
      this.addEnemy();
      this.assetTimer = 0;
    } else {
      this.assetTimer += deltaTime;
    }
    this.enemies.forEach((enemy) => {
      enemy.update(deltaTime);
      if (enemy.markedForDeletion)
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
    });
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
    if (!this.gameOver) {
      this.player.sounds["running"].pause();
    }
  }
  draw(context) {
    this.background.draw(context);
    super.draw(context);
    this.player.draw(context);
    this.secondSetAlphabets.forEach((alphabet) => {
      alphabet.draw(context);
    });
    this.enemies.forEach((enemy) => {
      enemy.draw(context);
    });
  }
  addAlphabet() {
    if (
      this.secondSetAlphabets.length === 0 ||
      this.secondSetAlphabets[this.secondSetAlphabets.length - 1].x <
        this.width * 0.25
    ) {
      const newAlphabet = new this.secondSetAlphabetType[
        this.secondSetAlphabetIndex
      ](this);
      this.secondSetAlphabets.push(newAlphabet);
      this.secondSetAlphabetIndex =
        (this.secondSetAlphabetIndex + 1) % this.secondSetAlphabetType.length;
    }
  }
  addEnemy() {
    if (this.player.speed > 0 && Math.random() > 0.9) {
      this.enemies.push(new GroundEnemy(this));
    } else if (this.speed >= 0 && Math.random() < 0.5) {
      this.enemies.push(new GrumpyBee(this));
    } else if (this.speed >= 0 && Math.random() < 0.3) {
      this.enemies.push(new BatEnemy(this));
    }
  }
}
export class NumberSet extends Game {
  constructor(width, height) {
    super(width, height);
    this.background = new NumberSetBackground(this);
    this.player = new GamePlayer(this);
    this.player.currentState = this.player.states[0];
    this.player.currentState.enter();
    this.numberType = [
      NumberOne,
      NumberTwo,
      NumberThree,
      NumberFour,
      NumberFive,
      NumberSix,
      NumberSeven,
      NumberEight,
      NumberNine,
      NumberTen,
      NumberEleven,
      NumberTwelve,
      NumberThirteen,
      NumberFourteen,
      NumberFifteen,
      NumberSixteen,
      NumberSeventeen,
      NumberEighteen,
      NumberNineteen,
      NumberTwenty,
      NumberTwentyOne,
      NumberTwentyTwo,
      NumberTwentyThree,
      NumberTwentyFour,
      NumberTwentyFive,
      NumberTwentySix,
      NumberTwentySeven,
      NumberTwentyEight,
      NumberTwentyNine,
      NumberThirty,
      NumberThirtyOne,
      NumberThirtyTwo,
      NumberThirtyThree,
      NumberThirtyFour,
      NumberThirtyFive,
      NumberThirtySix,
      NumberThirtySeven,
      NumberThirtyEight,
      NumberThirtyNine,
      NumberForty,
      NumberFortyOne,
      NumberFortyTwo,
      NumberFortyThree,
      NumberFortyFour,
      NumberFortyFive,
      NumberFortySix,
      NumberFortySeven,
      NumberFortyEight,
      NumberFortyNine,
      NumberFifty,
      NumberFiftyOne,
      NumberFiftyTwo,
      NumberFiftyThree,
      NumberFiftyFour,
      NumberFiftyFive,
      NumberFiftySix,
      NumberFiftySeven,
      NumberFiftyEight,
      NumberFiftyNine,
      NumberSixty,
      NumberSixtyOne,
      NumberSixtyTwo,
      NumberSixtyThree,
      NumberSixtyFour,
      NumberSixtyFive,
      NumberSixtySix,
      NumberSixtySeven,
      NumberSixtyEight,
      NumberSixtyNine,
      NumberSeventy,
      NumberSeventyOne,
      NumberSeventyTwo,
      NumberSeventyThree,
      NumberSeventyFour,
      NumberSeventyFive,
      NumberSeventySix,
      NumberSeventySeven,
      NumberSeventyEight,
      NumberSeventyNine,
      NumberEighty,
      NumberEightyOne,
      NumberEightyTwo,
      NumberEightyThree,
      NumberEightyFour,
      NumberEightyFive,
      NumberEightySix,
      NumberEightySeven,
      NumberEightyEight,
      NumberEightyNine,
      NumberNinety,
      NumberNinetyOne,
      NumberNinetyTwo,
      NumberNinetyThree,
      NumberNinettyFour,
      NumberNinetyFive,
      NumberNinetySix,
      NumberNinetySeven,
      NumberNinetyEight,
      NumberNinetyNine,
      NumberHundred,
    ];
    this.numbers = [];
    this.numberIndex = 0;
    this.enemies = [];
    this.maxCoins = 10000;
    this.collision = new Collision(this);
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.background.update();
    this.player.update(this.input.keys, deltaTime);

    this.collision.grabNumbers(this.player);
    this.collision.attackGrassMonster(this.player);
    this.collision.attackGroundEnemyNew(this.player);
    this.collision.attackFlyingEnemy(this.player);
    //handling numbers

    if (this.assetTimer > this.assestInterval) {
      this.addNumbers();
      this.assetTimer = 0;
    } else {
      this.assetTimer += deltaTime;
    }
    this.numbers.forEach((number) => {
      number.update(deltaTime);
      if (number.markedForDeletion) {
        this.numbers.splice(this.numbers.indexOf(number), 1);
      }
    });
    this.numbers = this.numbers.filter((number) => !number.markedForDeletion);
    // handling enemies
    if (this.assetTimer > this.assestInterval) {
      this.addEnemy();
      this.assetTimer = 0;
    } else {
      this.assetTimer += deltaTime;
    }
    this.enemies.forEach((enemy) => {
      enemy.update(deltaTime);
      if (enemy.markedForDeletion)
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
    });
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
  }
  draw(context) {
    this.background.draw(context);
    super.draw(context);
    this.player.draw(context);
    //drawing numbers
    this.numbers.forEach((number) => {
      number.draw(context);
    });
    this.enemies.forEach((enemy) => {
      enemy.draw(context);
    });
  }
  addNumbers() {
    if (
      this.numbers.length === 0 ||
      this.numbers[this.numbers.length - 1].x < this.width * 0.25
    ) {
      const newNumber = new this.numberType[this.numberIndex](this);
      this.numbers.push(newNumber);
      this.numberIndex = (this.numberIndex + 1) % this.numberType.length;
    }
  }
  addEnemy() {
    if (this.player.speed >= 0 && Math.random() > 0.8) {
      this.enemies.push(new GrassMonster(this));
    } else if (this.player.speed > 0 && Math.random() >= 0.9) {
      this.enemies.push(new GroundEnemy(this));
    } else if (this.player.speed >= 0 && Math.random() < 0.5) {
      this.enemies.push(new PurpleBug(this));
    }
  }
}
