class Numbers {
  constructor(game) {
    this.game = game;
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.markedForDeletion = false;
    this.sound = null;
    this.width = 131;
    this.height = 131;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = Math.random() * this.game.height * 0.5;
    this.speedX = Math.random() * 2.5 + 2.5;
    this.speedY = 0;
    this.angle = 0;
    this.velocityAngle = Math.random() * 0.5 + 0.5;
  }
  playSound() {
    if (this.sound) {
      this.sound.play();
    }
  }
  update(delataTime) {
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
      this.frameTimer += delataTime;
    }

    if (this.x + this.width < 0) {
      this.markedForDeletion = true;
      this.game.gameOver = true;
    }
    this.angle += this.velocityAngle;
    this.y += Math.sin(this.angle);
  }
  draw(context) {
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
    if (this.game.debug) {
      context.strokeStyle = "red";
      context.strokeRect(
        this.x + 30,
        this.y + 40,
        this.width - 60,
        this.height - 80
      );
    }
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

export class NumberOne extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberOne");
    this.sound = document.getElementById("numberOneAudio");
    this.angle = 0;
  }
}
export class NumberTwo extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwo");
    this.sound = document.getElementById("numberTwoAudio");
    this.angle = 0;
  }
}
export class NumberThree extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThree");
    this.sound = document.getElementById("numberThreeAudio");
    this.angle = 0;
  }
}
export class NumberFour extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFour");
    this.sound = document.getElementById("numberFourAudio");
    this.angle = 0;
  }
}
export class NumberFive extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFive");
    this.sound = document.getElementById("numberFiveAudio");
    this.angle = 0;
  }
}
export class NumberSix extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSix");
    this.sound = document.getElementById("numberSixAudio");
    this.angle = 0;
  }
}
export class NumberSeven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeven");
    this.sound = document.getElementById("numberSevenAudio");
    this.angle = 0;
  }
}
export class NumberEight extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEight");
    this.sound = document.getElementById("numberEightAudio");
    this.angle = 0;
  }
}
export class NumberNine extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNine");
    this.sound = document.getElementById("numberNineAudio");
    this.angle = 0;
  }
}
export class NumberTen extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTen");
    this.sound = document.getElementById("numberTenAudio");
    this.angle = 0;
  }
}
export class NumberEleven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEleven");
    this.sound = document.getElementById("numberElevenAudio");
    this.angle = 0;
  }
}
export class NumberTwelve extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwelve");
    this.sound = document.getElementById("numberTwelveAudio");
    this.angle = 0;
  }
}
export class NumberThirteen extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirteen");
    this.sound = document.getElementById("numberThirteenAudio");
    this.angle = 0;
  }
}
export class NumberFourteen extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFourteen");
    this.sound = document.getElementById("numberFourteenAudio");
    this.angle = 0;
  }
}
export class NumberFifteen extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFifteen");
    this.sound = document.getElementById("numberFifteenAudio");
    this.angle = 0;
  }
}
export class NumberSixteen extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixteen");
    this.sound = document.getElementById("numberSixteenAudio");
    this.angle = 0;
  }
}
export class NumberSeventeen extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventeen");
    this.sound = document.getElementById("numberSeventeenAudio");
    this.angle = 0;
  }
}
export class NumberEighteen extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEighteen");
    this.sound = document.getElementById("numberEighteenAudio");
    this.angle = 0;
  }
}
export class NumberNineteen extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNineteen");
    this.sound = document.getElementById("numberNineteenAudio");
    this.angle = 0;
  }
}
export class NumberTwenty extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwenty");
    this.sound = document.getElementById("numberTwentyAudio");
    this.angle = 0;
  }
}
export class NumberTwentyOne extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwentyOne");
    this.sound = document.getElementById("numberTwentyOneAudio");
    this.angle = 0;
  }
}
export class NumberTwentyTwo extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwentyTwo");
    this.sound = document.getElementById("numberTwentyTwoAudio");
    this.angle = 0;
  }
}
export class NumberTwentyThree extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwentyThree");
    this.sound = document.getElementById("numberTwentyThreeAudio");
    this.angle = 0;
  }
}
export class NumberTwentyFour extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwentyFour");
    this.sound = document.getElementById("numberTwentyFourAudio");
    this.angle = 0;
  }
}
export class NumberTwentyFive extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwentyFive");
    this.sound = document.getElementById("numberTwentyFiveAudio");
    this.angle = 0;
  }
}
export class NumberTwentySix extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwentySix");
    this.sound = document.getElementById("numberTwentySixAudio");
    this.angle = 0;
  }
}
export class NumberTwentySeven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwentySeven");
    this.sound = document.getElementById("numberTwentySevenAudio");
    this.angle = 0;
  }
}
export class NumberTwentyEight extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwentyEight");
    this.sound = document.getElementById("numberTwentyEightAudio");
    this.angle = 0;
  }
}
export class NumberTwentyNine extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberTwentyNine");
    this.sound = document.getElementById("numberTwentyNineAudio");
    this.angle = 0;
  }
}
export class NumberThirty extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirty");
    this.sound = document.getElementById("numberThirtyAudio");
    this.angle = 0;
  }
}
export class NumberThirtyOne extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirtyOne");
    this.sound = document.getElementById("numberThirtyOneAudio");
    this.angle = 0;
  }
}
export class NumberThirtyTwo extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirtyTwo");
    this.sound = document.getElementById("numberThirtyTwoAudio");
    this.angle = 0;
  }
}
export class NumberThirtyThree extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirtyThree");
    this.sound = document.getElementById("numberThirtyThreeAudio");
    this.angle = 0;
  }
}
export class NumberThirtyFour extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirtyFour");
    this.sound = document.getElementById("numberThirtyFourAudio");
    this.angle = 0;
  }
}
export class NumberThirtyFive extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirtyFive");
    this.sound = document.getElementById("numberThirtyFiveAudio");
    this.angle = 0;
  }
}
export class NumberThirtySix extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirtySix");
    this.sound = document.getElementById("numberThirtySixAudio");
    this.angle = 0;
  }
}
export class NumberThirtySeven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirtySeven");
    this.sound = document.getElementById("numberThirtySevenAudio");
    this.angle = 0;
  }
}
export class NumberThirtyEight extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirtyEight");
    this.sound = document.getElementById("numberThirtyEightAudio");
    this.angle = 0;
  }
}
export class NumberThirtyNine extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberThirtyNine");
    this.sound = document.getElementById("numberThirtyNineAudio");
    this.angle = 0;
  }
}
export class NumberForty extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberForty");
    this.sound = document.getElementById("numberFortyAudio");
    this.angle = 0;
  }
}
export class NumberFortyOne extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFortyOne");
    this.sound = document.getElementById("numberFortyOneAudio");
    this.angle = 0;
  }
}
export class NumberFortyTwo extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFortyTwo");
    this.sound = document.getElementById("numberFortyTwoAudio");
    this.angle = 0;
  }
}
export class NumberFortyThree extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFortyThree");
    this.sound = document.getElementById("numberFortyThreeAudio");
    this.angle = 0;
  }
}
export class NumberFortyFour extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFortyFour");
    this.sound = document.getElementById("numberFortyFourAudio");
    this.angle = 0;
  }
}
export class NumberFortyFive extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFortyFive");
    this.sound = document.getElementById("numberFortyFiveAudio");
    this.angle = 0;
  }
}
export class NumberFortySix extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFortySix");
    this.sound = document.getElementById("numberFortySixAudio");
    this.angle = 0;
  }
}
export class NumberFortySeven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFortySeven");
    this.sound = document.getElementById("numberFortySevenAudio");
    this.angle = 0;
  }
}
export class NumberFortyEight extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFortyEight");
    this.sound = document.getElementById("numberFortyEightAudio");
    this.angle = 0;
  }
}
export class NumberFortyNine extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFortyNine");
    this.sound = document.getElementById("numberFortyNineAudio");
    this.angle = 0;
  }
}
export class NumberFifty extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFifty");
    this.sound = document.getElementById("numberFiftyAudio");
    this.angle = 0;
  }
}
export class NumberFiftyOne extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFiftyOne");
    this.sound = document.getElementById("numberFiftyOneAudio");
    this.angle = 0;
  }
}
export class NumberFiftyTwo extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFiftyTwo");
    this.sound = document.getElementById("numberFiftyTwoAudio");
    this.angle = 0;
  }
}
export class NumberFiftyThree extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFiftyThree");
    this.sound = document.getElementById("numberFiftyThreeAudio");
    this.angle = 0;
  }
}
export class NumberFiftyFour extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFiftyFour");
    this.sound = document.getElementById("numberFiftyFourAudio");
    this.angle = 0;
  }
}
export class NumberFiftyFive extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFiftyFive");
    this.sound = document.getElementById("numberFiftyFiveAudio");
    this.angle = 0;
  }
}
export class NumberFiftySix extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFiftySix");
    this.sound = document.getElementById("numberFiftySixAudio");
    this.angle = 0;
  }
}
export class NumberFiftySeven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFiftySeven");
    this.sound = document.getElementById("numberFiftySevenAudio");
    this.angle = 0;
  }
}
export class NumberFiftyEight extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFiftyEight");
    this.sound = document.getElementById("numberFiftyEightAudio");
    this.angle = 0;
  }
}
export class NumberFiftyNine extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberFiftyNine");
    this.sound = document.getElementById("numberFiftyNineAudio");
    this.angle = 0;
  }
}
export class NumberSixty extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixty");
    this.sound = document.getElementById("numberSixtyAudio");
    this.angle = 0;
  }
}
export class NumberSixtyOne extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixtyOne");
    this.sound = document.getElementById("numberSixtyOneAudio");
    this.angle = 0;
  }
}
export class NumberSixtyTwo extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixtyTwo");
    this.sound = document.getElementById("numberSixtyTwoAudio");
    this.angle = 0;
  }
}
export class NumberSixtyThree extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixtyThree");
    this.sound = document.getElementById("numberSixtyThreeAudio");
    this.angle = 0;
  }
}
export class NumberSixtyFour extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixtyFour");
    this.sound = document.getElementById("numberSixtyFourAudio");
    this.angle = 0;
  }
}
export class NumberSixtyFive extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixtyFive");
    this.sound = document.getElementById("numberSixtyFiveAudio");
    this.angle = 0;
  }
}
export class NumberSixtySix extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixtySix");
    this.sound = document.getElementById("numberSixtySixAudio");
    this.angle = 0;
  }
}
export class NumberSixtySeven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixtySeven");
    this.sound = document.getElementById("numberSixtySevenAudio");
    this.angle = 0;
  }
}
export class NumberSixtyEight extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixtyEight");
    this.sound = document.getElementById("numberSixtyEightAudio");
    this.angle = 0;
  }
}
export class NumberSixtyNine extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSixtyNine");
    this.sound = document.getElementById("numberSixtyNineAudio");
    this.angle = 0;
  }
}
export class NumberSeventy extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventy");
    this.sound = document.getElementById("numberSeventyAudio");
    this.angle = 0;
  }
}
export class NumberSeventyOne extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventyOne");
    this.sound = document.getElementById("numberSeventyOneAudio");
    this.angle = 0;
  }
}
export class NumberSeventyTwo extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventyTwo");
    this.sound = document.getElementById("numberSeventyTwoAudio");
    this.angle = 0;
  }
}
export class NumberSeventyThree extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventyThree");
    this.sound = document.getElementById("numberSeventyThreeAudio");
    this.angle = 0;
  }
}
export class NumberSeventyFour extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventyFour");
    this.sound = document.getElementById("numberSeventyFourAudio");
    this.angle = 0;
  }
}
export class NumberSeventyFive extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventyFive");
    this.sound = document.getElementById("numberSeventyFiveAudio");
    this.angle = 0;
  }
}
export class NumberSeventySix extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventySix");
    this.sound = document.getElementById("numberSeventySixAudio");
    this.angle = 0;
  }
}
export class NumberSeventySeven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventySeven");
    this.sound = document.getElementById("numberSeventySevenAudio");
    this.angle = 0;
  }
}
export class NumberSeventyEight extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventyEight");
    this.sound = document.getElementById("numberSeventyEightAudio");
    this.angle = 0;
  }
}
export class NumberSeventyNine extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberSeventyNine");
    this.sound = document.getElementById("numberSeventyNineAudio");
    this.angle = 0;
  }
}
export class NumberEighty extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEighty");
    this.sound = document.getElementById("numberEightyAudio");
    this.angle = 0;
  }
}
export class NumberEightyOne extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEightyOne");
    this.sound = document.getElementById("numberEightyOneAudio");
    this.angle = 0;
  }
}
export class NumberEightyTwo extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEightyTwo");
    this.sound = document.getElementById("numberEightyTwoAudio");
    this.angle = 0;
  }
}
export class NumberEightyThree extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEightyThree");
    this.sound = document.getElementById("numberEightyThreeAudio");
    this.angle = 0;
  }
}
export class NumberEightyFour extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEightyFour");
    this.sound = document.getElementById("numberEightyFourAudio");
    this.angle = 0;
  }
}
export class NumberEightyFive extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEightyFive");
    this.sound = document.getElementById("numberEightyFiveAudio");
    this.angle = 0;
  }
}
export class NumberEightySix extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEightySix");
    this.sound = document.getElementById("numberEightySixAudio");
    this.angle = 0;
  }
}
export class NumberEightySeven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEightySeven");
    this.sound = document.getElementById("numberEightySevenAudio");
    this.angle = 0;
  }
}
export class NumberEightyEight extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberEightyEight");
    this.sound = document.getElementById("numberEightyEightAudio");
    this.angle = 0;
  }
}
export class NumberEightyNine extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numbersEightyNine");
    this.sound = document.getElementById("numberEightyNineAudio");
    this.angle = 0;
  }
}
export class NumberNinety extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinety");
    this.sound = document.getElementById("numberNinetyAudio");
    this.angle = 0;
  }
}
export class NumberNinetyOne extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinetyOne");
    this.sound = document.getElementById("numberNinetyOneAudio");
    this.angle = 0;
  }
}
export class NumberNinetyTwo extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinetyTwo");
    this.sound = document.getElementById("numberNinetyTwoAudio");
    this.angle = 0;
  }
}
export class NumberNinetyThree extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinetyThree");
    this.sound = document.getElementById("numberNinetyThreeAudio");
    this.angle = 0;
  }
}
export class NumberNinettyFour extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinetyFour");
    this.sound = document.getElementById("numberNinetyFourAudio");
    this.angle = 0;
  }
}
export class NumberNinetyFive extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinetyFive");
    this.sound = document.getElementById("numberNinetyFiveAudio");
    this.angle = 0;
  }
}
export class NumberNinetySix extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinetySix");
    this.sound = document.getElementById("numberNinetySixAudio");
    this.angle = 0;
  }
}
export class NumberNinetySeven extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinetySeven");
    this.sound = document.getElementById("numberNinetySevenAudio");
    this.angle = 0;
  }
}
export class NumberNinetyEight extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinetyEight");
    this.sound = document.getElementById("numberNinetyEightAudio");
    this.angle = 0;
  }
}
export class NumberNinetyNine extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberNinetyNine");
    this.sound = document.getElementById("numberNinetyNineAudio");
    this.angle = 0;
  }
}
export class NumberHundred extends Numbers {
  constructor(game) {
    super(game);
    this.maxFrame = 3;
    this.image = document.getElementById("numberHundred");
    this.sound = document.getElementById("numberHundredAudio");
    this.angle = 0;
  }
}
