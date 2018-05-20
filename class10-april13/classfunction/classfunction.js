var circles = [];

function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(73, 114, 102);
    for (var i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].display();
    }
}

function mousePressed() {
    var s = new numCircles(mouseX, mouseY);
    circles.push(s);
}

function numCircles(x, y) {
    this.x = x;
    this.y = y;
    this.fadeCircle = r = random(255);
    g = random(255);
    b = random(255);

    this.display = function () {
        noStroke();
        fill(255, this.fadeCircle);
        ellipse(this.x, this.y, random(50, 100), random(60, 120));
    }

    this.move = function () {

        this.y = this.y + random(0, 5);
        this.fadeCircle = this.fadeCircle - 1;
    }
}
