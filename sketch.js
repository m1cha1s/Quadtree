var tree;
var particles;

var particleCount;

function setup() {
    createCanvas(400, 400);

    tree = new Quadtree();
    particles = [];

    particleCount = 5000;
    for (var i = 0; i < particleCount; i++) {
        particles.push(new Point(random(1, width - 1), random(1, height - 1)));
    }
}

function draw() {

    tree = new Quadtree();
    particles.forEach((particle, i) => {
        tree.insert(particle);
    });

    background(120);
    noFill();
    stroke(255);
    strokeWeight(1);

    let allParticles = tree.queryRange(new Area(0, 0, width, height));
    let query = tree.queryRange(new Area(mouseX - 30, mouseY - 30, mouseX + 30, mouseY + 30));

    strokeWeight(2);

    allParticles.forEach((particle, i) => {
        point(particle.x, particle.y);
    });

    stroke(255, 0, 0);

    query.forEach((particle, i) => {
        point(particle.x, particle.y);
    });

    strokeWeight(1);

    stroke(255);

    rect(mouseX - 30, mouseY - 30, 60, 60);

    strokeWeight(0.5);
    stroke(100);
    //tree.show();


    return;
}