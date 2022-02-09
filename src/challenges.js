// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ', string.length);
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  const maxNumber = Math.max(...arrayOfNumbers);
  let count = 0;
  for (const iterator of arrayOfNumbers) {
    if (maxNumber === iterator) count += 1;
  }
  return count;
}

// Desafio 7 (Math.abs -> valor ABSoluto)
function catAndMouse(mouse, cat1, cat2) {
  const cat1Distance = Math.abs(mouse - cat1);
  const cat2Distance = Math.abs(mouse - cat2);
  let result;

  if (cat1Distance === cat2Distance) {
    result = 'os gatos trombam e o rato foge';
  } else if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }

  return result;
}
console.log(catAndMouse());
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
