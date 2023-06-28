// Определение пользовательской функции для расчета по формуле
function calculateFormula(a, b, c) {
    var result = (Math.pow(b, 2) - Math.PI) / (Math.abs(a - 4)) + 7 * Math.sqrt(c + Math.PI);
    return result;
  }
  
  // Вызов пользовательской функции и получение результата
  var a = 5;
  var b = 3;
  var c = 2;
  var formulaResult = calculateFormula(a, b, c);
  
  // Отображение результатов в HTML-документе
  document.write("<h1>Результат расчета формулы:</h1>");
  document.write("<p>Значение переменной a: " + a + "</p>");
  document.write("<p>Значение переменной b: " + b + "</p>");
  document.write("<p>Значение переменной c: " + c + "</p>");
  document.write("<p>Результат формулы: " + formulaResult + "</p>");
  