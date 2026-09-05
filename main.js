function fugir() {
            const botao = document.querySelector('.botao-fujao');
            
            // Calcula a largura e altura máxima da tela visível menos o tamanho do botão
            const larguraTela = window.innerWidth - botao.offsetWidth;
            const alturaTela = window.innerHeight - botao.offsetHeight;
            
            // Gera uma posição aleatória baseada no tamanho da tela
            const novoX = Math.floor(Math.random() * larguraTela);
            const novoY = Math.floor(Math.random() * alturaTela);
            
            // Aplica as novas posições ao botão
            botao.style.left = novoX + 'px';
            botao.style.top = novoY + 'px';
            
            // Remove o transform inicial para não distorcer a nova posição
            botao.style.transform = 'none';
        }

function iniciarMusica() {
    const musica = document.getElementById('minhaMusica');
    musica.play().catch(error => {
        console.log("O navegador barrou o autoplay, aguardando clique real.");
    });
    
    // Remove o evento após tocar a primeira vez
    document.removeEventListener('click', iniciarMusica);
}
document.addEventListener('click', iniciarMusica);

function aumentar() {
    const img = document.getElementById('minhaImagem');
    img.style.height = '120px'; // Nova altura ao passar o mouse
}

function diminuir() {
    const img = document.getElementById('minhaImagem');
    img.style.height = '100px'; // Volta à altura original quando o mouse sai
}

function verificarEnter(event) {
  if (event.key === "Enter") {
    password();
  }
}

function mostrar(){
    console.log("fala meu fio");
}

function password() {
    const senha = document.getElementById("senha").value;
    console.log(senha);
    if(senha == "a"){
        document.getElementById("areaMensagem").innerHTML = "<p>Conseguiiiiuuu</p>";
        document.getElementById("areaBotao").innerHTML = "<button onclick='mostrar()'>Clique</button>";
    } 
    else document.getElementById("areaMensagem").innerHTML = "<p>Tenta de novo fia</p>"
}