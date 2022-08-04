

$("#min_b").click(() => {
    let cont = $("#amount").val()

    if (cont > 0){
        cont--
    } else {
        cont = 0;
    }
    $("#amount").val(cont);

    })

$("#max_b").click(() => {
    let cont = $("#amount").val()

    if (cont >= 0) {
        cont++
    } else {
        cont = 0;
    }
    $("#amount").val(cont);

})


