let TutulanDeger = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Hightscore = 0;

const displayMassega = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
   const sayı = Number(document.querySelector('.guess').value);
    console.log( typeof sayı);

    if(!sayı){
    //   document.querySelector('.message').textContent = 'Sayı giriniz🥰';
       displayMassega('Sayı giriniz🥰');
      document.querySelector('.scdore').textContent = score;
    }else if(sayı === TutulanDeger ){
        // document.querySelector('.message').textContent = 'Tebrikler Kazandınız🥰';
        displayMassega('Tebrikler Kazandınız🥰');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = TutulanDeger;

        if(score > Hightscore){
            Hightscore = score;
            document.querySelector('.highscore').textContent = Hightscore;
        }
    }else if(sayı !== TutulanDeger){
        if(score >1 ){
                    // document.querySelector('.message').textContent = sayı > TutulanDeger ? 'Cok Yüksek😱' : 'Cok Düşük😪';
                    displayMassega(sayı > TutulanDeger ? 'Cok Yüksek😱' : 'Cok Düşük😪');
                    score--;
                    document.querySelector('.scdore').textContent = score;
                }else{
                    // document.querySelector('.message').textContent = '❌Oyun bitti';
                    displayMassega('❌Oyun bitti');
                    document.querySelector('.scdore').textContent = 0;  
                }
    }

    // }else if(sayı > TutulanDeger){
    //     if(score >1 ){
    //         document.querySelector('.message').textContent = 'Cok Yüksek😱';
    //         score--;
    //         document.querySelector('.scdore').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '❌Oyun bitti';
    //         document.querySelector('.scdore').textContent = 0;  
    //     }
    // }else if(sayı < TutulanDeger){
    //     if(score >1 ){
    //         document.querySelector('.message').textContent = 'Cok Düşük😪';
    //         score--;
    //         document.querySelector('.scdore').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '❌ Oyun bitti!!';
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
    // document.querySelector('.message').textContent = 'Sayı giriniz🥰';
    displayMassega('Sayı giriniz🥰');
    document.querySelector('.number').textContent = '?';
});