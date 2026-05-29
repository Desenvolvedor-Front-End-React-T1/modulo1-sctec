// Lista de frutas usada em todos os exemplos práticos
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga", "Abacaxi", "Pera", "Melancia"];

// Funções que executam cada método de array.
// Recebem o valor digitado pelo usuário e retornam o texto do resultado.
const exemplos = {
  find(valor) {
    const letra = valor.toLowerCase();
    const resultado = frutas.find((fruta) => fruta.toLowerCase().startsWith(letra));
    return `find() → ${resultado !== undefined ? resultado : "undefined (nenhuma fruta encontrada)"}`;
  },

  filter(valor) {
    const texto = valor.toLowerCase();
    const resultado = frutas.filter((fruta) => fruta.toLowerCase().includes(texto));
    return `filter() → [${resultado.join(", ")}]  (${resultado.length} resultado(s))`;
  },

  map(valor) {
    const sufixo = valor || " ✔";
    const resultado = frutas.map((fruta) => fruta + sufixo);
    return `map() → [${resultado.join(", ")}]`;
  },

  reduce() {
    const total = frutas.reduce((acumulador, fruta) => acumulador + fruta.length, 0);
    return `reduce() → ${total} letras somando todas as ${frutas.length} frutas`;
  },

  forEach() {
    let texto = "";
    frutas.forEach((fruta, indice) => {
      texto += `${indice + 1}. ${fruta}\n`;
    });
    return `forEach() →\n${texto.trim()}`;
  },

  some(valor) {
    const texto = valor.toLowerCase();
    const existe = frutas.some((fruta) => fruta.toLowerCase().includes(texto));
    return `some() → ${existe} (${existe ? "existe ao menos uma" : "nenhuma corresponde"})`;
  },

  every(valor) {
    const min = Number(valor);
    const todas = frutas.every((fruta) => fruta.length > min);
    return `every() → ${todas} (todas têm mais de ${min} letras?)`;
  },

  includes(valor) {
    const existe = frutas.includes(valor);
    return `includes("${valor}") → ${existe} (comparação exata, sensível a maiúsculas/acentos)`;
  },

  findIndex(valor) {
    const letra = valor.toLowerCase();
    const indice = frutas.findIndex((fruta) => fruta.toLowerCase().startsWith(letra));
    return `findIndex() → ${indice} ${indice === -1 ? "(não encontrada)" : `(fruta: ${frutas[indice]})`}`;
  },

  sort(valor) {
    // [...frutas] cria uma cópia, pois sort() altera o array original
    const copia = [...frutas];
    if (valor === "desc") {
      copia.sort((a, b) => b.localeCompare(a));
    } else if (valor === "tamanho") {
      copia.sort((a, b) => a.length - b.length);
    } else {
      copia.sort((a, b) => a.localeCompare(b));
    }
    return `sort() → [${copia.join(", ")}]`;
  },
};

// Liga cada bloco .exemplo da página à sua função correspondente
document.querySelectorAll(".exemplo").forEach((bloco) => {
  const metodo = bloco.dataset.metodo;
  const lista = bloco.querySelector(".frutas-lista");
  const campo = bloco.querySelector("input, select");
  const botao = bloco.querySelector("button");
  const saida = bloco.querySelector("output");

  // Mostra a lista de frutas no topo de cada exemplo
  lista.innerHTML = "Lista: " + frutas.map((f) => `<span>${f}</span>`).join("");

  // Estado inicial do resultado
  saida.textContent = "O resultado aparecerá aqui...";
  saida.classList.add("vazio");

  function executar() {
    const valor = campo ? campo.value.trim() : "";
    saida.textContent = exemplos[metodo](valor);
    saida.classList.remove("vazio");
  }

  botao.addEventListener("click", executar);

  // Permite testar apertando Enter dentro do campo de texto
  if (campo && campo.tagName === "INPUT") {
    campo.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter") executar();
    });
  }
});
