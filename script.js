const btn = document.getElementById("btn");

function imc() {
  const nome = document.getElementById("nome").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && peso !== "" && altura !== "") {
    const valorIMC = (peso / Math.pow(altura, 2)).toFixed(1);

    if (valorIMC < 16) {
      resultado.textContent = `${nome}, seu IMC é: ${valorIMC} - Desnutrição grave`;
    } else if (valorIMC === 16 || valorIMC < 17) {
      resultado.textContent = `${nome}, seu IMC é: ${valorIMC} - Desnutrição moderada`;
    } else if (valorIMC === 17 || valorIMC < 18.5) {
      resultado.textContent = `${nome}, seu IMC é: ${valorIMC} - Desnutrição leve`;
    } else if (valorIMC === 18.5 || valorIMC < 25) {
      resultado.textContent = `${nome}, seu IMC é: ${valorIMC} - Eutrófico`;
    } else if (valorIMC === 25 || valorIMC < 30) {
      resultado.textContent = `${nome}, seu IMC é: ${valorIMC} - Sobrepeso`;
    } else if (valorIMC === 30 || valorIMC < 35) {
      resultado.textContent = `${nome}, seu IMC é: ${valorIMC} - Obesidade grau I`;
    } else if (valorIMC === 35 || valorIMC < 40) {
      resultado.textContent = `${nome}, seu IMC é: ${valorIMC} - Obesidade grau II`;
    } else if (valorIMC === 40 || valorIMC > 40) {
      resultado.textContent = `${nome}, seu IMC é: ${valorIMC} - Obesidade grau III`;
    }
  } else {
    resultado.textContent = "Preencha todos os campos!";
  }
}

btn.addEventListener("click", imc);
