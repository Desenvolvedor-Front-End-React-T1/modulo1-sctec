// ESTAÇÃO 1 — AgroCâmbio: mostrar a COTAÇÃO do dólar do dia (AwesomeAPI).
// Preencha o TODO (a função buscarCotacao). As partes (PRONTO) podem ficar como estão.
// Gabarito (resposta) na subpasta: gabarito/
//
// API pública (GET, sem chave): https://economia.awesomeapi.com.br/json/last/USD-BRL
// O PULO DESTA ESTAÇÃO: o valor vem como TEXTO ("5.4321"), não número.
// Antes de mostrar, vira número com Number() e formata com Intl → "R$ 5,43".

// --- referências do HTML (PRONTO — seleção por id = getElementById) ---
const valorDolar = document.getElementById("valor-dolar");
const nomeMoeda = document.getElementById("nome-moeda");
const status = document.getElementById("status");
const btnAtualizar = document.getElementById("btn-atualizar");

// formatador de moeda pt-BR: 5.4321 → "R$ 5,43" (PRONTO — criado uma vez, reusado sempre)
const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// STATUS acessível (PRONTO): escreve no #status (tem aria-live) e troca a cor.
function mostrarStatus(mensagem, tipo) {
  status.textContent = mensagem;
  status.className = ""; // limpa modificadores antigos
  if (tipo === "carregando") status.classList.add("status--carregando");
  if (tipo === "erro") status.classList.add("status--erro");
  if (tipo === "sucesso") status.classList.add("status--sucesso");
}

// TODO — BUSCAR A COTAÇÃO com os 3 ESTADOS (mesmo molde do buscarClima de hoje).
// Roteiro:
//   1) ESTADO carregando:  mostrarStatus("Carregando cotação…", "carregando")
//   2) try {
//        - const resposta = await fetch(URL_DA_API)
//        - if (!resposta.ok) throw new Error("HTTP " + resposta.status)   // erro de HTTP
//        - const dados = await resposta.json()
//        - const valor = Number(dados.USDBRL.bid)         // ⬅️ O PULO: texto "5.43" → número
//        - valorDolar.textContent = formatador.format(valor)   // número → "R$ 5,43"
//        - nomeMoeda.textContent  = dados.USDBRL.name
//        - mostrarStatus("Atualizado agora.", "sucesso")  // ESTADO sucesso
//      } catch (erro) {
//        - mostrarStatus("Não foi possível carregar a cotação.", "erro")  // ESTADO erro
//      }
//   URL_DA_API = "https://economia.awesomeapi.com.br/json/last/USD-BRL"
//   (atenção: a chave no JSON vem SEM o "-" do endpoint → dados.USDBRL)
async function buscarCotacao() {
  // escreva aqui
}

// --- ligações (PRONTO) ---
btnAtualizar.addEventListener("click", buscarCotacao);

// 1ª carga ao abrir a página (PRONTO)
buscarCotacao();
