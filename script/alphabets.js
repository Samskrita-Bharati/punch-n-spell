class Alphabets {
  constructor(game) {
    this.game = game;
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.markedForDeletion = false;
    this.sound = null;
    this.width = 122;
    this.height = 122;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = Math.random() * this.game.height * 0.6;
    this.speedX = Math.random() + 2.5 + 2.5;
    this.speedY = 0;
    this.angle = 0;
    this.velocityAngle = Math.random() * 0.5 + 0.5;
  }
  playSound() {
    if (this.sound) {
      this.sound.play();
    }
  }
  update(deltaTime) {
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
    if (this.x + this.width < 0) {
      this.markedForDeletion = true;
      this.game.gameOver = true;
    }

    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
  draw(context) {
    /*if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
    /** collison detection for second set alphabets
     * if (this.game.debug) {
      context.strokeRect(
        this.x + 30,
        this.y + 30,
        this.width - 60,
        this.height - 60
      );
    }
     */
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

export class AlphabetOne extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 82;
    this.height = 82;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetOne");
    this.sound = document.getElementById("alphabetOneAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwo extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 97;
    this.height = 82;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetTwo");
    this.sound = document.getElementById("alphabetTwoAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThree extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 81;
    this.height = 86;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetThree");
    this.sound = document.getElementById("alphabetThreeAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFour extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 66;
    this.height = 97;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetFour");
    this.sound = document.getElementById("alphabetFourAudio");
    this.angle = 0;
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFive extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 82;
    this.height = 82;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetFive");
    this.sound = document.getElementById("alphabetFiveAudio");
    this.angle = 0;
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetSix extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 97;
    this.height = 82;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetSix");
    this.sound = document.getElementById("alphabetSixAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetSeven extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 86;
    this.height = 86;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetSeven");
    this.sound = document.getElementById("alphabetSevenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetEight extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 82;
    this.height = 102;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetEight");
    this.sound = document.getElementById("alphabetEightAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetNine extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 102;
    this.height = 98;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetNine");
    this.sound = document.getElementById("alphabetNineAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTen extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 102;
    this.height = 102;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetTen");
    this.sound = document.getElementById("alphabetTenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetEleven extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 101;
    this.height = 81;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetEleven");
    this.sound = document.getElementById("alphabetElevenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwelve extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 101;
    this.height = 91;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetTwelve");
    this.sound = document.getElementById("alphabetTwelveAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirteen extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 96;
    this.height = 91;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetThirteen");
    this.sound = document.getElementById("alphabetThirteenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFourteen extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 92;
    this.height = 102;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetFourteen");
    this.sound = document.getElementById("alphabetFourteenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFifteen extends Alphabets {
  constructor(game) {
    super(game);

    this.width = 107;
    this.height = 92;
    this.maxFrame = 2;
    this.image = document.getElementById("alphabetFifteen");
    this.sound = document.getElementById("alphabetFifteenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetSixteen extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetSixteen");
    this.sound = document.getElementById("alphabetSixteenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetSeventeen extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetSeventeen");
    this.sound = document.getElementById("alphabetSeventeenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetEighteen extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetEighteen");
    this.sound = document.getElementById("alphabetEighteenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetNineteen extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetNineteen");
    this.sound = document.getElementById("alphabetNineteenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwenty extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwenty");
    this.sound = document.getElementById("alphabetTwentyAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwentyOne extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwentyOne");
    this.sound = document.getElementById("alphabetTwentyOneAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwentyTwo extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwentyTwo");
    this.sound = document.getElementById("alphabetTwentyTwoAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwentyThree extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwentyThree");
    this.sound = document.getElementById("alphabetTwentyThreeAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwentyFour extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwentyFour");
    this.sound = document.getElementById("alphabetTwentyFourAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwentyFive extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwentyFive");
    this.sound = document.getElementById("alphabetTwentyFiveAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwentySix extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwentySix");
    this.sound = document.getElementById("alphabetTwentySixAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwentySeven extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwentySeven");
    this.sound = document.getElementById("alphabetTwentySevenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwentyEight extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwentyEight");
    this.sound = document.getElementById("alphabetTwentyEightAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetTwentyNine extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetTwentyNine");
    this.sound = document.getElementById("alphabetTwentyNineAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirty extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirty");
    this.sound = document.getElementById("alphabetThirtyAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirtyOne extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirtyOne");
    this.sound = document.getElementById("alphabetThirtyOneAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirtyTwo extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirtyTwo");
    this.sound = document.getElementById("alphabetThirtyTwoAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirtyThree extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirtyThree");
    this.sound = document.getElementById("alphabetThirtyThreeAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirtyFour extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirtyFour");
    this.sound = document.getElementById("alphabetThirtyFourAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirtyFive extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirtyFive");
    this.sound = document.getElementById("alphabetThirtyFiveAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirtySix extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirtySix");
    this.sound = document.getElementById("alphabetThirtySixAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirtySeven extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirtySeven");
    this.sound = document.getElementById("alphabetThirtySevenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirtyEight extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirtyEight");
    this.sound = document.getElementById("alphabetThirtyEightAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetThirtyNine extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetThirtyNine");
    this.sound = document.getElementById("alphabetThirtyNineAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetForty extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetForty");
    this.sound = document.getElementById("alphabetFortyAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFortyOne extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetFortyOne");
    this.sound = document.getElementById("alphabetFortyOneAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFortyTwo extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetFortyTwo");
    this.sound = document.getElementById("alphabetFortyTwoAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFortyThree extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetFortyThree");
    this.sound = document.getElementById("alphabetFortyThreeAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFortyFour extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetFortyFour");
    this.sound = document.getElementById("alphabetFortyFourAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFortyFive extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetFortyFive");
    this.sound = document.getElementById("alphabetFortyFiveAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFortySix extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetFortySix");
    this.sound = document.getElementById("alphabetFortySixAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFortySeven extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetFortySeven");
    this.sound = document.getElementById("alphabetFortySevenAudio");
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
}
export class AlphabetFortyEight extends Alphabets {
  constructor(game) {
    super(game);
    this.maxFrame = 7;
    this.image = document.getElementById("alphabetFortyEight");
    this.sound = document.getElementById("alphabetFortyEightAudio");
  }
}
