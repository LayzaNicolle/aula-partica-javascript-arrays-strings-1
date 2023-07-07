//Atividade 02, quest 01

var resultCalc = [];

for (var i = 1; i <= 10; i++) {
  var resultado = 5 * i;
  resultCalc.push(resultado);
}

var resultadosString = resultCalc.join(", ");

console.log(resultadosString);
