function calculateFormula(x, y) {
  var result = Math.log(Math.abs((y - Math.sqrt(Math.abs(x))) * (x - ((y) / (x + (Math.pow(x, 2) / 4))))));
  return result;
}

var x = 5; // Значение x
var y = 8; // Значение y

var resultElement = document.getElementById('result');
var calculatedResult = calculateFormula(x, y);

resultElement.textContent = 'Результат расчета: ' + calculatedResult;
