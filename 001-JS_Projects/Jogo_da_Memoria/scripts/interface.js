document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) =>{
        square.addEventListener('click', click)
    })
    
})

function click(event) {
    console.log(event.target);
    updateImages();
}

function updateImages() {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.toggleAttribute('special')
        
        // square.innerHTML = `<img src="../Jogo_da_Memoria/images/bootstrap.png"></img>`
        
    })
}
