const scor0el = document.getElementById('score--0');
const scor1el = document.getElementById('score--1');
const diceEl    = document.querySelector('.dice');
const btnNew  = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');
const Player0El  = document.querySelector('.player--0');
const Player1El  = document.querySelector('.player--1');


scor0el.textContent = 0;
scor1el.textContent = 0;
diceEl.classList.add('hidden');

let scores,curronScore,activePlayer,playing;

const init = function(){
     scores = [0,0];
     curronScore = 0;
     activePlayer = 0;
     playing = true;

    scor0el.textContent = 0;
    scor1el.textContent = 0;
    diceEl.classList.remove('hidden');
    current0el.textContent = 0;
    current1el.textContent = 0;

    Player0El.classList.remove('player--winner');
    Player1El.classList.remove('player--winner');
    Player0El.classList.add('player--active');
    Player1El.classList.remove('player--active');
}
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    curronScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    Player0El.classList.toggle('player--active');
    Player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){

    if(playing){

        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        
        if(dice !== 1){
            curronScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = curronScore;
        }else{
           switchPlayer();
        }
    }

});

btnHold.addEventListener('click',function(){
    if(playing){

        scores[activePlayer] += curronScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        if(scores[activePlayer] >=20){
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{
           switchPlayer();
        }   
    }
});

btnNew.addEventListener('click',init);