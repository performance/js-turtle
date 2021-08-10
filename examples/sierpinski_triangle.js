// Sierpinski Triangle -- draw a recursive triangular fractal
// a recursive _విధానము_     is one that calls itself
_విధానము_     sierpinski (order, side) {
    if (order == 0) {
        ఆకారము_ప్రారంభించు()
        ముందుకు_జరుగు(side)
        ఎడమ_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side)
        ఎడమ_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side)
        ఎడమ_వైపు_తిరుగు(120)
        ఆకారము_ముగించు("red")
    } else {
        కుంచికను_పైకి_ఎత్తు()
        ముందుకు_జరుగు(side/2)
        కుంచికను_కింద_పెట్టు()
        sierpinski( order-1, side/2) // bottom right
        కుంచికను_పైకి_ఎత్తు()
        ఎడమ_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side/2)
        కుడి_వైపు_తిరుగు(120)
        కుంచికను_కింద_పెట్టు()
        sierpinski( order-1, side/2) // top center
        కుంచికను_పైకి_ఎత్తు()
        కుడి_వైపు_తిరుగు(120)
        ముందుకు_జరుగు(side/2)
        ఎడమ_వైపు_తిరుగు(120)
        కుంచికను_కింద_పెట్టు()
        sierpinski( order-1, side/2) // bottom left
    }
}


_విధానము_     delayed() {
    if (i < 7) {
        sier( i)
        i = i+1
        విలంబించు( delayed, 2000)
    }
}


_విధానము_     sier (order) {
    ఆది_స్థితి()
    కుంచికను_దాచు()
    side = 2* Math.min(గరిష్ఠX(),గరిష్ఠY()) -20
    కుంచికను_పైకి_ఎత్తు()
    స్థానము_మార్చు(-side/2, -side/2+20)
    కుడి_వైపు_తిరుగు(90)
    కుంచికను_కింద_పెట్టు()
    sierpinski( order, side)

    స్థానము_మార్చు(0+10- side/2,కనిష్ఠY()+10)
    అక్షరరూపము_స్థాపించు("bold 16px helvitica,sans-serif")
    వ్రాయి("Sierpinski triangle of order " + order)  
}

_సర్వత్ర_   i ; //global iteration variable

_విధానము_     ప్రదర్శన() {
    ఆది_స్థితి()
    i = 0
    delayed()
}
