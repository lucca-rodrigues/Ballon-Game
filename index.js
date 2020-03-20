// 1 Criar balãoo
// 2 Estourar balão
// 3 carregar jogo

var pontuacao = 0;
var baloes = setInterval(criarBalao, 600); // Cria o balão a cada 1s

function criarBalao(){
  var balao = document.createElement("div");
  balao.setAttribute("class", "balao");

  var x = Math.floor(Math.random() * 600); // gera um número aleatório
  var y = Math.floor(Math.random() * 500);

  balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
  balao.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(balao); // Cria o balão no Body

}

function estourar(elementoclicado){
  document.body.removeChild(elementoclicado);
  pontuacao++;
  console.log('Estourou um balão')

  var score = document.getElementById('pontuacao');
  score.innerHTML = "pontuação total: " + pontuacao;
}

function iniciarJogo(){
  baloes;
}
function finalizarJogo(){
  clearInterval(baloes);
  alert("Jogo finalizado. Você fez " + pontuacao + " Pontos!");
}
