const formulario = document.getElementById("formCadastro");

const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");

const listaUsuarios = document.getElementById("listaUsuarios");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = campoNome.value;
    const email = campoEmail.value;

    const usuario = document.createElement("li");

    usuario.textContent = `${nome} - ${email}`;

    listaUsuarios.appendChild(usuario);

    formulario.reset();

});