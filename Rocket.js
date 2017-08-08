class Rocket {
  constructor(location) {
    this.location = location;
    this.width = 3;
    this.height = 6;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -5);
    this.fuel = random(50, 115);
    this.payload = new Payload(this.location);
  }

  run(force) {
    this.applyForce(force);
    this.update();
    this.display();
  }

  applyForce(force) {
    this.acceleration.add(force.copy());
  }

  update() {
    if(this.fuel > 0) {
      this.velocity.add(this.acceleration);
      this.location.add(this.velocity);
      this.acceleration.mult(0);

      this.fuel -= 1;
    } else {
      this.payload.run();
    }
  }

  display() {
    noStroke();
    fill(255, 255, 255, 50);
    if(this.fuel > 0) {
      rect(this.location.x, this.location.y, this.width, this.height);
    }
  }

  isFinished() {
    return this.payload.isDone();
  }
}
