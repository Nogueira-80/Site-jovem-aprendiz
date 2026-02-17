function login() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const senha = document.getElementById("password").value.trim();

  if (email === "" || senha === "") {
    alert("Preencha todos os campos");
    return;
  }

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    alert("Nenhum usuário cadastrado");
    return;
  }

  if (
    email === usuario.email.toLowerCase() &&
    senha === usuario.senha
  ) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    window.location.href = "pag.html";
  } else {
    alert("Email ou senha incorretos");
  }
}
