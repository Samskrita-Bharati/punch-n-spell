import { Collision } from "./collisioncheck.js";
import {
  StandingRight,
  StandingLeft,
  RunningRight,
  RunningLeft,
  JumpingRight,
  JumpingLeft,
  FallingRight,
  FallingLeft,
  PunchingRight,
  PunchingLeft,
  HitRight,
  HitLeft,
} from "./playerstatemgmt.js";

class Player {
  constructor(game) {
    this.game = game;
    this.image = null;
    this.width = 0;
    this.height = 0;
    this.frameY = 0;
    this.vy = 0;
    this.weight = 1;
    this.speed = 1;
    this.maxSpeed = 5;
    this.maxFrame = 0;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.collision = new Collision(this.game);

    this.sounds = {
      running: document.getElementById("runningAudio"),
      jumping: document.getElementById("jumpingAudio"),
      falling: document.getElementById("fallingAudio"),
      punching: document.getElementById("punchingAudio"),
      hit: document.getElementById("hitAudio"),
    };
  }
  update(deltaTime) {
    this.collision.grabLives(this);

    // player Animation
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }
    } else {
      this.frameTimer += deltaTime;
    }
  }
  draw(context) {
    /*if (this.game.debug) {
      context.lineWidth = 5;
      context.strokeStyle = "blue";
      // drawing a crice for debugging purposes
      context.beginPath();
      context.arc(
        this.x + (this.width * 3.5) / 5 + 10,
        this.y + (this.height * 1) / 2 + 13,
        this.width / 8,
        0,
        Math.PI * 2
      );
      context.stroke();
      context.closePath();
      // draw bounding rectangle for debugging
      context.strokeRect(this.x, this.y, this.width, this.height);
    }*/
    // drawing the actual image of the player
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  playSound(type) {
    if (this.sounds[type]) {
      const sound = this.sounds[type];

      // Reset sound to the beginning if it's already playing
      sound.currentTime = 0;

      // Play with error handling
      sound.play().catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Audio play error:", err);
        }
      });
    }
  }
}
export class GamePlayer extends Player {
  constructor(game) {
    super(game);
    this.image = document.getElementById("playerImage1");
    this.width = 76;
    this.height = 105;
    this.x = 10;
    this.y = this.game.height - this.height - this.game.background.groundHeight;
    this.states = [
      new StandingRight(this.game),
      new StandingLeft(this.game),
      new RunningRight(this.game),
      new RunningLeft(this.game),
      new JumpingRight(this.game),
      new JumpingLeft(this.game),
      new FallingRight(this.game),
      new FallingLeft(this.game),
      new PunchingRight(this.game),
      new PunchingLeft(this.game),
      new HitRight(this.game),
      new HitLeft(this.game),
    ];
    this.currentState = null;
  }
  update(input, deltaTime) {
    super.update(deltaTime);
    this.currentState.handleInput(input);
    if (
      input.includes("d") ||
      input.includes("ArrowRight") ||
      input.includes("swipeRight")
    ) {
      this.speed = this.maxSpeed;
    } else if (
      input.includes("a") ||
      input.includes("ArrowLeft") ||
      input.includes("swipeLeft")
    ) {
      this.speed = -this.maxSpeed;
    } else {
      this.speed = 0;
    }
    this.x += this.speed;
    // Stopping the character from exiting out from the frame
    if (this.x < 0) {
      this.x = 0;
    }
    //horizontal movement
    if (this.x > this.game.width - this.width) {
      this.x = this.game.width - this.width;
    }
    // vertical movement
    this.y += this.vy;
    if (!this.onGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }
    //vertical boundaries
    if (
      this.y >
      this.game.height - this.height - this.game.background.groundHeight
    ) {
      this.y =
        this.game.height - this.height - this.game.background.groundHeight;
    }
    // stopping the character form moving above the frame height
    if (this.y < 0) {
      this.y = 0;
      this.vy = 0;
    }
  }
  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }
  onGround() {
    return (
      this.y >=
      this.game.height - this.height - this.game.background.groundHeight
    );
  }
}
