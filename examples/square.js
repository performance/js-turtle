/* Define helper functions here
or write your own functions
including a demo() function
For example:    */


function square(side) {
    let i = 0;
    repeat(4, () => {
        forward(side)
        turn_right(90)
    });
}

function demo() {
    reset();
    hideTurtle();
    setColor("blue");
    let side = 100;
    let color_number = 0;
    while (side > 0) {
        square(side);
        turn_right(36);
        side = side - 10;
        color_number = (color_number + 1) % 16;
        changeColor(color_number);
    }
}
