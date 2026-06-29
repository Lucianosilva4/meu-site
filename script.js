//
// ======================================
// PORTFÓLIO FRONT-END - LUCAS
// Engenharia de Software - Unicesumar
// ======================================
//

//
// 1️⃣ EFEITO INTERATIVO: Mensagem de boas-vindas
//
function mensagemBoasVindas() {
  alert(
    "Olá, seja bem-vindo ao meu Portfólio!\n\n" +
    "Este site foi desenvolvido utilizando HTML5, CSS3 e JavaScript como parte da disciplina de Programação Front-End da Unicesumar.\n\n" +
    "Obrigado pela visita! 🚀"
  );
}
//
// 2️⃣ EFEITO INTERATIVO: Validação do formulário
//
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formContato");

  // Evita erro caso a página não tenha formulário
  if (form) {

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let nome = document.getElementById("nome").value.trim();
      let email = document.getElementById("email").value.trim();
      let mensagem = document.getElementById("mensagem").value.trim();
      let erro = document.getElementById("erro");

      // Validação simples (requisito da atividade)
      if (nome === "" || email === "" || mensagem === "") {
        erro.textContent = "⚠️ Preencha todos os campos!";
        erro.style.color = "red";
        return;
      }

      erro.textContent = "✔ Mensagem enviada com sucesso!";
      erro.style.color = "green";

      form.reset();
    });

  }

});

//
// 3️⃣ EFEITO INTERATIVO EXTRA: Botão voltar ao topo
//
document.addEventListener("DOMContentLoaded", function () {

  let botaoTopo = document.createElement("button");
  botaoTopo.innerHTML = "↑ Topo";
  botaoTopo.id = "btnTopo";

  document.body.appendChild(botaoTopo);

  // Estilo básico
  botaoTopo.style.position = "fixed";
  botaoTopo.style.bottom = "20px";
  botaoTopo.style.right = "20px";
  botaoTopo.style.padding = "10px";
  botaoTopo.style.cursor = "pointer";
  botaoTopo.style.display = "none";

  // Mostrar botão ao rolar
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      botaoTopo.style.display = "block";
    } else {
      botaoTopo.style.display = "none";
    }
  });

  // Ação do botão
  botaoTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});