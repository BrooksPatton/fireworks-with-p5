class Firework {
  constructor(location) {
    this.location = location;
    this.force = createVector(random(-0.01, 0.01), 0);
    this.rocket = new Rocket(location);
  }

  run() {
    this.rocket.run(this.force);
  }

  isFinished() {
    return this.rocket.isFinished();
  }
}
