function login() {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    alert("Nenhum usuário cadastrado");
    return;
  }

  if (email === usuario.email && senha === usuario.senha) {
    alert("Login realizado com sucesso!");
  } else {
    alert("Email ou senha incorretos");
  }
}

if (email === usuario.email && senha === usuario.senha) {
    // salva que o usuário está logado
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    // redireciona para a página principal
    window.location.href = "index.html";
  } else {
    alert("Email ou senha incorretos");
  }
