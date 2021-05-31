// Sierpinski Triangle -- draw a recursive triangular fractal
// a recursive function is one that calls itself
function sierpinski (order, side) {
    if (order == 0) {
        ఆకారాము_ప్రారంభించు()
        ముందుకు_జరుగు(side)
        ఎడమ_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side)
        ఎడమ_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side)
        ఎడమ_వైపు_తిరుగు(120)
        ఆకారాము_ముగించు("red")
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
        విలంబించు( delayed, 2000)
    }
}


function sier (order) {
    ఆది_స్థితి()
    కుంచికను_దాచు()
    side = 2* Math.min(గరిష్ఠX(),గరిష్ఠY()) -20
    కలమును_పైకి_ఎత్తు()
    స్థానము_మార్చు(-side/2, -side/2+20)
    కుడి_వైపు_తిరుగు(90)
    కలమును_కింద_పెట్టు()
    sierpinski( order, side)

    స్థానము_మార్చు(0+10- side/2,కనిష్ఠY()+10)
    అక్షరరూపము_స్థాపించు("bold 16px helvitica,sans-serif")
    వ్రాయి("Sierpinski triangle of order " + order)  
}

var i ; //global iteration variable

function demo() {
    ఆది_స్థితి()
    i = 0
    delayed()
}
