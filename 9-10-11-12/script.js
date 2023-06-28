// Определение строковых переменных
var s1 = "Я - будущий программист";
var s2 = "У меня всё получится.";

// Определение длины строки s2
var lengthS2 = s2.length;
document.write("<h1>Длина строки s2: </h1>" + lengthS2 );

// Выделение 20-го символа в строке s1 и определение его ASCII-кода
var char20 = s1.charAt(19);
var asciiCode = char20.charCodeAt(0);
document.write("<p>20-й символ в строке s1: </p>" + char20);
document.write("<p>ASCII-код символа: </p>" + asciiCode);

// Замена всех встречающихся букв "у" на "!"
var replacedString = s2.replace(/у/g, "!");
document.write("<p>Замененная строка: </p>" + replacedString);
