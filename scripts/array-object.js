/*
* Maureen Kariuki
* 01/29/2020
*
* IT 328
* A program that takes in an array as a parameter
* and returns an object
*  */

let input = [-1, 5, "cat", false, 10.2, true, "dog"];

function array_object(array) {
    let type = {};
    for (let i = 0; i < array.length; i++)
    {
        let types = typeof input[i] + "s";

        if (type.hasOwnProperty(types)) {
            type[types].push(input[i]);
        } else {
            type[types] = [];
            type[types].push(input[i]);
        }

    }
    return "var result = " + JSON.stringify(type, null) ;

}
document.write(array_object(input));
