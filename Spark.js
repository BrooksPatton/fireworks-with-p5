class Spark {
  constructor(location, color) {
    this.startingLocation = location;
    this.location;
    this.size = 3;
    this.color = color;
    this.launched = false;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.timeToLive = 50;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    if(!this.launched) {
      this.location = this.startingLocation.copy();
      this.launched = true;
    }

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);

    this.timeToLive -= 1;
  }

  display() {
    noStroke();
    fill(this.color.red, this.color.green, this.color.blue);
    ellipse(this.location.x, this.location.y, this.size);
  }

  isDead() {
    return this.timeToLive <= 0;
  }
}
