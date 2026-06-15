const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;
  const password = document.getElementById("password").value;

  /*
  console.log("Email:", email);
  console.log("CPF:", cpf);
  console.log("Password:", password);
  */

  if (password.length < 8) {
    message.textContent = `A senha deve conter pelo menos 8 caracteres.`;
    message.classList.remove("text-success");
    message.classList.add("text-danger");

    return;
  }

  console.log("Formulário enviado com sucesso!");

  message.textContent = `Formulário enviado com sucesso!`;
  message.classList.remove("text-danger");
  message.classList.add("text-success");

  // regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  // O que esse regex faz?
  // ^ - Início da string
  // (?=.*[A-Za-z]) - Verifica se há pelo menos uma letra (maiúscula ou minúscula)
  // (?=.*\d) - Verifica se há pelo menos um dígito
  // [A-Za-z\d]{8,} - Verifica se a string tem pelo menos 8 caracteres, que podem ser letras ou dígitos
  // $ - Fim da string
});
