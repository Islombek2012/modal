const modal = document.querySelector('.modal');
const focus = document.querySelector('.focus');
const obuna2 = document.querySelector('.obuna2');
let nimadir = true;
let nima = true;
modal.addEventListener('click', ()=>{
      if(nimadir){
            focus.classList.toggle('hidden')
      }
})
obuna2.addEventListener('click', ()=>{
      if(nima){
            focus.classList.toggle('hidden')
      }
})