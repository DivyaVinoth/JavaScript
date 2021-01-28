//Values and Variables

const country = "USA";
const continent = "North America";
let population =32;

console.log(country);
console.log(continent);
console.log(population);


//Data Types

const isIsland= false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var

language = "English";

//Basic Operators

console.log(population = population / 2);
console.log(population++);
console.log(population > 6);
console.log(population < 33);

const description= country + " is in" + continent + ", and its"+ population +  " million people speak " + language ;
console.log(description);

//Strings and Template Literals

const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}` ;
console.log(descriptionNew);

//Taking Decisions: if / else Statements

if(population > 33){
  console.log(`${country} population is above average.`);
} else {
  console.log(`${country} population is ${population} million below average.`);
}

//Type Conversion and Coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


//Equality Operators: == vs. ===
//Number(prompt(`How many neighbour countries does your country have?`));
const numNeighbours = 4;
if (numNeighbours === 1){
  console.log(`Only 1 border`);
} else if (numNeighbours > 1){
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}


//Logical Operators

if((language === `English`) && (population < 50) && (!isIsland)){
  console.log(`You should live in ${country}! :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

//The switch Statement

switch(language){
  case `chinese`:
  case `mandarin`:
    console.log(`Most number of native speakers!`);
    break;
  case `spanish`:
    console.log(`2nd place in the number of native speakers`);
    break;
  case `English`:
    console.log(`3rd place`);
    break;
  case `hindi`:
    console.log(`Number 4`);
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great Language :)`);
    break;
}

//The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population > 33 ? `above` : `below`} average`);
