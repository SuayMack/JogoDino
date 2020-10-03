//pegamos nosso dino
const dino = document.querySelector('.dino')
//pegamos o background
const background = document.querySelector('.background');
//verificar quendo a tecla subir
document.addEventListener('keydown', handleKeyUp)

let isJumping = false
let isGameOver = false;   
let position = 0;

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
  isJumping = true

  //setInterval - define intervalos
  //vamos utilizar a função setInterval para movimentar o dinossauro para cima
  let upInterval = setInterval(() => {    
    // Se a posição do dino estiver até 150 (emcima)
    if (position >= 200 ) {
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
      }, 20)//velocidade que o dino sobe e desce
    } else {//senão suba 
      //Pegar a posição do dino e adicionar 20 (subir)
      position += 20;
      //adicionar ao estilo css bottom do dino a nova posicao dele + px
      dino.style.bottom = position + 'px';
    }
  }, 20)
}

//função criar cactus
function createCactus() {
  //criamos um elemento na div
  const cactus = document.createElement('div');
  //posição do cactus
  let cactusPosition = 1000;//posição do cactus
  let randomTime = Math.random() * 6000;//gera numero aleatório de cactus

  if (isGameOver) return;
  //adicionamos uma classe ao elemento da div
  cactus.classList.add('cactus');
  //pegamos o background e adicionamos uma filho a ele, a div cactus
  background.appendChild(cactus);
  //pegamos a esquerda do cactos e posicionamos ele
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {// se o cactus sai r totalmente da tela
      //limpar o intervalo
      clearInterval(leftTimer);
      //remover o cactus
      background.removeChild(cactus);
      // se a posição do cactus não saiu da tela E, menor que 60 E a posição do dino menor que 60
      //ele está na posição do dino
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      //insere tag gameOver
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {//se o cactus não sair da tela, continua se movimentando
      cactusPosition -= 5 ;//velocidade que ele se move para a esquerda
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);
  //executa uma função após um determinado tempo
  //função(nome_função, tempo)
  setTimeout(createCactus, randomTime);
}
//criamos o cactus
createCactus();