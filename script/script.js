import { FirstSetAlphabets, SecondSetAlphabets, NumberSet } from "./game.js";
import {
  FirstSetCredits,
  SecondSetCredits,
  NumberSetCredits,
} from "./credits.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function startGame() {
    animate(0);
  }

  let game;
  let currentSet;
  let gameCredits;

  window.addEventListener("click", (e) => {
    const buttonId = e.target.id;
    if (buttonId === "welcomeScreenButton") {
      document.getElementById("welcomeScreen").style.display = "none";
      document.getElementById("chooseGame").style.display = "block";
    } else if (buttonId === "firstSet") {
      document.getElementById("chooseGame").style.display = "none";
      document.getElementById("gameControls").style.display = "block";
      currentSet = "firstSet";
    } else if (buttonId === "secondSet") {
      document.getElementById("chooseGame").style.display = "none";
      document.getElementById("gameControls").style.display = "block";
      currentSet = "secondSet";
    } else if (buttonId === "numberSet") {
      document.getElementById("chooseGame").style.display = "none";
      document.getElementById("gameControls").style.display = "block";
      currentSet = "numberSet";
    }

    if (buttonId === "startGame") {
      if (currentSet === "firstSet") {
        game = new FirstSetAlphabets(canvas.width, canvas.height);
      } else if (currentSet === "secondSet") {
        game = new SecondSetAlphabets(canvas.width, canvas.height);
      } else if (currentSet === "numberSet") {
        game = new NumberSet(canvas.width, canvas.height);
      }
      document.getElementById("gameControls").style.display = "none";
      startGame();
    }

    if (game && game.gameOver) {
      if (buttonId === "enterButton") {
        handleGameOverScenario();
      } else if (buttonId === "escapeButton") {
        resetToMainMenuScenario();
      }
    }
  });

  window.addEventListener("keydown", (e) => {
    if (game && game.gameOver) {
      if (e.key === "Enter") {
        handleGameOverScenario();
      } else if (e.key === "Escape") {
        resetToMainMenuScenario();
      }
    }
  });

  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (game && !game.gameOver) {
      game.update(deltaTime);
      game.draw(ctx);
      requestAnimationFrame(animate);
    } else {
      handleCredits(deltaTime);
    }
  }

  function handleCredits(deltaTime) {
    if (
      !gameCredits ||
      (currentSet === "firstSet" &&
        !(gameCredits instanceof FirstSetCredits)) ||
      (currentSet === "secondSet" &&
        !(gameCredits instanceof SecondSetCredits)) ||
      (currentSet === "numberSet" && !(gameCredits instanceof NumberSetCredits))
    ) {
      if (currentSet === "firstSet") {
        gameCredits = new FirstSetCredits(game);
      } else if (currentSet === "secondSet") {
        gameCredits = new SecondSetCredits(game);
      } else if (currentSet === "numberSet") {
        gameCredits = new NumberSetCredits(game);
      }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameCredits.update(deltaTime);
    gameCredits.draw(ctx);

    // Continue the credit animation loop
    requestAnimationFrame((newDeltaTime) => handleCredits(newDeltaTime));
  }

  function handleGameOverScenario() {
    document.getElementById("GameOverScreen").style.display = "none";
    if (game.coins >= game.maxCoins) {
      if (currentSet === "firstSet") {
        currentSet = "secondSet";
        game = new SecondSetAlphabets(canvas.width, canvas.height);
      } else if (currentSet === "secondSet") {
        currentSet = "numberSet";
        game = new NumberSet(canvas.width, canvas.height);
      } else if (currentSet === "numberSet") {
        document.getElementById("finalGameOverScreen").style.display = "block";
        return;
      }
    } else {
      if (currentSet === "firstSet") {
        game = new FirstSetAlphabets(canvas.width, canvas.height);
      } else if (currentSet === "secondSet") {
        game = new SecondSetAlphabets(canvas.width, canvas.height);
      } else if (currentSet === "numberSet") {
        game = new NumberSet(canvas.width, canvas.height);
      }
    }

    startGame();
  }

  function resetToMainMenuScenario() {
    document.getElementById("gameControls").style.display = "none";
    document.getElementById("GameOverScreen").style.display = "none";
    document.getElementById("chooseGame").style.display = "block";
  }

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
  })
});
