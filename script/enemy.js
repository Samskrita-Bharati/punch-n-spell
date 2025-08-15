class Enemy {
  constructor(game) {
    this.game = game;
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 60;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.markedForDeletion = false;
  }
  update(deltaTime) {
    //movement
    this.x -= this.speedX + this.game.speed;
    this.y += this.speedY;
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
    // checking if off screen
    if (this.x + this.width < 0) {
      this.markedForDeletion = true;
    }
  }
  draw(context) {
    /*if (this.game.debug) {
      context.strokeStyle = "red";
      context.strokeRect(this.x, this.y, this.width, this.height);
    }*/
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export class GhostEnemy extends Enemy {
  constructor(game) {
    super(game);
    this.width = 92;
    this.height = 106;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = this.game.height * 0.6;
    this.speedX = Math.random() * 2.5 + 2.5;
    this.speedY = 0;
    this.maxFrame = 10;
    this.image = document.getElementById("flyingGhost");
    this.angle = 0;
    this.velocityAngle = Math.random() * 15 + 15;
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
  draw(context) {
    context.save();
    context.globalAlpha = 0.2;
    super.draw(context);
    context.restore();
  }
}
export class BatEnemy extends Enemy {
  constructor(game) {
    super(game);
    this.width = 84;
    this.height = 84;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = Math.random() * this.game.height * 0.5;
    this.speedX = Math.random() + 2 * 2;
    this.speedY = 0;
    this.maxFrame = 10;
    this.image = document.getElementById("flyingBats");
    this.angle = 0;
    this.velocityAngle = Math.random() * 10 + 15;
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class GroundEnemy extends Enemy {
  constructor(game) {
    super(game);
    this.width = 102;
    this.height = 127;
    //this.x = Math.random() * (this.game.width - this.width);
    this.x = this.game.width;
    this.y = this.game.height - this.height - this.game.background.groundHeight;
    this.image = document.getElementById("groundEnemy");
    this.speedX = 1;
    this.speedY = 0;
    this.maxFrame = 36;
  }
  draw(context) {
    /*if (this.game.debug) {
      //rectangle to adjust to the moutn
      context.strokeStyle = "red";
      context.strokeRect(
        this.x + 10,
        this.y + 10,
        this.width - 40,
        this.height - 50
      );
      //rectangle adjusted to whole
      context.strokeStyle = "brown";
      context.strokeRect(this.x + 10, this.y + 10, this.width, this.height);

      //circle adjusted to mouth
      context.lineWidth = 5;
      context.strokeStyle = "blue";
      //drawing a crice for debugging purposes
      context.beginPath();
      context.arc(
        this.x + 42,
        this.y + 50,
        this.width / 2.55,
        this.height,
        Math.PI * 2
      );
      context.stroke();
      context.closePath();
    }*/

    // Draw the enemy image
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
export class GrumpyBee extends Enemy {
  constructor(game) {
    super(game);
    this.width = 92;
    this.height = 69;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = Math.random() * this.game.height * 0.5;
    this.speedX = Math.random() + 2.5 * 2;
    this.speedY = 0;
    this.maxFrame = 5;
    this.image = document.getElementById("grumpyBee");
    this.angle = 0;
    this.velocityAngle = Math.random() * 10 + 15;
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class PurpleBug extends Enemy {
  constructor(game) {
    super(game);
    this.width = 92;
    this.height = 70;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = Math.random() * this.game.height * 0.5;
    this.speedX = Math.random() * 5 + 2;
    this.speedY = 0;
    this.maxFrame = 14;
    this.image = document.getElementById("purpleBug");
    this.angle = 0;
    this.velocityAngle = Math.random() * 10 + 15;
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}

export class GrassMonster extends Enemy {
  constructor(game) {
    super(game);
    this.width = 128;
    this.height = 110;
    this.x = this.game.width - this.width;
    this.y = this.game.height - this.height - this.game.background.groundHeight;
    this.image = document.getElementById("grassMonster");
    this.speedX = 1;
    this.speedY = 0;
    this.maxFrame = 12;
  }
  draw(context) {
    /*if (this.game.debug) {
      //rectangle to adjust to the moutn
      context.strokeStyle = "red";
      context.strokeRect(
        this.x + 10,
        this.y + 10,
        this.width - 25,
        this.height - 20
      );
    }*/
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
