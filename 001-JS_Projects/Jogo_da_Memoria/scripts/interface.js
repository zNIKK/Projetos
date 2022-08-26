const FRONT = 'card_front'
const BACK = 'card_back'

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

startGame();

function startGame() {
    let cards = createCardsFromTechs(techs);
}

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random * currentIndex);
        currentIndex--;

        [cards[randomIndex],[cards]]

    }
}

function createCardsFromTechs(techs) {
    let cards = [];

    for(let tech of techs){
        cards.push(createPairFromTech(tech));
    }
    return cards.flatMap(pair => pair);

}


function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face === FRONT) {
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.src = "/001-JS_Projects/Jogo_da_Memoria/images/" + card.icon + ".png"
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = '&lt/&gt';
    }
    element.appendChild(cardElementFace);
}

function createPairFromTech(tech) {

    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    },{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
} 

function createIdWithTech(tech) {
    return tech + parseInt(Math.random() * 1000)
}