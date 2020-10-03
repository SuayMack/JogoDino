const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

//verificar quendo a tecla subir
document.addEventListener('keyup', handleKeyUp);
/*

let isJumping = false;
let isGameOver = false;
let position = 0;

*/
//quando o evento keyup da tecla 32(espaço) for acinado,
//E o dino não estiver pulando, pule(função jump)
function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

//Função pular
function jump() {
  isJumping = true;

  //setInterval - define intervalos
  //vamos utilizar a função setInterval para movimentar o dinossauro para cima
  let upInterval = setInterval(() => {
    
    // Se a posição do dino estiver até 150 (emcima)
    if (position >= 150) {
      //(limpa o intervalo)
      clearInterval(upInterval);
      // e desça 
      let downInterval = setInterval(() => {
        //Se a posição for menor ou iguala  zero
        if (position <= 0) {
          //ele para de descer
          clearInterval(downInterval);
          isJumping = false;
        } else {//desce 
          position -= 20;
          //e altera a aposição do dino
          dino.style.bottom = position + 'px';
        }
      }, 20);//velocidade que o dino sobe e desce
    } else {//senão suba 
      //Pegar a posição do dino e adicionar 20 (subir)
      position += 20;
      //adicionar ao estilo css bottom do dino a nova posicao dele + px
      dino.style.bottom = position + 'px';
    }
  }, 20);
}
/*
function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  if (isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();
*/