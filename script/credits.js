class Credits {
  constructor(game) {
    this.game = game;
    this.speed = 0.75;
    this.width = window.innerWidth; // The width of the canvas
    this.height = 50; // Height of the credit box
    this.x = this.width; // Start at the right edge of the canvas
    this.y = window.innerHeight - this.height * 0.5; // Position the box above the very bottom
    this.fontFamily = "Salsa"; // Font family for the text
    this.fontSize = 20; // Font size for the text
    this.fontColor = "#847979";
    this.boxColor = "#E2E8DD";
    this.text = ""; // Text initialized by child class or externally
    this.canvas = document.getElementById("scrollingtext");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.lastTime = 0;
    this.frameTimer = 0;
  }
  update(deltaTime) {
    this.x -= this.speed;
    this.frameTimer += deltaTime;
    //Reset Positon if the text moves out of view
    if (this.x + this.getTextWidth() < 0) {
      this.x = this.width;
    }
  }
  getTextWidth() {
    this.ctx.font = this.fontSize + "px " + this.fontFamily;
    const wordSize = this.ctx.measureText(this.text).width;
    return wordSize;
  }

  draw(context) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw the background box
    context.fillStyle = this.boxColor;
    context.fillRect(10, this.y - this.height, this.width, this.height); // 10px padding on both sides

    // Set the font and color for the text
    context.font = this.fontSize + "px " + this.fontFamily;
    context.fillStyle = this.fontColor;

    const centeredY = this.y - this.height / 2 + this.fontSize / 2;

    // Draw the credit text
    context.fillText(this.text, this.x, centeredY); // Adding 10px padding for text positioning
  }
}

export class FirstSetCredits extends Credits {
  constructor(game) {
    super(game);
    this.text =
      "Player & Enemy Artist: Bevouliin, Visit: https://bevouliin.com, BackGround Artist: Eder Muniz Visit: https://edermuniz.carrd.co ; Sound Effects:  https://opengameart.org; Developed By: Bhoj GC, Developed For: Samskrita Bharati";
  }
}
export class SecondSetCredits extends Credits {
  constructor(game) {
    super(game);
    this.text =
      "Player & Enemy Artist: Bevouliin, Visit: https://bevouliin.com; Background Artist: Julia, Visit: https://mobilegamegraphics.itch.io/; SoundEffects: https://opengameart.org; Developed By: Bhoj GC, Developed For: Samskrita Bharati";
  }
}
export class NumberSetCredits extends Credits {
  constructor(game) {
    super(game);
    this.text =
      "Player & Enemy Artist: Bevouliin, Visit: https://bevouliin.com; Background Artist: Julia, Visit: https://mobilegamegraphics.itch.io/; SoundEffects: https://opengameart.org; Developed By: Bhoj GC, Developed For: Samskrita Bharati";
  }
}
