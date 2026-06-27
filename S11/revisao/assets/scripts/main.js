console.log("main.js");

const listaCidades = document.getElementById("cidades");

const cidades = [
  {
    nome: "Florianópolis",
    estado: "SC",
  },
  {
    nome: "Brusque",
    estado: "SC",
  },
  {
    nome: "Araranguá",
    estado: "SC",
  },
  {
    nome: "Mafra",
    estado: "SC",
  },
  {
    nome: "Valinhos",
    estado: "SP",
  },
];

localStorage.setItem("cidades", JSON.stringify(cidades));

const texto = localStorage.getItem("cidades");

const cidadesLocalStorage = JSON.parse(texto);

console.log(cidadesLocalStorage);
console.log(texto);

listaCidades.textContent = texto;

//const items = localStorage.getItem("previsaocerta:cidades");

//console.log(items);

//localStorage.setItem("aularevisao", "27/06/2026");

//localStorage.removeItem("previsaocerta:cidades");
//localStorage.removeItem("aularevisao");
