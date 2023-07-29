class Timer {
  #durationInputEl;
  #startBtnEl;
  #pauseBtnEl;

  constructor(durationInputId, startBtnId, pauseBtnId) {
    this.#durationInputEl = document.getElementById(durationInputId);
    this.#startBtnEl = document.getElementById(startBtnId);
    this.#pauseBtnEl = document.getElementById(pauseBtnId);

    // ***add event listeners***
    this.#startBtnEl.addEventListener("click", this.start.bind(this));
  }

  start() {
    this.tick();
    setInterval(this.tick, 1000);
  }

  tick() {
    console.log("TICK");
  }
}

const timer = new Timer("duration", "start", "pause");
