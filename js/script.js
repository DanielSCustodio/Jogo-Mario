const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');
const clouds = document.getElementById('clouds');

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  console.log(cloudsPosition);
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
    mario.style.width = '75px';
    mario.style.marginLeft= '50px';
    
    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)