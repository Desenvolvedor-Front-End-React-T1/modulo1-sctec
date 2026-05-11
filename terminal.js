const prompt = require('prompt-sync')();
// Na pasta do projeto: npm install prompt-sync

let nome = prompt('Qual seu nome?');

console.log(`Olá, ${nome}! Bem-vindo ao terminal!`);