class CollisionAnimation {
  constructor(game, x, y) {
    this.game = game;
    this.image = null;
    this.spriteWidth = null;
    this.spriteHeight = null;
    this.sizeModifier = null;
    this.width = null;
    this.height = null;
    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
    this.markedForDeletion = false;
    this.fps = Math.random() * 10 + 5;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.frameX = 0;
    this.maxFrame = 0;
    this.sounds = {
      boom: document.getElementById("boomAudio"),
      rustling: document.getElementById("rustling"),
    };
  }
  draw(context) {
    if (this.image) {
      context.drawImage(
        this.image,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }
  update(deltaTime) {
    if (this.game) {
      this.x -= this.game.speed;
      if (this.frameTimer > this.frameInterval) {
        this.frameX++;
        this.frameTimer = 0;
      } else {
        this.frameTimer += deltaTime;
      }
      if (this.frameX >= this.maxFrame) {
        this.markedForDeletion = true;
      }
    }
  }

  playSound(type) {
    if (this.sounds[type]) {
      this.sounds[type].play();
    }
  }
}

export class BoomAnimation extends CollisionAnimation {
  constructor(game, x, y) {
    super(game, x, y);
    this.image = document.getElementById("boom");
    this.spriteWidth = 100;
    this.spriteHeight = 90;
    this.sizeModifier = Math.random() + 0.5;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;
    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
    this.frameX = 0;
    this.maxFrame = 4;
  }
}
export class FireAnimation extends CollisionAnimation {
  constructor(game, x, y) {
    super(game, x, y);
    this.image = document.getElementById("fireCollision");
    this.spriteWidth = 100;
    this.spriteHeight = 100;

    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
    this.frameX = 0;
    this.maxFrame = 9;
  }
}
export class SquishingAnimation extends CollisionAnimation {
  constructor(game, x, y) {
    super(game, x, y);
    this.image = document.getElementById("squishingGroundEnemyCollision");
    this.spriteWidth = 96;
    this.spriteHeight = 96;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
    this.frameX = 0;
    this.maxFrame = 12;
  }
}
