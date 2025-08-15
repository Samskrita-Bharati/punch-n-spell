import {
  BatEnemy,
  GhostEnemy,
  GrassMonster,
  GroundEnemy,
  GrumpyBee,
  PurpleBug,
} from "./enemy.js";
import { FloatingMessages } from "./floatingmessages.js";
import {
  BoomAnimation,
  FireAnimation,
  SquishingAnimation,
} from "./collisionanimation.js";
export class Collision {
  constructor(game) {
    this.game = game;
  }
  checkCollision(object1, object2) {
    return (
      object1.x < object2.x + object2.width &&
      object1.x + object1.width > object2.x &&
      object1.y < object2.y + object2.height &&
      object1.y + object1.height > object2.y
    );
  }
  newCheckCollision(object1, object2) {
    return (
      object1.x < object2.x + 30 + object2.width - 60 && // Right edge of object1
      object1.x + object1.width > object2.x + 30 && // Left edge of object1
      object1.y < object2.y + 30 + object2.height - 60 && // Bottom edge of object1
      object1.y + object1.height > object2.y + 30 // Top edge of object1
    );
  }
  checkCollisionNumbers(object1, object2) {
    return (
      object1.x < object2.x + 30 + object2.width - 60 &&
      object1.x + object1.width > object2.x + 30 &&
      object1.y < object2.y + 40 + object2.height - 80 &&
      object2.y + object2.height > object2.y + 40
    );
  }
  circleCollisionGroundEnemyFace(object1, object2) {
    // Object 1 properties
    const object1CenterX = object1.x + (object1.width * 3.5) / 5 + 10;
    const object1CenterY = object1.y + (object1.height * 1) / 2 + 13;
    const object1Radius = object1.width / 8;

    // Object 2 properties
    const object2CenterX = object2.x + 42; // Center X for object 2
    const object2CenterY = object2.y + 50; // Center Y for object 2
    const object2Radius = object2.width / 2.55; // Radius for object 2

    // Calculate the distance between the centers
    const distanceX = object1CenterX - object2CenterX;
    const distanceY = object1CenterY - object2CenterY;
    const distanceSquared = distanceX * distanceX + distanceY * distanceY; // Use squared distance to avoid sqrt for efficiency

    // Calculate the sum of the radii
    const radiusSum = object1Radius + object2Radius;

    // Check for collision
    return distanceSquared < radiusSum * radiusSum; // Collision occurs if the distance is less than the sum of the radii
  }
  rectangleCollisionGroundEnemyFace(object1, object2) {
    return (
      object1.x < object2.x + 10 + object2.width - 40 &&
      object1.x + object1.width - 40 > object2.x + 10 &&
      object1.y < object2.y + 10 + object2.height - 50 &&
      object1.y + object1.height > object2.y + 10
    );
  }
  collisionCheckGroundEnemyWhole(object1, object2) {
    return (
      object1.x < object2.x + 10 + object2.width &&
      object1.x + object1.width > object2.x + 10 &&
      object1.y < object2.y + 10 + object2.height &&
      object1.y + object1.height > object2.y + 10
    );
  }
  collisionCheckGrassMonster(object1, object2) {
    return (
      object1.x < object2.x + object2.width - 25 && // Correct collision logic for left side
      object1.x + object1.width - 25 > object2.x + 10 && // Correct collision logic for right side
      object1.y < object2.y + object2.height - 20 && // Correct collision logic for top side
      object1.y + object1.height > object2.y + 10 // Correct collision logic for bottom side
    );
  }
  attackGrassMonster(object) {
    this.game.enemies.forEach((enemy) => {
      if (enemy instanceof GrassMonster) {
        const collisionDetected = this.collisionCheckGrassMonster(
          object,
          enemy
        );
        const playerState = this.game.player.currentState;

        // Handle collision when the player is on the ground
        if (this.game.player.onGround() && collisionDetected) {
          if (
            playerState === this.game.player.states[8] ||
            playerState === this.game.player.states[9]
          ) {
            // Successful attack
            enemy.markedForDeletion = true;

            // Calculate animation coordinates
            const centerX = enemy.x + enemy.width * 0.5;
            const centerY = enemy.y + enemy.height * 0.5;

            // Create collision animation
            const groundCollisionAnimation = new FireAnimation(
              this.game,
              centerX,
              centerY
            );
            this.game.collisions.push(groundCollisionAnimation);
            groundCollisionAnimation.playSound("boom");

            // Update score and add floating message
            this.game.score += 100;
            this.game.floatingMessages.push(
              new FloatingMessages("+100", centerX, centerY, 50, 25)
            );
          } else if (
            playerState === this.game.player.states[0] ||
            playerState === this.game.player.states[2]
          ) {
            // Player hit by GrassMonster
            this.game.player.setState(10); // Example: Set to "HIT" state
            this.game.score -= 50;
            this.game.lives-0.25;

            const centerX = enemy.x + enemy.width * 0.5;
            const centerY = enemy.y + enemy.height * 0.5;

            // Add negative score floating message
            this.game.floatingMessages.push(
              new FloatingMessages("-50", centerX, centerY, 50, 25)
            );
          }
        }

        // Handle collision when the player is in the air
        if (!this.game.player.onGround() && collisionDetected) {
          if (
            playerState === this.game.player.states[4] ||
            playerState === this.game.player.states[5]
          ) {
            this.game.player.setState(10); // Example: Set to "HIT_AIR" state
          } else if (
            playerState === this.game.player.states[6] ||
            playerState === this.game.player.states[7]
          ) {
            // Successful mid-air attack
            enemy.markedForDeletion = true;

            // Calculate animation coordinates
            const centerX = enemy.x + enemy.width * 0.5;
            const centerY = enemy.y + enemy.height * 0.5;

            // Create collision animation
            const airCollisionAnimation = new FireAnimation(
              this.game,
              centerX,
              centerY
            );
            this.game.collisions.push(airCollisionAnimation);
            airCollisionAnimation.playSound("boom");

            // Update score and add floating message
            this.game.score += 100;
            this.game.floatingMessages.push(
              new FloatingMessages("+100", centerX, centerY, 50, 25)
            );
          }
        }
      }
    });
  }

  attackGroundEnemyNew(object) {
    this.game.enemies.forEach((enemy) => {
      if (
        enemy instanceof GroundEnemy &&
        this.circleCollisionGroundEnemyFace(object, enemy)
      ) {
        if (
          this.game.player.onGround() &&
          this.game.player.currentState === this.game.player.states[8]
        ) {
          enemy.markedForDeletion = true;
          const radius = enemy.width / 2.55;
          const centerX = enemy.x + 42 + radius;
          const centerY = enemy.y + 50 + radius;
          const groundCollisionAnimation = new FireAnimation(
            this.game,
            centerX,
            centerY
          );
          this.game.collisions.push(groundCollisionAnimation);
          groundCollisionAnimation.playSound("boom");
          this.game.score += 100;
          this.game.floatingMessages.push(
            new FloatingMessages(
              "+50",
              enemy.x + enemy.width * 0.5,
              enemy.y + enemy.height * 0.5,
              50,
              25
            )
          );
        }
      }
      if (
        enemy instanceof GroundEnemy &&
        this.rectangleCollisionGroundEnemyFace(object, enemy)
      ) {
        if (
          (!this.game.player.onGround() &&
            this.game.player.currentState === this.game.player.states[6]) ||
          this.game.player.currentState === this.game.player.states[7]
        ) {
          enemy.markedForDeletion = true;
          const squishingCenterX = enemy.x + 10 + (enemy.width - 40) * 0.5;
          const squishingCenterY = enemy.y + 10 + (enemy.height - 50) * 0.5;
          const squishingCollisionAnimation = new SquishingAnimation(
            this.game,
            squishingCenterX,
            squishingCenterY
          );
          this.game.collisions.push(squishingCollisionAnimation);
          squishingCollisionAnimation.playSound("boom");

          this.game.score += 100;
          this.game.floatingMessages.push(
            new FloatingMessages(
              "+50",
              enemy.x + enemy.width * 0.5,
              enemy.y + enemy.height * 0.5,
              50,
              25
            )
          );
        }
      }
      if (
        enemy instanceof GroundEnemy &&
        this.collisionCheckGroundEnemyWhole(object, enemy) &&
        this.rectangleCollisionGroundEnemyFace(object, enemy) &&
        this.circleCollisionGroundEnemyFace(object, enemy)
      ) {
        if (
          (this.game.player.onGround() &&
            this.game.player.currentState === this.game.player.states[8] &&
            this.game.player.currentState === this.game.player.states[0]) ||
          this.game.player.currentState === this.game.player.states[2]
        ) {
          this.game.player.setState(10);
        } else if (
          (this.game.player.onGround() &&
            this.game.player.currentState === this.game.player.states[1]) ||
          this.game.player.currentState === this.game.player.states[3]
        ) {
          this.game.player.setState(11);
        } else if (
          !this.game.player.onGround() &&
          this.game.player.currentState === this.game.player.states[4]
        ) {
          this.game.player.setState(10);
          this.game.player.vy = 0;
        } else if (
          !this.game.player.onGround() &&
          this.game.player.currentState === this.game.player.states[5]
        ) {
          this.game.player.setState(11);
          this.game.player.vy = 0;
        }
        this.game.score -= 20;
        this.game.lives-1;
      }
    });
  }
  newGrabAlphabets(object) {
    this.game.secondSetAlphabets.forEach((alphabet) => {
      if (this.newCheckCollision(object, alphabet)) {
        alphabet.markedForDeletion = true;
        this.game.collisions.push(
          new BoomAnimation(
            this.game,
            alphabet.x + alphabet.width * 0.5,
            alphabet.y + alphabet.height * 0.5
          )
        );
        this.game.coins += 100;
        this.game.floatingMessages.push(
          new FloatingMessages(
            "+100",
            alphabet.x + alphabet.width * 0.5,
            alphabet.y + alphabet.height * 0.5,
            50,
            58
          )
        );
        alphabet.playSound();
      }
    });
  }

  grabLives(object) {
    this.game.lifeArray.forEach((life) => {
      if (this.checkCollision(object, life)) {
        life.markedForDeletion = true;
        if (this.game.lives < this.game.maxLives) {
          this.game.lives++;
        } else {
          this.game.lives === this.game.maxLives;
        }
      }
    });
  }
  grabAlphabets(object) {
    this.game.firstSetAlphabets.forEach((alphabet) => {
      if (this.checkCollision(object, alphabet)) {
        alphabet.markedForDeletion = true;
        this.game.collisions.push(
          new BoomAnimation(
            this.game,
            alphabet.x + alphabet.width * 0.5,
            alphabet.y + alphabet.height * 0.5
          )
        );
        this.game.coins += 100;
        this.game.floatingMessages.push(
          new FloatingMessages(
            "+100",
            alphabet.x + alphabet.width * 0.5,
            alphabet.y + alphabet.height * 0.5,
            50,
            58
          )
        );
        alphabet.playSound();
      }
    });
  }
  grabNumbers(object) {
    this.game.numbers.forEach((number) => {
      if (this.checkCollisionNumbers(object, number)) {
        number.markedForDeletion = true;
        this.game.collisions.push(
          new BoomAnimation(
            this.game,
            number.x + number.width * 0.5,
            number.y + number.height * 0.5
          )
        );
        this.game.coins += 100;
        this.game.floatingMessages.push(
          new FloatingMessages(
            "+100",
            number.x + number.width * 0.5,
            number.y + number.height * 0.5,
            50,
            58
          )
        );

        number.playSound();
      }
    });
  }

  attackGhost(object) {
    this.game.enemies.forEach((enemy) => {
      if (enemy instanceof GhostEnemy && this.checkCollision(object, enemy)) {
        if (
          this.game.player.currentState === this.game.player.states[6] ||
          this.game.player.currentState === this.game.player.states[7]
        ) {
          enemy.markedForDeletion = true;
          const ghostCollisonAnimation = new BoomAnimation(
            this.game,
            enemy.x + enemy.width * 0.5,
            enemy.y + enemy.height * 0.5
          );
          this.game.collisions.push(ghostCollisonAnimation);
          ghostCollisonAnimation.playSound("rustling");
          this.game.score += 10;
          this.game.floatingMessages.push(
            new FloatingMessages(
              "+10",
              enemy.x + enemy.width * 0.5,
              enemy.y + enemy.height * 0.5,
              50,
              25
            )
          );
        }
      }
    });
  }
  attackFlyingEnemy(object) {
    this.game.enemies.forEach((enemy) => {
      if (
        (enemy instanceof BatEnemy && this.checkCollision(object, enemy)) ||
        (enemy instanceof GrumpyBee && this.checkCollision(object, enemy)) ||
        (enemy instanceof PurpleBug && this.checkCollision(object, enemy))
      ) {
        if (
          this.game.player.currentState === this.game.player.states[8] ||
          this.game.player.currentState === this.game.player.states[9] ||
          this.game.player.currentState === this.game.player.states[4] ||
          this.game.player.currentState === this.game.player.states[5]
        ) {
          enemy.markedForDeletion = true;
          const flyingEnemyCollisionAnimatin = new BoomAnimation(
            this.game,
            enemy.x + enemy.width * 0.5,
            enemy.y + enemy.height * 0.5
          );
          this.game.collisions.push(flyingEnemyCollisionAnimatin);
          flyingEnemyCollisionAnimatin.playSound("boom");

          this.game.score += 20;
          this.game.floatingMessages.push(
            new FloatingMessages(
              "+20",
              enemy.x + enemy.width * 0.5,
              enemy.y + enemy.height * 0.5,
              50,
              25
            )
          );
        } else {
          if (this.game.player.currentState === this.game.player.states[6]) {
            this.game.player.setState(10);
            this.game.player.vy = 0;
          } else if (
            this.game.player.currentState === this.game.player.states[7]
          ) {
            this.game.player.setState(11);
            this.game.player.vy = 0;
          } else if (
            this.game.player.onGround() &&
            this.game.player.currentState === this.game.player.states[0]
          ) {
            this.game.player.setState(10);
          } else if (
            this.game.player.onGround() &&
            this.game.player.currentState === this.game.player.states[1]
          ) {
            this.game.player.setState(11);
          }
          this.game.player.y =
            this.game.height -
            this.game.player.height -
            this.game.background.groundHeight;

          this.game.score -= 5;
          this.game.lives-1;
        }
      }
    });
  }
}
