import { RunningDust, JumpingDust } from "./particleeffects.js";
const states = {
  STANDING_RIGHT: 0,
  STANDING_LEFT: 1,
  RUNNING_RIGHT: 2,
  RUNNING_LEFT: 3,
  JUMPING_RIGHT: 4,
  JUMPING_LEFT: 5,
  FALLING_RIGHT: 6,
  FALLING_LEFT: 7,
  PUNCHING_RIGHT: 8,
  PUNCHING_LEFT: 9,
  HIT_RIGHT: 10,
  HIT_LEFT: 11,
};
const verticalHeight = -30;

class State {
  constructor(state, game) {
    this.state = state;
    this.game = game;
  }

  handleInput(input) {
    if (input.includes("q") || input.includes("doubleTap")) {
      this.game.player.setState(states.PUNCHING_LEFT);
    } else if (input.includes("e") || input.includes("doubleTap")) {
      this.game.player.setState(states.PUNCHING_RIGHT);
    }
  }
}

export class StandingRight extends State {
  constructor(game) {
    super(states.STANDING_RIGHT, game);
  }

  enter() {
    this.game.player.frameY = 11;
    this.game.player.maxFrame = 5;
    this.game.player.speed = 0;
    this.game.player.sounds["running"].pause();
  }

  handleInput(input) {
    super.handleInput(input);
    if (input.includes("d") || input.includes("ArrowRight")) {
      this.game.player.setState(states.RUNNING_RIGHT);
    } else if (input.includes("a") || input.includes("ArrowLeft")) {
      this.game.player.setState(states.RUNNING_LEFT);
    } else if (input.includes("w") || input.includes("ArrowUp")) {
      this.game.player.setState(states.JUMPING_RIGHT);
    }
  }
}

export class StandingLeft extends State {
  constructor(game) {
    super(states.STANDING_LEFT, game);
  }

  enter() {
    this.game.player.frameY = 10;
    this.game.player.maxFrame = 6;
    this.game.player.speed = 0;
    this.game.player.sounds["running"].pause();
  }

  handleInput(input) {
    super.handleInput(input);
    if (input.includes("d") || input.includes("ArrowRight")) {
      this.game.player.setState(states.RUNNING_RIGHT);
    } else if (input.includes("a") || input.includes("ArrowLeft")) {
      this.game.player.setState(states.RUNNING_LEFT);
    } else if (input.includes("w") || input.includes("ArrowUp")) {
      this.game.player.setState(states.JUMPING_LEFT);
    }
  }
}

export class RunningRight extends State {
  constructor(game) {
    super(states.RUNNING_RIGHT, game);
  }

  enter() {
    this.game.player.frameY = 9;
    this.game.player.maxFrame = 6;
    this.game.player.speed = this.game.player.maxSpeed;
    this.game.player.playSound("running");
  }

  handleInput(input) {
    super.handleInput(input);
    this.game.particles.unshift(
      new RunningDust(
        this.game,
        this.game.player.x + this.game.player.width * 0.5,
        this.game.player.y + this.game.player.height
      )
    );
    if (input.includes("w") || input.includes("ArrowUp")) {
      this.game.player.setState(states.JUMPING_RIGHT);
    }
    if (
      !input.includes("d") &&
      !input.includes("ArrowRight") &&
      !input.includes("swipeRight")
    ) {
      this.game.player.setState(states.STANDING_RIGHT);
    }
  }
}

export class RunningLeft extends State {
  constructor(game) {
    super(states.RUNNING_LEFT, game);
  }

  enter() {
    this.game.player.frameY = 8;
    this.game.player.maxFrame = 6;
    this.game.player.speed = -this.game.player.maxSpeed;
    this.game.player.playSound("running");
  }

  handleInput(input) {
    super.handleInput(input);
    this.game.particles.unshift(
      new RunningDust(
        this.game,
        this.game.player.x + this.game.player.width * 0.5,
        this.game.player.y + this.game.player.height
      )
    );
    if (input.includes("w") || input.includes("ArrowUp")) {
      this.game.player.setState(states.JUMPING_LEFT);
    }
    if (
      !input.includes("a") &&
      !input.includes("ArrowLeft") &&
      !input.includes("swipeLeft")
    ) {
      this.game.player.setState(states.STANDING_LEFT);
    }
  }
}

export class JumpingRight extends State {
  constructor(game) {
    super(states.JUMPING_RIGHT, game);
  }

  enter() {
    this.game.player.frameY = 5;
    this.game.player.maxFrame = 6;
    if (this.game.player.onGround()) {
      this.game.player.vy = verticalHeight; // Initiate jump with a negative vertical velocity
    }
    this.game.player.playSound("jumping");
  }

  handleInput(input) {
    super.handleInput(input);
    this.game.particles.unshift(
      new JumpingDust(
        this.game,
        this.game.player.x + this.game.player.width * 0.5,
        this.game.player.y + this.game.player.height
      )
    );
    if (this.game.player.vy > this.game.player.weight) {
      this.game.player.setState(states.FALLING_RIGHT);
    }
  }
}

export class JumpingLeft extends State {
  constructor(game) {
    super(states.JUMPING_LEFT, game);
  }

  enter() {
    this.game.player.frameY = 4;
    this.game.player.maxFrame = 6;
    if (this.game.player.onGround()) {
      this.game.player.vy = verticalHeight;
    }
    this.game.player.playSound("jumping");
  }

  handleInput(input) {
    super.handleInput(input);
    if (this.game.player.vy > this.game.player.weight) {
      this.game.player.setState(states.FALLING_LEFT);
    }
  }
}

export class FallingRight extends State {
  constructor(game) {
    super(states.FALLING_RIGHT, game);
  }

  enter() {
    this.game.player.frameY = 1;
    this.game.player.maxFrame = 6;
  }

  handleInput(input) {
    super.handleInput(input);
    if (this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING_RIGHT);
    }
  }
}

export class FallingLeft extends State {
  constructor(game) {
    super(states.FALLING_LEFT, game);
  }

  enter() {
    this.game.player.frameY = 0;
    this.game.player.maxFrame = 6;
  }

  handleInput(input) {
    super.handleInput(input);
    if (this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING_LEFT);
    }
  }
}

export class PunchingRight extends State {
  constructor(game) {
    super(states.PUNCHING_RIGHT, game);
  }

  enter() {
    this.game.player.frameY = 7;
    this.game.player.maxFrame = 6;
    this.game.player.speed = this.game.player.maxSpeed;
    this.game.player.playSound("punching");
  }

  handleInput(input) {
    super.handleInput(input);
    if (!input.includes("e")) {
      this.game.player.setState(states.STANDING_RIGHT);
    } else if (input.includes("w") || input.includes("ArrowUp")) {
      this.game.player.setState(states.JUMPING_RIGHT);
    } else if (input.includes("w") || input.includes("ArrowUp")) {
      this.game.player.setState(states.JUMPING_LEFT);
    }
  }
}

export class PunchingLeft extends State {
  constructor(game) {
    super(states.PUNCHING_LEFT, game);
  }

  enter() {
    this.game.player.frameY = 6;
    this.game.player.maxFrame = 6;
    this.game.player.speed = this.game.player.maxSpeed; // Stop movement during punch
    this.game.player.playSound("punching");
  }

  handleInput(input) {
    super.handleInput(input);
    if (!input.includes("q")) {
      this.game.player.setState(states.STANDING_LEFT);
    }
  }
}
export class HitRight extends State {
  constructor(game) {
    super(states.HIT_RIGHT, game);
  }
  enter() {
    this.game.player.frameX = 0;
    this.game.player.frameY = 3;
    this.game.player.maxFrame = 6;
    this.game.player.speed = this.game.player.maxSpeed;
    this.game.player.playSound("hit");
  }
  handleInput(input) {
    if (this.game.player.frameX >= 6 && this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING_RIGHT);
    } else if (this.game.player.frameX >= 6 && !this.game.player.onGround()) {
      this.game.player.setState(states.FALLING_RIGHT);
    }
  }
}
export class HitLeft extends State {
  constructor(game) {
    super(states.HIT_LEFT, game);
  }
  enter() {
    this.game.player.frameX = 0;
    this.game.player.frameY = 2;
    this.game.player.maxFrame = 6;
    this.game.player.speed = this.game.player.maxSpeed;
    this.game.player.playSound("hit");
  }
  handleInput(input) {
    if (this.game.player.frameX >= 6 && this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING_LEFT);
    } else if (this.game.player.frameX >= 6 && !this.game.player.onGround()) {
      this.game.player.setState(states.FALLING_LEFT);
    }
  }
}
