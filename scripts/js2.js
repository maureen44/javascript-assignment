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
        //document.body.innerHTML = "HeeHaw!";
        window.alert("HeeHaw!");
    } else if (number % 3 == 0) {
        console.log("Hee!");
        //document.body.innerHTML = "Hee!";
        window.alert("Hee!");
    } else if (number % 5 == 0) {
        console.log("Haw!");
        //document.body.innerHTML = "Haw!";
        window.alert("Haw!");
    } else {
        console.log(number);
        //document.body.innerHTML = number;
        window.alert(number);
    }

}