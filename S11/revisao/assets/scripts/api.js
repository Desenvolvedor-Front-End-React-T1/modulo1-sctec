console.log("api.js");

const dadosCep = document.getElementById("dados-cep");

// async/await

async function consomeAPI(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  console.log(dados);
  renderizarDados(dados);
}

function renderizarDados(infos) {
  dadosCep.innerHTML = `
   <p>CEP: ${infos.cep}</p>
   <p>Logradouro: ${infos.logradouro}</p>
   <p>Bairro: ${infos.bairro}</p>
   <p>Cidade: ${infos.localidade}</p>
   <p>Estado: ${infos.uf}</p>
  `;
}

//consomeAPI(13271450);

async function dadosAPIHarryPotter() {
  const url = "https://hp-api.onrender.com/api/characters";

  const resposta = await fetch(url);
  const dados = await resposta.json();

  console.log(dados[0].image);

  dadosCep.innerHTML = `<img src=${dados[0].image}>`;
  //renderizarDados(dados);
}

dadosAPIHarryPotter();
