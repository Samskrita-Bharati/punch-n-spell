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

  const baseUrl = "http://localhost:5000/api"; // Replace with the original backend URL for ZATAM, DO NOT DIRECTLY EXPOSE THE ABOVE API
  // desctructuring the gameID and userID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const gameId = urlParams.get("gameId");
  const userId = urlParams.get("userId");

  // const gameId = "G_20250810_135240_179_514";
  // const userId = "U_20250810_134926_747_879";

  let startTime;
  let endTime;
  let totalTimeSpent;

  function startGame() {
    startTime = new Date().getTime();
    animate(0);
  }

  let game;
  let currentSet;
  let gameCredits;

  window.addEventListener("click", (e) => {
    const buttonId = e.target.id;
    if (buttonId === "welcomeScreenButton") {
      document.getElementById("welcomeScreen").style.display = "none";
      document.getElementById("finalGameOverScreen").style.display = "none";
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
        endTime = new Date().getTime();
        totalTimeSpent = ((endTime - startTime) / 60000).toFixed(2);
        console.log("Total Time Spent", totalTimeSpent);
        document.getElementById("finalGameOverScreen").style.display = "block";
        const startOverButton = document.querySelector(
          ".finalGameOverResetButton"
        );
        startOverButton.addEventListener("click", () => {
          sendGameData();
        });

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
    canvas.height = window.innerHeight;
  });

  function sendGameData() {
    const score = document.getElementById("finalTotalScore").textContent;

    console.log(score);
    const rating = document.getElementById("ratingDisplay").value;

    const favoriteRadio = document.querySelector(
      'input[name="isFavorite"]:checked'
    );
    const isFavorite = favoriteRadio
      ? favoriteRadio.value === "true"
      : undefined;

    const gameData = {
      gameId: gameId,
      userId: userId,
      score: parseFloat(score),
      playTime: parseFloat(totalTimeSpent),
      rating: parseFloat(rating),
      isFavorite: isFavorite,
    };

    if (!userId || !gameId) {
      return console.log("GameData", gameData);
    }

    fetch(`${baseUrl}/gamesData/addNew`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Server response:", data))
      .catch((err) => console.error("Error sending game data:", err));
  }
});
