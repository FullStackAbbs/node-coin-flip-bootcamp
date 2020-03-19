let buttonRock = document.querySelector('#rock')
let buttonScissors = document.querySelector('#scissors')
let buttonPaper = document.querySelector('#paper')
let buttonSpock = document.querySelector('#spock')
let buttonLizard = document.querySelector('#lizard')


buttonRock.addEventListener('click',playerSelectRock)
// add the playerChoice = "RPSLS"




function checkWinner(choice){
  fetch(`/calculateWinner?playerChoice=${choice}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(playerChoice);
      // document.getElementById('displayChoice').innerHTML = playerChoice
      if (data === true){
        document.getElementById('checkWin').innerHTML = 'You Win'
      } else if (data === false) {
        document.getElementById('checkWin').innerHTML = 'You Lose'
      }
    });
}
