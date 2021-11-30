export default class PlayerModel {
  constructor(route_params) {
    const number_repeats = route_params.time / 5;
    this.number_repeats = number_repeats;

    switch (route_params.activity) {
      case "Walking":
        this.sound_required = require("../../../../assets/sounds/Walking.mp3");
        break;
      case "Still":
        this.sound_required = require("../../../../assets/sounds/Still.mp3");
        break;
      case "Running":
        this.sound_required = require("../../../../assets/sounds/Running.mp3");
        break;
    }
    this.current_loop = 1;

    return this;
  }
}
