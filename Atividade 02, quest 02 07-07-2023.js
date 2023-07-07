//Atividade 02, quest 02
var temp = [54, 78, 56, 98, 0, 12, 11, 37];

function converterParaCelsius(tempFahrenheit) {
  return (tempFahrenheit - 32) / 1.8;
}

for (var i = 0; i < temp.length; i++) {
  var tempFahrenheit = temp[i];
  var tempCelsius = converterParaCelsius(tempFahrenheit);
  console.log(tempFahrenheit + "°F equivale a " + tempCelsius.toFixed(2) + "°C");
}


