class Particle {
  constructor(game) {
    this.game = game;
    this.markedForDeletion = false;
  }
  update() {
    this.x -= this.speedX + this.game.speed;
    this.y -= this.speedY;
    this.size *= 0.9;
    if (this.size < 0.5) {
      this.markedForDeletion = true;
    }
  }
}

export class RunningDust extends Particle {
  constructor(game, x, y) {
    super(game);
    this.size = Math.random() * 15 + 15;
    this.x = x;
    this.y = y;
    this.speedX = Math.random();
    this.speedY = Math.random();
    this.color = "rgba(89,104,105,.2)" /*"rgba(64,67,78,.2)"*/;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 4);
    context.fillStyle = this.color;
    context.fill();
  }
}
export class JumpingDust extends Particle {
  constructor(game, x, y) {
    super(game);
    this.size = Math.random() * 5 + 5;
    this.x = x;
    this.y = y;
    this.speedX = Math.random();
    this.speedY = Math.random();
    this.color = "rgba(89,104,105,.6)";
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 8);
    context.fillStyle = this.color;
    context.fill();
  }
}
