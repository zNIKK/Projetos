function sortear(){

    let pessoas = ["Igor" , "Jose", "Marcos" , "Pamela", "Joana"]
    let np = pessoas.length

    let ns = Math.floor(Math.random() * np)

    document.getElementById('d').innerHTML = pessoas[ns]
}