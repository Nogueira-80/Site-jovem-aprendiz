 let stepAtual = 0;
const steps = document.querySelectorAll(".step");
const progress = document.getElementById("progress");
const form = document.getElementById("formCadastro");
const success = document.getElementById("success");

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
  progress.style.width = ((index + 1) / steps.length) * 100 + "%";
}

function nextStep() {
  if (!validarEtapa()) return;
  stepAtual++;
  showStep(stepAtual);
}

function prevStep() {
  stepAtual--;
  showStep(stepAtual);
}

function validarEtapa() {
  if (stepAtual === 0) {
    if (!nome.value || !email.value || !cpf.value) {
      alert("Preencha todos os campos");
      return false;
    }
  }

  if (stepAtual === 1) {
    if (senha.value !== confirmarSenha.value) {
      alert("As senhas não coincidem");
      return false;
    }
  }

  return true;
}

// Força da senha
function forcaSenha() {
  const senha = document.getElementById("senha").value;
  const forca = document.getElementById("forca");

  if (senha.length < 6) {
    forca.textContent = "Senha fraca";
    forca.style.color = "red";
  } else if (senha.match(/[A-Z]/) && senha.match(/[0-9]/)) {
    forca.textContent = "Senha forte";
    forca.style.color = "green";
  } else {
    forca.textContent = "Senha média";
    forca.style.color = "orange";
  }
}

// CPF com máscara
cpf.addEventListener("input", () => {
  cpf.value = cpf.value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
});

// Submit
form.addEventListener("submit", e => {
  e.preventDefault();

  const dados = {
    nome: nome.value,
    email: email.value,
    cpf: cpf.value
  };

  localStorage.setItem("cadastro", JSON.stringify(dados));

  form.style.display = "none";
  success.classList.remove("hidden");
});

