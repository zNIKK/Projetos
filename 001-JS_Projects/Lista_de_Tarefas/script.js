let valor = []

let submit = document.getElementById("submit")
let clean = document.getElementById("clean")

submit.addEventListener("click", addTask)
buttom.addEventListener("click", clear)

onload = function() {
    let area = document.getElementById("area")
    let loadName = localStorage.getItem("valor")
    let name = JSON.parse(loadName)

    for (let c in name) {
        valor.push(name[c])
        let label = document.createElement("label")
        area.appendChild(label)
        label.innerHTML += name[c]
    }
    

}

function addTask() {
    let text = document.getElementById("text") 
    let area = document.getElementById("area")

    let check = document.createElement("input") // CHECKBOX
    check.setAttribute("type", "checkbox") // CHECKBOX
    check.setAttribute("class", "checkbox") // CHECKBOX
    let label = document.createElement("label") //CHECKBOX


    let task = document.createElement("p") // paragrafo todo


    task.setAttribute("class", "tasks") // STYLE
    area.appendChild(label)
    label.appendChild(task)
    task.appendChild(check)

    task.innerHTML += text.value

    valor.push(label.innerHTML)
    valor = valor
    let jsonVALOR = JSON.stringify(valor)


    localStorage.setItem("valor", jsonVALOR)

    task.appendChild(cleanB)
    
}


function clear () {
    valor = []
    let area = document.getElementById("area")
    localStorage.clear()
    area.innerHTML = ""
    
}
