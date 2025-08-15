export class Ui {
  constructor(game) {
    this.game = game;
    this.fontSize = 20;
    this.fontFamily = "Salsa";
    this.coinsImage = document.getElementById("coins");
    this.scoreImage = document.getElementById("score");
    this.livesImage = document.getElementById("lives");
    this.fontColor = "#DDDBCB";
  }
  draw(context) {
    context.textAlign = "left";
    context.font = this.fontSize + "px " + this.fontFamily;
    context.fillStyle = this.fontColor;
    // drawing score image
    context.drawImage(this.scoreImage, 20, 10, 20, 20);
    context.fillText(this.game.score, 50, 25);
    // drwing coins image
    context.drawImage(this.coinsImage, 20, 45, 20, 20);
    context.fillText(this.game.coins, 50, 58);
    //drawing lives images
    for (let i = 0; i < this.game.lives; i++) {
      context.drawImage(this.livesImage, 20 * i + 20, 67, 25, 25);
    }
    //Game Over text display
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.fillStyle = "white";
      context.font = this.fontSize * 3 + "px " + this.fontFamily;
      if (this.game.coins >= this.game.maxCoins) {
        document.getElementById("GameOverScreen").style.display = "block";
        const gameResult = document.getElementById("gameOver");
        const score = document.getElementById("totalScore");
        const coins = document.getElementById("totalCoins");
        const nextStageDisplay = document.getElementById("nextStage");
        gameResult.innerHTML = "excellent job";
        score.innerHTML = this.game.totalScore;
        coins.innerHTML = this.game.totalCoins;
        nextStageDisplay.innerHTML = "to proceed";
      } else if (this.game.coins < this.game.maxCoins) {
        document.getElementById("GameOverScreen").style.display = "block";
        const gameResult = document.getElementById("gameOver");
        const score = document.getElementById("totalScore");
        const coins = document.getElementById("totalCoins");
        const nextStageDisplay = document.getElementById("nextStage");

        gameResult.innerHTML = "try again";
        score.innerHTML = this.game.score;
        coins.innerHTML = this.game.coins;
        nextStageDisplay.innerHTML = " to restart game";
      }
    }

    const finalGameResult = document.getElementById("finalGameOver");
    const finalTotalScore = document.getElementById("finalTotalScore");
    const finalTotalCoins = document.getElementById("finalTotalCoins");

    finalGameResult.innerHTML = "Congratulations !!!!<br> on completing all the levels"
    finalTotalScore.innerHTML = this.game.score
    finalTotalCoins.innerHTML = this.game.coins
  }
}
