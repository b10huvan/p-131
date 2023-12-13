function setup()
{
canvas = createCanvas(640, 420);
canvas.center();
}

img= ""


function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Plant", 67, 130);
noFill();
stroke("#FF0000");
rect(60, 120, 100, 170 );
}

