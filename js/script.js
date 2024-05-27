setInterval(function(){
    const tempo = document.querySelector("#tempo")
    let data = new Date()
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()
    let dia_e_noite = "AM"
    if (h >= 12) {
        dia_e_noite = "PM"
        if (h > 12) {
            h = h - 12
        }
    }
    if (h == 0) {
        h = 12
    }

    if ( h < 10){
        h = "0" + h
    }
    if ( m < 10){
        m = "0" + m
    }
    if ( s < 10){
        s = "0" + s
    }
    tempo.textContent = h + ":" +  m + ":" + s + " " + dia_e_noite
})