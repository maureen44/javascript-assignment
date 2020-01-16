/**
* Maureen Kariuki
* 01/15/2020
* /328/javascript-assignment/js2.js
*
* A program to determine if a number between 1 to 100
* is either divisible by 3 or 5 and return a number or a statement.
 */

let number = 0;
for (number = 0; number <= 100; number++) {

    if (number % 3 == 0 && number % 5 == 0) {
        console.log("HeeHaw!");

    } else if (number % 3 == 0) {
        console.log("Hee!");

    } else if (number % 5 == 0) {
        console.log("Haw!");

    } else {
        console.log(number);

    }
}