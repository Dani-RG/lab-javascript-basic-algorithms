// Iteration 1: Names and Input
const hacker1 = "Daniel";
    console.log (`The driver's name is ${hacker1}`);
const hacker2 = "Arturo";
    console.log (`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3.1: Loops
let newName = "";
for (let i=0 ; i < hacker1.length ; i++){
    if (newName.length-[i] < hacker1.length) {
        newName += hacker1[i] + " ";
    }
}
console.log(`${newName.toUpperCase()}`);
// Iteration 3.2: Loops
let reversedName = "";
for (let i = hacker2.length-1 ; i >= 0 ; i--){
    reversedName += hacker2[i];
}
console.log(reversedName)
// Iteration 3.3: Loops
if (hacker1.length > hacker2.length) {
    console.log(`The driver's name goes first.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }