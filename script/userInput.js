const keys = {
  a: { pressed: false },
  d: { pressed: false },
  w: { pressed: false },
  s: { pressed: false },
  q: { pressed: false },
  e: { pressed: false },
  ArrowUp: { pressed: false },
  ArrowDown: { pressed: false },
  ArrowLeft: { pressed: false },
  ArrowRight: { pressed: false },
  " ": { pressed: false }, // space
  Escape: { pressed: false },
  Enter: { pressed: false },
  swipeUp: { activated: false },
  swipeDown: { activated: false },
  swipeLeft: { activated: false },
  swipeRight: { activated: false },
  hold: { activated: false },
  doubleTap: { activated: false },
};

export class InputHandler {
  constructor(game) {
    this.game = game;

    this.keys = [];
    this.touchY = null;
    this.touchX = null;
    this.touchThreshold = 50; // Threshold for swipe movement
    this.touchTimer = null;
    this.doubleTapThreshold = 300; // Time in milliseconds for detecting double tap

    // Handle keyboard inputs
    window.addEventListener("keydown", (e) => {
      const keyList = [
        "ArrowRight",
        "ArrowLeft",
        "ArrowUp",
        "ArrowDown",
        "a",
        "d",
        "w",
        "s",
        "q",
        "e",
        " ",
        "Enter",
        "Escape",
      ];
      if (keyList.includes(e.key) && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }/* else if (e.key === "`") {
        this.game.debug = !this.game.debug; // Toggle debug mode
      }*/
    });

    window.addEventListener("keyup", (e) => {
      const keyList = [
        "ArrowRight",
        "ArrowLeft",
        "ArrowUp",
        "ArrowDown",
        "a",
        "d",
        "w",
        "s",
        "q",
        "e",
        " ",
        "Enter",
        "Escape",
      ];
      if (keyList.includes(e.key)) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });

    // Handle touch inputs
    window.addEventListener("touchstart", (e) => {
      this.touchY = e.changedTouches[0].pageY;
      this.touchX = e.changedTouches[0].pageX;

      // Check for double-tap (tap timing)
      if (this.touchTimer) {
        clearTimeout(this.touchTimer);
        this.touchTimer = null;
        keys.doubleTap.activated = true; // Double-tap detected
      } else {
        this.touchTimer = setTimeout(() => {
          this.touchTimer = null;
          keys.doubleTap.activated = false;
        }, this.doubleTapThreshold);
      }
    });

    window.addEventListener("touchmove", (e) => {
      const swipeDistanceY = e.changedTouches[0].pageY - this.touchY;
      const swipeDistanceX = e.changedTouches[0].pageX - this.touchX;

      // Swipe up or down
      if (swipeDistanceY < -this.touchThreshold) {
        keys.swipeUp.activated = true;
      } else if (swipeDistanceY > this.touchThreshold) {
        keys.swipeDown.activated = true;
      }

      // Swipe left or right
      if (swipeDistanceX < -this.touchThreshold) {
        keys.swipeLeft.activated = true;
      } else if (swipeDistanceX > this.touchThreshold) {
        keys.swipeRight.activated = true;
      }
    });

    window.addEventListener("touchend", () => {
      // Reset swipe actions
      keys.swipeUp.activated = false;
      keys.swipeDown.activated = false;
      keys.swipeLeft.activated = false;
      keys.swipeRight.activated = false;

      // Reset hold state
      if (!this.touchY && !this.touchX) {
        keys.hold.activated = false;
      }
    });
  }
}
