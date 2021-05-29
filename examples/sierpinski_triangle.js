// Sierpinski Triangle -- draw a recursive triangular fractal
// a recursive function is one that calls itself
function sierpinski (order, side) {
    if (order == 0) {
        beginShape()
        ముందుకు_జరుగు(side)
        ఎడమ_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side)
        ఎడమ_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side)
        ఎడమ_వైపు_తిరుగు(120)
        fillShape("red")
    } else {
        కలమును_పైకి_ఎత్తు()
        ముందుకు_జరుగు(side/2)
        కలమును_కింద_పెట్టు()
        sierpinski( order-1, side/2) // bottom right
        కలమును_పైకి_ఎత్తు()
        ఎడమ_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side/2)
        కుడి_వైపు_తిరుగు(120)
        కలమును_కింద_పెట్టు()
        sierpinski( order-1, side/2) // top center
        కలమును_పైకి_ఎత్తు()
        కుడి_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side/2)
        ఎడమ_వైపు_తిరుగు(120)
        కలమును_కింద_పెట్టు()
        sierpinski( order-1, side/2) // bottom left
    }
}


function delayed() {
    if (i < 7) {
        sier( i)
        i = i+1
        delay( delayed, 2000)
    }
}


function sier (order) {
    ఆది_స్థితి()
    తాబేలును_దాచు()
    side = 2* Math.min(maxX(),maxY()) -20
    కలమును_పైకి_ఎత్తు()
    goto(-side/2, -side/2+20)
    కుడి_వైపు_తిరుగు(90)
    కలమును_కింద_పెట్టు()
    sierpinski( order, side)

    goto (0+10- side/2,minY()+10)
    అక్షరరూపము_స్థాపించు("bold 16px helvitica,sans-serif")
    write ("Sierpinski triangle of order " + order)  
}

var i ; //global iteration variable

function demo() {
    ఆది_స్థితి()
    i = 0
    delayed()
}
