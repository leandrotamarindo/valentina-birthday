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

function verificarEnter1(event) {
  if (event.key === "Enter") {
    password1();
  }
}

function verificarEnter2(event) {
  if (event.key === "Enter") {
    password2();
  }
}

function verificarEnter3(event) {
  if (event.key === "Enter") {
    password3();
  }
}

function verificarEnter4(event) {
  if (event.key === "Enter") {
    password4();
  }
}

function verificarEnter5(event) {
  if (event.key === "Enter") {
    password5();
  }
}

function password1() {
    const senha = document.getElementById("senha1").value;
    console.log(senha);
    if(senha == "kendrick lamar"){
        document.getElementById("areaMensagem").innerHTML = "<p>Conseguiiiiuuu</p>";
        document.getElementById("areaBotao").innerHTML = "<button onclick='mostrar()'>Clique</button>";
    } 
    else document.getElementById("areaMensagem").innerHTML = "<p>Tenta de novo fia</p>"
}

function password2() {
    const senha = document.getElementById("senha2").value;
    console.log(senha);
    if(senha == "paisanduuu"){
        document.getElementById("areaMensagem").innerHTML = "<p>Bem demaisss</p>";
        document.getElementById("areaBotao").innerHTML = "<button onclick='mostrar()'>Clique</button>";
    } 
    else document.getElementById("areaMensagem").innerHTML = "<p>Tenta de novo fia</p>"
}

function password3() {
    const senha = document.getElementById("senha3").value;
    console.log(senha);
    if(senha == "japão foi bom demais"){
        document.getElementById("areaMensagem").innerHTML = "<p>Falta poucooo</p>";
        document.getElementById("areaBotao").innerHTML = "<button onclick='mostrar()'>Clique</button>";
    } 
    else document.getElementById("areaMensagem").innerHTML = "<p>Tenta de novo fia</p>"
}

function password4() {
    const senha = document.getElementById("senha4").value;
    console.log(senha);
    if(senha == "zuriscreudo"){
        document.getElementById("areaMensagem").innerHTML = "<p>Hi Hi Hi Haa</p>";
        document.getElementById("areaBotao").innerHTML = "<button onclick='mostrar()'>Clique</button>";
    } 
    else document.getElementById("areaMensagem").innerHTML = "<p>Tenta de novo fia</p>"
}

function password5() {
    const senha = document.getElementById("senha5").value;
    console.log(senha);
    if(senha == "asdfghjkli"){
        document.getElementById("areaMensagem").innerHTML = "<p>ACABOOOUUUU</p>";
        document.getElementById("areaBotao").innerHTML = "<button onclick='mostrar()'>Clique</button>";
    } 
    else document.getElementById("areaMensagem").innerHTML = "<p>Tenta de novo fia</p>"
}