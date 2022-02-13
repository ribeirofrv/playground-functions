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

// Desafio 8 - Sorry lint, I tried
function fizzBuzz(numbers) {
  let fizzArray = [];

  for (const index in numbers) {   
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      fizzArray.push('fizzBuzz');
    } else if (numbers[index] % 5 === 0) {
      fizzArray.push('buzz');
    } else if (numbers[index] % 3 === 0){
      fizzArray.push('fizz');
    } else {
      fizzArray.push('bug!');
    }
  }
  return fizzArray;
}

// Desafio 9
function encode(phrase) {
  let code = phrase.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return code;
}
function decode(phrase) {
  let code = phrase.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return code;
}

// Desafio 10
function techList(tech, name) {
  let listOfTechnologies = [];

  tech.sort();

  for (let key = 0; key < tech.length; key += 1) {
    listOfTechnologies.push({ tech: tech[key], name });
  }

  if (listOfTechnologies.length === 0) return 'Vazio!';

  return listOfTechnologies;
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
