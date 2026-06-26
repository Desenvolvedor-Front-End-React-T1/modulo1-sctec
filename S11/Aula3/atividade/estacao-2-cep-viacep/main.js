// ESTAÇÃO 2 — TransLog SC: autopreencher o ENDEREÇO pelo CEP (ViaCEP).
// Preencha o TODO (a função buscarCep). As partes (PRONTO) podem ficar como estão.
// Gabarito (resposta) na subpasta: gabarito/
//
// API pública (GET, sem chave): https://viacep.com.br/ws/<CEP>/json/
// O PULO DESTA ESTAÇÃO: a ViaCEP responde 200 OK MESMO para CEP que não existe,
// devolvendo { "erro": true } no corpo. Logo response.ok NÃO basta —
// é preciso checar também dados.erro (a IA esquece esse caso e deixa campos "undefined").

// --- referências do HTML (PRONTO — seleção por id = getElementById) ---
const inputCep = document.getElementById("input-cep");
const inputRua = document.getElementById("input-rua");
const inputBairro = document.getElementById("input-bairro");
const inputCidade = document.getElementById("input-cidade");
const inputUf = document.getElementById("input-uf");
const inputNumero = document.getElementById("input-numero");
const status = document.getElementById("status");

// STATUS acessível (PRONTO): escreve no #status (tem aria-live) e troca a cor.
function mostrarStatus(mensagem, tipo) {
  status.textContent = mensagem;
  status.className = ""; // limpa modificadores antigos
  if (tipo === "carregando") status.classList.add("status--carregando");
  if (tipo === "erro") status.classList.add("status--erro");
  if (tipo === "sucesso") status.classList.add("status--sucesso");
}

// preenche os campos a partir do objeto que a ViaCEP devolve (PRONTO)
function preencherEndereco(dados) {
  inputRua.value = dados.logradouro;
  inputBairro.value = dados.bairro;
  inputCidade.value = dados.localidade;
  inputUf.value = dados.uf;
}

// TODO — BUSCAR O CEP com os 3 ESTADOS. Roteiro:
//   0) limpe o CEP: const numeros = cep.replace(/\D/g, "")  (mantém só dígitos)
//      se numeros.length !== 8 → mostrarStatus("Informe um CEP com 8 dígitos.", "erro") e return
//   1) ESTADO carregando:  mostrarStatus("Buscando endereço…", "carregando")
//   2) try {
//        - const resposta = await fetch("https://viacep.com.br/ws/" + numeros + "/json/")
//        - if (!resposta.ok) throw new Error("HTTP " + resposta.status)   // erro de HTTP
//        - const dados = await resposta.json()
//        - if (dados.erro) { mostrarStatus("CEP não encontrado.", "erro"); return; }  // ⬅️ O PULO
//        - preencherEndereco(dados)                       // ESTADO sucesso
//        - mostrarStatus("Endereço preenchido.", "sucesso")
//        - inputNumero.focus()                            // leva o foco ao número (a API não traz)
//      } catch (erro) {
//        - mostrarStatus("Não foi possível buscar o CEP. Tente de novo.", "erro")  // ESTADO erro
//      }
async function buscarCep(cep) {
  // escreva aqui
}

// --- ligação (PRONTO): dispara ao SAIR do campo de CEP (evento blur) ---
inputCep.addEventListener("blur", function () {
  const cep = inputCep.value.trim();
  if (cep === "") return; // campo vazio: não busca
  buscarCep(cep);
});
