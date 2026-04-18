// dust.js
class Dust {
  constructor() {
    this.x = random(width);
    this.y = random(height);

    // --- SCALE LOGIC ---
    // Some are tiny, some are massive (up to 15x scale)
    if (random(1) > 0.85) {
      this.scale = random(0.1, 10); // The "Much Bigger" ones
    } else {
      this.scale = random(0.1, 2); // The background specks
    }

    this.type = floor(random(9));

    // Movement: Speed is tied to scale (parallax depth)
    this.vx = random(-0.01) * this.scale;
    this.vy = random(-0.05) * this.scale;

    // Transparency: Massive ones are very faint/ghostly
    this.alpha = map(this.scale, 0.1, 15, 180, 40);

    this.angle = random(TWO_PI);
    this.rotSpeed = random(-0.002, 0.002) * (this.scale * 0.5);

    // LENGTH is big, but WEIGHT will be thin
    this.len = random(10, 30) * this.scale;
    this.curve = random(5, 15) * this.scale;

    // Interaction radius
    this.repelRadius = 100 * (this.scale * 0.5);
    this.repelStrength = 1 * this.scale;
  }

  update() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.repelRadius && d > 0) {
      let forceX = (this.x - mouseX) / d;
      let forceY = (this.y - mouseY) / d;
      let push = map(d, 0, this.repelRadius, this.repelStrength, 0);
      this.x += forceX * push;
      this.y += forceY * push;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.angle += this.rotSpeed;

    let margin = 70; // Larger margin for the giant fibers
    if (this.x < -margin) this.x = width + margin;
    if (this.x > width + margin) this.x = -margin;
    if (this.y < -margin) this.y = height + margin;
    if (this.y > height + margin) this.y = -margin;
  }

  show() {
    // --- THE THINNESS SECRET ---
    // We keep the stroke weight very low (0.1 to 0.5)
    // regardless of how "Big" (Long) the fiber is.
    let weight = map(this.scale, 0.1, 50, 0.1, 0.4);

    stroke(0, 0, 255); // Dark grey but transparent
    strokeWeight(weight);
    noFill();

    push();
    translate(this.x, this.y);
    rotate(this.angle);

    if (this.type === 0) {
      // Small specks/molecules
      strokeWeight(weight * 3);
      point(0, 0);
    } else if (this.type === 1) {
      // Long straight-ish fibers
      line(-this.len / 2, 0, this.len / 2, 0);
    } else {
      // Long tangled silk-like strings
      beginShape();
      vertex(-this.len / 2, 0);
      // Extra long Bezier curves for the "tangled" look
      bezierVertex(
        -this.len / 4,
        -this.curve,
        this.len / 4,
        this.curve,
        this.len / 2,
        0,
      );
      endShape();
    }
    pop();
  }
}
