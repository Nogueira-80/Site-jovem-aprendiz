const nav = document.querySelector("nav");
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuarioLogado) {
  nav.innerHTML += `
    <span style="margin-left:15px">👤 ${usuarioLogado.email}</span>
    <a href="#" id="btnSair" style="margin-left:10px">Sair</a>
  `;

  document.getElementById("btnSair").addEventListener("click", () => {
    localStorage.removeItem("usuarioLogado");
    window.location.reload();
  });

} else {
  nav.innerHTML += `<a href="index.html">Login</a>`;
}
