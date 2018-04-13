function setup() {
    createCanvas(500, 500);


}

function draw() {
    background("grey");

    var noseColor = color(109, 205, 255);
    var beardColor = color(118, 185, 153);
    var noseEarlobe = color(255, 165, 138);
    var hairColor = color(0, 0, 0);


    /*--------------base of face-*/
    fill("green")
    noStroke()
    //rect(150, 150, 170, 170);

    /*---------------eyes-*/
    fill("white")
    noStroke()
    ellipse(200, 200, 50); /*-------eye--*/
    fill("black")
    ellipse(200, 200, 20); /*-------eye--*/
    fill("white")
    ellipse(200, 200, 17); /*-------eye puple--*/
    fill(noseEarlobe);
    triangle(128, 245, 106, 271, 138, 195); /*-------nose bridge--*/


    fill(noseColor);
    noStroke()
    ellipse(120, 260, 40); /*------nose--*/

    fill(noseEarlobe)
    rect(290, 200, 40, 64, 20, 15, 10, 5);

    fill(noseColor)
    ellipse(300, 260, 38); /*------ears--*/


    /*----------------glasses-*/
    stroke("black")
    noFill()
    rect(140, 160, 60, 90); /*------glasses frames--*/
    rect(142, 162, 55, 85); /*------glasses frames--*/
    rect(144, 164, 50, 80); /*------glasses frames--*/

    //  rect(150, 170, 40, 60); /*------glasses frames--*/

    line(184, 150, 300, 239); /*------glasses line--*/
    line(210, 160, 290, 224); /*------glasses line--*/

    fill(beardColor)
    noStroke()
    rect(129, 279, 50, 20); /*------mouth--*/
    triangle(120, 400, 158, 308, 89, 290); /*------chin--*/



    rect(260, 279, 30, 55);
    fill(beardColor)

    /*------x1----y1----x2----y2----x3---y3---x4---y4--*/
    quad(297, 391, 290, 329, 130, 361, 108, 406); /*------Jawline--*/

    fill("pink")
    triangle(90, 285, 90, 300, 180, 315);
    triangle(140, 298, 210, 300, 140, 285);

    stroke("black")
    fill(hairColor)
    rect(127, 283, 1, 15); /*------beard--*/
    rect(134, 285, 1, 15); /*------beard--*/
    rect(140, 287, 1, 15); /*------beard--*/
    rect(146, 283, 1, 15); /*------beard--*/
    rect(153, 286, 1, 15); /*------beard--*/
    rect(161, 289, 1, 15); /*------beard--*/
    rect(169, 285, 1, 15); /*------beard--*/
    rect(176, 289, 1, 15); /*------beard--*/

    fill(hairColor)
    //    rect(120, 360,200, 30);
    rect(129, 345, 2, 50); /*------beard rect --*/
    rect(129, 345, 2, 50); /*------beard rect--*/
    rect(140, 340, 2, 50); /*------beard rect--*/
    rect(150, 350, 2, 50); /*------beard rect--*/
    rect(163, 355, 2, 50); /*------beard rect--*/
    rect(172, 345, 2, 50); /*------beard rect--*/
    rect(190, 352, 2, 50); /*------beard rect--*/
    rect(203, 355, 2, 50); /*------beard rect--*/
    rect(215, 338, 2, 50); /*------beard rect--*/
    rect(223, 342, 2, 50); /*------beard rect--*/
    rect(236, 347, 2, 50); /*------beard rect--*/
    rect(249, 330, 2, 50); /*------beard rect--*/
    rect(264, 346, 2, 50); /*------beard rect--*/
    rect(280, 330, 2, 50); /*------beard rect--*/




}
