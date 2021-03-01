// check for The Player :
// x's Turn Or O's Turn 
// x means Player One and O means PlayerTwo
// lets x => True and O => False 


let player = true;
let win = false ;
let draw = false;

// get all The Block 
const oneone = document.querySelector('#oneone');
const onetwo = document.querySelector('#onetwo');
const onethree = document.querySelector('#onethree');
const twoone = document.querySelector('#twoone');
const twotwo = document.querySelector('#twotwo');
const twothree = document.querySelector('#twothree');
const threeone = document.querySelector('#threeone');
const threetwo = document.querySelector('#threetwo');
const threethree = document.querySelector('#threethree');

function winningLogic(playersTurn) {
    // win=true
    document.querySelector('.game-status').innerHTML = `<H1>${playersTurn} wins<h1>`
    restartGame()
}

function restartGame() {
    console.log('Lets Play again');
}

const checkForPlayersTurn = () => {
    
    if(player ===  true) {
        player = false ;
        return 'playerOne'
    }
    else {
        player = true;
        return 'playerTwo'
    }
}


const displayIcon = (displayIcon,e) => {
     if(displayIcon === 'playerOne') {
         console.log('display x')
         document.getElementById(e.target.id).innerHTML = 'X'
         console.log(e.target.id);
     }
     if(displayIcon === 'playerTwo'){
          console.log('display O')
            document.getElementById(e.target.id).innerHTML = 'O'
            console.log(e.target.id);
     }
}

const checkforDraw = (playersTurn,e) => {
      if(!draw) {
          displayIcon(playersTurn,e)
          
      }
}

const checkforWin = (playersTurn,e) => {
  
//    winningLogic(playersTurn);
   if(win){
       return console.log(playersTurn ,'wins');
   }
   else{
       checkforDraw(playersTurn,e);
   }
}

oneone.addEventListener('click', (e) => {
   let playersTurn = checkForPlayersTurn()
   checkforWin(playersTurn,e);
})
onetwo.addEventListener('click', (e) => {
    let playersTurn = checkForPlayersTurn()
   checkforWin(playersTurn,e);
})
onethree.addEventListener('click', (e) => {
    let playersTurn = checkForPlayersTurn()
   checkforWin(playersTurn,e);
})
twoone.addEventListener('click', (e) => {
    let playersTurn = checkForPlayersTurn()
   checkforWin(playersTurn,e);
})
twotwo.addEventListener('click', (e) => {
    let playersTurn = checkForPlayersTurn()
   checkforWin(playersTurn,e);
})
twothree.addEventListener('click', (e) => {
    let playersTurn = checkForPlayersTurn()
   checkforWin(playersTurn,e);
})
threeone.addEventListener('click', (e) => {
    let playersTurn = checkForPlayersTurn()
   checkforWin(playersTurn,e);
})
threetwo.addEventListener('click', (e) => {
    let playersTurn = checkForPlayersTurn()
   checkforWin(playersTurn,e);
})
threethree.addEventListener('click', (e) => {
    let playersTurn = checkForPlayersTurn()
   checkforWin(playersTurn,e);
})


