document.addEventListener("DOMContentLoaded", () => {
  const calcular = document.getElementById("calcular");
  calcular.addEventListener("click", calcularIMC);
});

function calcularIMC() {
  const nome = document.getElementById("nome").value.trim();
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const resultado = document.getElementById("resultado");

  if (!nome || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      resultado.textContent = "Preencha todos os campos corretamente!";
      return;
   }

  const valorIMC = calcularValorIMC(peso, altura);
  const classificacao = obterClassificacaoIMC(valorIMC);

  resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
}

function calcularValorIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

function obterClassificacaoIMC(imc) {
  if (imc < 18.5) return "abaixo do peso.";
  if (imc < 25) return "com peso ideal.";
  if (imc < 30) return "acima do peso ideal.";
  if (imc < 35) return "com obesidade grau I, procure uma atividade física de sua preferência.";
  if (imc < 40) return "com obesidade grau II, procure um médico especialista.";
  return "com obesidade grau III, procure urgentemente um médico especialista.";
}