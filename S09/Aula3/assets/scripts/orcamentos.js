/*
Camada nativa: nome, e-mail e telefone obrigatórios (required + tipos corretos)
Camada JS (regras que o HTML não conhece):
Um tipo de pacote precisa estar selecionado — senão, mensagem de erro específica em vermelho
Telefone com pelo menos 10 dígitos (.length)
Quando tudo estiver válido: mensagem de sucesso em verde + resumo do pacote (aproveite o código de ontem)
Lembre da simetria do classList: cada ramo adiciona a sua cor e remove a outra
Bônus: contador de caracteres nas observações (evento input)
Bônus 2: estilizar as mensagens de erro junto de cada campo, como nos sites profissionais.

*/

const formOrcamento = document.getElementById("form-orcamento");
const resumo = document.getElementById("resumo");
const contador = document.getElementById("contador");

formOrcamento.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cidade = document.getElementById("cidade").value;
  const dataIda = document.getElementById("data-ida").value;
  const dataVolta = document.getElementById("data-volta").value;
  const observacoes = document.getElementById("observacoes").value;

  if (telefone.length < 10) {
    alert("Quantidade de caracteres do telefone inválida! Menor que 10!");
  }

  observacoes.addEventListener("input", () => {
    contador.textContent = `${observacoes.value.length}/200 caracteres`;
  });

  // Checkbox
  const extras = [];

  const ingresso = document.getElementById("ingresso").checked;
  const seguro = document.getElementById("seguro");
  const traslado = document.getElementById("traslado").checked;

  if (ingresso) {
    extras.push("Ingresso");
  }
  if (seguro.checked) {
    extras.push("Seguro");
  }
  if (traslado) {
    extras.push("Traslado");
  }

  // Radio Button
  const pacoteEscolhido = document.querySelector(
    'input[name="pacote"]:checked',
  );

  console.log("Pacote escolhido", pacoteEscolhido);

  if (pacoteEscolhido == null) {
    alert("Selecione um pacote!", pacoteEscolhido);
  }

  console.log(nome);
  console.log(email);
  console.log(telefone);
  console.log(cidade);
  console.log(dataIda);
  console.log(dataVolta);

  resumo.innerHTML = `
        <h3>Resumo do pedido</h3>
        <p><strong>Cliente:</strong> ${nome} (${email} / ${telefone})</p>
        <p><strong>Destino:</strong> ${cidade}</p>
        <p><strong>Pacote:</strong> ${pacoteEscolhido.value}</p>
        <p><strong>Extras:</strong> ${extras}</p>
        <p><strong>Período:</strong> ${dataIda} até ${dataVolta}</p>
        <p><strong>Observações:</strong> ${observacoes}</p>
    `;
});
