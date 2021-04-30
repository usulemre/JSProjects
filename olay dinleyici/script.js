const modal = document.querySelector('.modal');
const ovarlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');


const opanModal = function() {
    modal.classList.remove('hidden');
    ovarlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    ovarlay.classList.add('hidden');
}

for(let i = 0; i<btnOpen.length; i++){
    btnOpen[i].addEventListener('click',opanModal);
}
btnClose.addEventListener('click',closeModal);
ovarlay.addEventListener('click',closeModal); 

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});