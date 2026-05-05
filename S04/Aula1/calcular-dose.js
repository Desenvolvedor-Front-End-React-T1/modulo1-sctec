const prompt = require('prompt-sync')();

const pesoInput = prompt("Digite o peso do paciente em kg:"); 
const doseInput = prompt("Digite a dose prescrita em mg/kg:");
const concentracaoInput = prompt("Digite a concentração do medicamento em mg/ml:");

// Peso invalido -> peso muito baixo ou um valor realmente invalido
const peso = parseFloat(pesoInput);
const dose = parseFloat(doseInput);
const concentracao = parseFloat(concentracaoInput);

function calcularVolume(peso, dose, concentracao) {
  const volume = (peso * dose) / concentracao;
  return volume;
}

// const calcularVolume = (peso, dose, concentracao) => (peso * dose) / concentracao

const volume = calcularVolume(peso, dose, concentracao);
console.log(`O volume de medicamento para um paciente de ${peso.toFixed(2)}
 kg com uma dose de ${dose.toFixed(2)} mg/kg e uma concentração de ${concentracao.toFixed(2)} 
 mg/ml é de ${volume.toFixed(2)} ml.`);