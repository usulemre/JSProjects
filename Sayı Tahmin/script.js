let TutulanDeger = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Hightscore = 0;

const displayMassega = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
   const say覺 = Number(document.querySelector('.guess').value);
    console.log( typeof say覺);

    if(!say覺){
    //   document.querySelector('.message').textContent = 'Say覺 giriniz??弘';
       displayMassega('Say覺 giriniz??弘');
      document.querySelector('.scdore').textContent = score;
    }else if(say覺 === TutulanDeger ){
        // document.querySelector('.message').textContent = 'Tebrikler Kazand覺n覺z??弘';
        displayMassega('Tebrikler Kazand覺n覺z??弘');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = TutulanDeger;

        if(score > Hightscore){
            Hightscore = score;
            document.querySelector('.highscore').textContent = Hightscore;
        }
    }else if(say覺 !== TutulanDeger){
        if(score >1 ){
                    // document.querySelector('.message').textContent = say覺 > TutulanDeger ? 'Cok Y羹ksek????' : 'Cok D羹??羹k????';
                    displayMassega(say覺 > TutulanDeger ? 'Cok Y羹ksek????' : 'Cok D羹??羹k????');
                    score--;
                    document.querySelector('.scdore').textContent = score;
                }else{
                    // document.querySelector('.message').textContent = '???Oyun bitti';
                    displayMassega('???Oyun bitti');
                    document.querySelector('.scdore').textContent = 0;  
                }
    }

    // }else if(say覺 > TutulanDeger){
    //     if(score >1 ){
    //         document.querySelector('.message').textContent = 'Cok Y羹ksek????';
    //         score--;
    //         document.querySelector('.scdore').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '???Oyun bitti';
    //         document.querySelector('.scdore').textContent = 0;  
    //     }
    // }else if(say覺 < TutulanDeger){
    //     if(score >1 ){
    //         document.querySelector('.message').textContent = 'Cok D羹??羹k????';
    //         score--;
    //         document.querySelector('.scdore').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '??? Oyun bitti!!';
    //         document.querySelector('.scdore').textContent = 0;  
    //     }
    // }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    TutulanDeger = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.scdore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    // document.querySelector('.message').textContent = 'Say覺 giriniz??弘';
    displayMassega('Say覺 giriniz??弘');
    document.querySelector('.number').textContent = '?';
});