
// capturar os dados
const screenOne = document.querySelector('#screenOne');
const screenTwo = document.querySelector('#screenTwo');
const changeImg = document.querySelector('.changeImg');
const backScreen = document.querySelector('.backScreen');
const cardMessage = document.querySelector('.card')

// Evento
changeImg.addEventListener('click', changeScreen);
backScreen.addEventListener('click', changeScreen);


// Funções
function changeScreen(e){
  e.preventDefault();
  screenOne.classList.toggle('hide');
  screenTwo.classList.toggle('hide');

  message();
}

function message(){
  let messages = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O bom-senso vale mais do que muito conhecimento.',
    'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
    'São os nossos amigos que nos ensinam as mais valiosas lições.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',
    'A adversidade é um espelho que reflete o verdadeiro eu.',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    'Uma bela flor é incompleta sem as suas folhas.',
    'Sem o fogo do entusiasmo, não há o calor da vitória.',
    'O riso é a menor distância entre duas pessoas.',
    'Os defeitos são mais fortes quando o amor é fraco.',
    'Amizade e Amor são coisas que se unem num piscar de olhos.',
    'Surpreender e ser surpreendido é o segredo do amor.',
    'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
    'A paciência na adversidade é sinal de um coração sensível.',
    'A sorte favorece a mente bem preparada.',
    'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
    'Quem olha para fora sonha; quem olha para dentro acorda.',
  ];

  let randomMessages = Math.round(Math.random() * messages.length);
  let randomPhrase = messages[randomMessages];

  cardMessage.innerHTML = 
  `
    <p>
      ${randomPhrase}
    </p>
  `    
}


