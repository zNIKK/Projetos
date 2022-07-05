const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

let techs = ['bootstrap',
'css',
'electron',
'firebase', 
'html', 
'javascript',
'jquery',
'mongo',
'node',
'react'];

let cards = null;

startGame();
  
function startGame() {
    initiliazeCards(game.createCardsFromTechs())
}



function initiliazeCards(cards) {
    let gameBoard = document.getElementById("gameBoard");

    game.cards.forEach(card =>{
        let cardElement = document.createElement('div');

        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);''
    })

}
    
function flipCard() {
    this.classList.add("flip")
}

function createCardContent(card, cardElement) {
    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face === FRONT) {
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.src = "/Projetos/001-JS_Projects/Jogo_da_Memoria/images/" + card.icon + ".png"
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = '&lt/&gt';
    }
    element.appendChild(cardElementFace);
}

