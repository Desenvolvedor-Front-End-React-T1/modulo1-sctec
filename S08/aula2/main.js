console.log('main.js')

const btnConectar = document.getElementById('btn-conectar')
const btnEsqueciSenha = document.getElementById('btn-esqueci-senha')
const spanMensagem = document.querySelector('#mensagem') 
// CAPTURAR O VALOR DIGITADO DOS INPUTS
let email = 'yan@mail.com'
let senha = '123456'

// const botoes = document.querySelectorAll('button') // Aqui retorna varios itens
{/* <button id="btn-conectar" class="button button-active">Conectar</button> */}

// console.log(btnConectar)
spanMensagem.textContent = ''

btnConectar.addEventListener('click', (event) => {
    if (email === 'yan@mail.com' && senha === '12345') {
        spanMensagem.textContent = 'Conexão realizada com sucesso!'
    } else {
        spanMensagem.textContent = 'Email ou senha incorretos!'
    }
})

btnEsqueciSenha.addEventListener('click', (event) => {
    console.log('Clicou no botão esqueci a senha')
})