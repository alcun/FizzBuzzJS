//solves game of FIZZBUZZ using while loop and if else syntax
//see README.md for rules of game

let i = 1;

do {
if (i % 15 === 0) {
  console.log('FIZZBUZZ');
}

else if (i % 3 === 0) {
  console.log('FIZZ');
}

else if (i % 5 === 0) {
  console.log('BUZZ');
}

else{
    console.log(i);
}

i += 1;

}


while (i < 101);
