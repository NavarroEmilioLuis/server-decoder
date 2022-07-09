export class Game {
  constructor(userId, config, code) {
    this.userId = userId;
    this.config = config;
    this.state = {
      code,
      currentAttempt: 0,
      attempts: [],
      result: null,
    };
  }

  getConfig() {
    return this.config;
  }

  getState() {
    return this.state;
  }

  isGameOver() {
    return this.state.result !== null;
  }

  isValidPush(userId) {
    return this.userId === userId;
  }

  pushCode(code) {
    this.state.currentAttempt++;
    this.state.attempts.push(code);

    if (code === this.state.code) {
      this.state.result = 1;
    } else if (this.state.currentAttempt === this.config.max_attempts) {
      this.state.result = 0;
    }
  }
}
