class Payload {
  constructor(location) {
    this.location = location;
    this.sparks = [];
    const color = this.randomColor();

    for(let i = 0; i < 25; i++) {
      this.sparks.push(new Spark(this.location, color));
    }
  }

  randomColor() {
    const red = random(0, 256);
    const green = random(0, 256);
    const blue = random(0, 256);
    return {red, green, blue};
  }

  run() {
    this.sparks.forEach((spark, i) => {
      spark.run();
      if(spark.isDead()) this.sparks.splice(i, 1);
    });
  }

  isDone() {
    return this.sparks.length === 0;
  }
}
