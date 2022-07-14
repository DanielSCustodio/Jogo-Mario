const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');
const clouds = document.getElementById('clouds');
const textGameOver = document.getElementById('text-game-over');
const btnRestart = document.getElementById('btn-restart');
const score = document.getElementById('score');
const screen = document.getElementById('game-board');

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500)
}

const restart = () => {
  document.location.reload(true);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  if(
    pipePosition > 0 &&
    pipePosition <= 120 &&
    marioPosition < 80
    ) {
    pipe.style.animation ='none';
    pipe.style.left =`${pipePosition}px`

    mario.style.animation ='none';
    mario.style.bottom =`${marioPosition}px`


    clouds.style.animation ='none';
    clouds.style.left =`${cloudsPosition}px`

    mario.src = './images/game-over.png';
    mario.style.width = '50px';
    mario.style.marginLeft= '75px';
    
    textGameOver.classList.remove('game-over-hidden')
    textGameOver.classList.add('text-game-over');

    btnRestart.classList.remove('btn-game-over-hidden')
    btnRestart.classList.add('btn-restart');
    
    document.addEventListener('click', restart)

    clearInterval(loop)
  }else {
    let punctation = (setTimeout(()=>{},0))
    score.innerHTML= punctation;
    if(punctation == 100) {
      screen.style.backgroundColor = 'blue' ;
    }
  }
}, 10)




document.addEventListener('keydown', jump)