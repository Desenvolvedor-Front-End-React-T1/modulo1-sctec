// ESTAÇÃO 3 — Conecta RH: painel de EQUIPE com fotos (Random User).
// Preencha o TODO (a função carregarEquipe). As partes (PRONTO) podem ficar como estão.
// Gabarito (resposta) na subpasta: gabarito/
//
// API pública (GET, sem chave): https://randomuser.me/api/?results=6&nat=br
// Devolve { results: [...] } com nome, e-mail e foto.
// O PULO DESTA ESTAÇÃO: montar cada card com createElement (S08), nunca innerHTML
// com dado de terceiros (textContent ESCAPA o conteúdo — montagem segura).

// --- referências do HTML (PRONTO — seleção por id = getElementById) ---
const listaEquipe = document.getElementById("lista-equipe");
const status = document.getElementById("status");
const btnCarregar = document.getElementById("btn-carregar");

// STATUS acessível (PRONTO): escreve no #status (tem aria-live) e troca a cor.
function mostrarStatus(mensagem, tipo) {
  status.textContent = mensagem;
  status.className = ""; // limpa modificadores antigos
  if (tipo === "carregando") status.classList.add("status--carregando");
  if (tipo === "erro") status.classList.add("status--erro");
  if (tipo === "sucesso") status.classList.add("status--sucesso");
}

// monta UM card a partir de um objeto "pessoa" (PRONTO — createElement, não innerHTML)
function criarCard(pessoa) {
  const item = document.createElement("li");
  item.classList.add("membro-card");

  const foto = document.createElement("img");
  foto.classList.add("membro-foto");
  foto.src = pessoa.picture.medium;
  foto.alt = "Foto de " + pessoa.name.first + " " + pessoa.name.last; // alt informativo (a11y)

  const dados = document.createElement("div");
  dados.classList.add("membro-dados");

  const nome = document.createElement("span");
  nome.classList.add("membro-nome");
  nome.textContent = pessoa.name.first + " " + pessoa.name.last;

  const email = document.createElement("span");
  email.classList.add("membro-email");
  email.textContent = pessoa.email;

  dados.appendChild(nome);
  dados.appendChild(email);

  // ⭐ TODO (estrela, opcional): adicione aqui um botão "Copiar e-mail" que usa a
  //    Browser API Clipboard — navigator.clipboard.writeText(pessoa.email) — dentro de
  //    try/catch (ela também pode falhar). Dê um aria-label ao botão e dados.appendChild(botao).

  item.appendChild(foto);
  item.appendChild(dados);
  return item;
}

// TODO — CARREGAR A EQUIPE com os 3 ESTADOS (mesmo molde do buscarClima de hoje).
// Roteiro:
//   1) ESTADO carregando:  mostrarStatus("Carregando equipe…", "carregando")
//      e limpe a lista antes de redesenhar:  listaEquipe.innerHTML = ""
//   2) try {
//        - const resposta = await fetch("https://randomuser.me/api/?results=6&nat=br")
//        - if (!resposta.ok) throw new Error("HTTP " + resposta.status)   // erro de HTTP
//        - const dados = await resposta.json()
//        - dados.results.forEach(function (pessoa) {
//            listaEquipe.appendChild(criarCard(pessoa));   // createElement, não innerHTML
//          });
//        - mostrarStatus("", "sucesso")                    // ESTADO sucesso (limpa a mensagem)
//      } catch (erro) {
//        - mostrarStatus("Não foi possível carregar a equipe.", "erro")  // ESTADO erro
//      }
async function carregarEquipe() {
  // escreva aqui
}

// --- ligação (PRONTO) ---
btnCarregar.addEventListener("click", carregarEquipe);
