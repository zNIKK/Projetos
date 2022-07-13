let cont = 0

$("#min_b").click(() => {
    cont--
    $("#amount").val(cont);

    })

$("#max_b").click(() => {
    cont++
    $("#amount").val(cont);
})
