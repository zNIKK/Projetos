function calcular() {
    let res = document.getElementById("res")
    let adultos = parseInt(document.getElementById("adultos").value)
    let crianças = parseInt(document.getElementById("crianças").value)
    let tempo = parseInt(document.getElementById("tempo").value)

    let mediaCarne = carnePP(tempo) * adultos + (carnePP(tempo) / 2 * crianças) 
    let mediaCerveja = cervejaPP(tempo) * adultos
    let mediaRefrigerante = refrigerantePP(tempo) * adultos +(refrigerantePP(tempo) / 2 * crianças)   

    res.innerHTML = `  
                    <p>${mediaCarne / 1000} Kg de Carne</p>
                    <p>${Math.ceil(mediaCerveja / 355)} Latas de Cerveja</p>
                    <p>${Math.ceil((mediaRefrigerante / 2) / 1000)} Garrafas de 2L de Refrigerante</p>
                    `

    function carnePP(duracao) {
        if (duracao >= 6) {
            return 650
        } else {
            return 400
        } 

    }

    function cervejaPP(duracao) {
        if (duracao >= 6) {
            return 2000
        } else {
            return 1200
        } 
    }

    function refrigerantePP(duracao) {
        if (duracao >= 6) {
            return 1500
        } else {
            return 1000
        } 

    }

    
}