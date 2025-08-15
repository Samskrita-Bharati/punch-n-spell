export class Lifes {
  constructor(game) {
    this.game = game;
    this.image = document.getElementById("heart");
    this.width = 65;
    this.height = 65;
    this.x = this.game.width + Math.random() * this.game.width * 0.69;
    this.y = Math.random() * this.game.height * 0.69;
    this.speedX = Math.random() + 2 + 2;
    this.speedY = 2;
    this.angle = 0;
    this.velocityAngle = Math.random() * 0.05 + 0.05;
    this.markedForDeletion = false;
    this.fps = 30;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
  }
  update(deltaTime) {
    this.x -= this.speedX + this.game.speed;
    this.speedY += this.speedY;
    this.angle += this.velocityAngle;
    this.y += Math.cos(this.angle);
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
    if (this.x + this.width < 0) {
      this.markedForDeletion = true;
    }
  }
  draw(context) {
    if (this.game.debug) {
      context.strokeStyle = "red";
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
