const mario = document.querySelector('.mario');
console.log(mario);
const pipe = document.querySelector('.pipe');
const btn = document.querySelector('#refresh');


const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
   
    mario.classList.remove('jump');
     
  }, 500);

}

const loop = setInterval(() => {

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  pipe.style.animation = 'none';
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = 'none';
 mario.style.bottom = `${marioPosition}px`;

 mario.src = './img/game-over.webp'

clearInterval(loop);
}

console.log(pipePosition);

}, 10)

btn.addEventListener( 'click', () => {
  location.reload()
})

document.addEventListener('keydown', jump);