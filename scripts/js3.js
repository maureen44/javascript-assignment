/**
 * Maureen Kariuki
 * 01/23/2020
 * /328/javascript-assignment/js3.js
 *
 * A program to determine if a number between 1 to 100
 * is either divisible by 3 or 5 and return a number or a statement.
 */


let starter = 1;

function HeeHaw(number) {

    if (number < starter || isNaN(number)) {
        document.write("<br> Error! Wrong Entry! <br>");
        return;
    }
    //document.write(starter + "<br>");
    if (starter % 3 === 0 && starter % 5 === 0) {
        document.write("HeeHaw!" + "<br>");

    } else if (starter % 3 === 0) {
        document.write("Hee!" + "<br>");

    } else if (starter % 5 === 0) {
        document.write("Haw!" + "<br>");

    } else  {
        document.write(starter + "<br>");
    }
    if (starter < number) {
        starter += 1;
        HeeHaw(number);

    }


}
console.log(HeeHaw(-3));
console.log(HeeHaw( Number));
console.log(HeeHaw(33 / 11));
console.log(HeeHaw( -52 + 100));
console.log(HeeHaw( 10 - 5));
/*
let test1 = HeeHaw(50);
let test2 = HeeHaw(33);
let test3 = HeeHaw(-15);
let test4 = HeeHaw("number");
let test5 = HeeHaw(20);


console.log(test1);

console.log(test2);

console.log(test3);

console.log(test4);

console.log(test5);
*/



//HeeHaw("Maureen");
