class Layer {
  constructor(game, speedModifier, image) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }
  update() {
    this.speed = this.game.player.speed * this.speedModifier;
    this.x -= this.speed;

    if (this.x <= -this.width) {
      this.x = 0;
    }
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
    context.drawImage(
      this.image,
      this.x - this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

export class FirstSetBackground {
  constructor(game) {
    this.game = game;
    this.groundHeight = 45;
    this.width = 928;
    this.height = 793;
    this.layer1Image = document.getElementById("layer1");
    this.layer2Image = document.getElementById("layer2");
    this.layer3Image = document.getElementById("layer3");
    this.layer4Image = document.getElementById("layer4");
    this.layer5Image = document.getElementById("layer5");
    this.layer6Image = document.getElementById("layer6");
    this.layer7Image = document.getElementById("layer7");
    this.layer8Image = document.getElementById("layer8");
    this.layer9Image = document.getElementById("layer9");
    this.layer10Image = document.getElementById("layer10");
    this.layer11Image = document.getElementById("layer11");
    this.layer12Image = document.getElementById("layer12");
    this.layer1 = new Layer(this.game, 0, this.layer1Image);
    this.layer2 = new Layer(this.game, 0, this.layer2Image);
    this.layer3 = new Layer(this.game, 0.075, this.layer3Image);
    this.layer4 = new Layer(this.game, 0.1, this.layer4Image);
    this.layer5 = new Layer(this.game, 0.2, this.layer5Image);
    this.layer6 = new Layer(this.game, 0.1, this.layer6Image);
    this.layer7 = new Layer(this.game, 0.2, this.layer7Image);
    this.layer8 = new Layer(this.game, 0.2, this.layer8Image);
    this.layer9 = new Layer(this.game, 1, this.layer9Image);
    this.layer10 = new Layer(this.game, 1, this.layer10Image);
    this.layer11 = new Layer(this.game, 0, this.layer11Image);
    this.layer12 = new Layer(this.game, 0, this.layer12Image);
    this.backgroundLayers = [
      this.layer1,
      this.layer2,
      this.layer3,
      this.layer4,
      this.layer5,
      this.layer6,
      this.layer7,
      this.layer8,
      this.layer9,
      this.layer10,
      this.layer11,
      this.layer12,
    ];
  }
  update() {
    this.backgroundLayers.forEach((layer) => {
      layer.update();
    });
  }
  draw(context) {
    this.backgroundLayers.forEach((layer) => {
      layer.draw(context);
    });
  }
}

export class SecondSetBackground {
  constructor(game) {
    this.game = game;
    this.groundHeight = 135;
    this.width = 1920;
    this.height = 1080;
    this.layerOneImage = document.getElementById("levelTwolayer1");
    this.layerTwoImage = document.getElementById("levelTwolayer2");
    this.layerThreeImage = document.getElementById("levelTwolayer3");
    this.layerFourImage = document.getElementById("levelTwolayer4");
    this.layerFiveImage = document.getElementById("levelTwolayer5");
    this.layerSixImage = document.getElementById("levelTwolayer6");
    this.layerSevenImage = document.getElementById("levelTwolayer7");
    this.layerEightImage = document.getElementById("levelTwolayer8");
    this.layerOne = new Layer(this.game, 0, this.layerOneImage);
    this.layerTwo = new Layer(this.game, 0, this.layerTwoImage);
    this.layerThree = new Layer(this.game, 0.25, this.layerThreeImage);
    this.layerFour = new Layer(this.game, 0.25, this.layerFourImage);
    this.layerFive = new Layer(this.game, 0.25, this.layerFiveImage);
    this.layerSix = new Layer(this.game, 0.5, this.layerSixImage);
    this.layerSeven = new Layer(this.game, 0.5, this.layerSevenImage);
    this.layerEight = new Layer(this.game, 1, this.layerEightImage);
    this.backgroundLayers = [
      this.layerOne,
      this.layerTwo,
      this.layerThree,
      this.layerFour,
      this.layerFive,
      this.layerSix,
      this.layerSeven,
      this.layerEight,
    ];
  }

  update() {
    this.backgroundLayers.forEach((layer) => {
      layer.update();
    });
  }
  draw(context) {
    this.backgroundLayers.forEach((layer) => {
      layer.draw(context);
    });
  }
}

export class NumberSetBackground {
  constructor(game) {
    this.game = game;
    this.groundHeight = 170;
    this.width = 2048;
    this.height = 1546;
    this.layerOneImage = document.getElementById("levelThreeLayer1");
    this.layerTwoImage = document.getElementById("levelThreeLayer2");
    this.layerThreeImage = document.getElementById("levelThreeLayer3");
    this.layerFourImage = document.getElementById("levelThreeLayer4");
    this.layerFiveImage = document.getElementById("levelThreeLayer5");
    this.layerSixImage = document.getElementById("levelThreeLayer6");
    this.layerSevenImage = document.getElementById("levelThreeLayer7");
    this.layerOne = new Layer(this.game, 0.5, this.layerOneImage);
    this.layerTwo = new Layer(this.game, 0.25, this.layerTwoImage);
    this.layerThree = new Layer(this.game, .05, this.layerThreeImage);
    this.layerFour = new Layer(this.game, .05, this.layerFourImage);
    this.layerFive = new Layer(this.game, 0.05, this.layerFiveImage);
    this.layerSix = new Layer(this.game, 0.5, this.layerSixImage);
    this.layerSeven = new Layer(this.game, 0.5, this.layerSevenImage);
    this.backgroundLayers = [
      this.layerOne,
      this.layerTwo,
      this.layerThree,
      this.layerFour,
      this.layerFive,
      this.layerSix,
      this.layerSeven,
    ];
    
  }
  update() {
    this.backgroundLayers.forEach((layer) => {
      layer.update();
    });
  }
  draw(context) {
    this.backgroundLayers.forEach((layer) => {
      layer.draw(context);
    });
  }
}
