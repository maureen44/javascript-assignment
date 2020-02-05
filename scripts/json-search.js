/***
 * Maureen Kariuki
 * 02/05/2020
 *
 * IT 328
 *
 */


var people = {
    "people":
    [{
        "name": "Jane Doe", "sex": "female", "born": 1876, "died": 1956,
        "fatherFirst": "Petrus", "fatherLast": "de Milliano", "motherFirst": "Sophia", "motherLast": "van Damme"
    },
    {
        "name": "Jane Ramirez", "sex": "female", "born": 1898, "died": 19568,
        "fatherFirst": "Jose", "fatherLast": "Lozaro", "motherFirst": "Maria", "motherLast": "Rosa"
    },
    {
        "name": "John Roger", "sex": "male", "born": 1899, "died": 1970,
        "fatherFirst": "Simion", "fatherLast": "Weldier", "motherFirst": "Annie", "motherLast": "Mark"
    },
    {
        "name": "Hellen Meyer", "sex": "female", "born": 1901, "died": 1980,
        "fatherFirst": "Anthony", "fatherLast": "James", "motherFirst": "Susan", "motherLast": "Black"
    },
    {
        "name": "Brian McKenzee", "sex": "male", "born": 1925, "died": 2000,
        "fatherFirst": "Charles", "fatherLast": "Brown", "motherFirst": "Jane", "motherLast": "Fisher"
    }]
};

document.getElementById('search').onclick = search;

function search() {
    document.getElementById('results').innerHTML = "";
    var elementInput = document.getElementById('name').value;
    for (let i = 0; i < people.people.length; i++) {
        var currentPerson = people.people[i];
        if (currentPerson.name.toLowerCase().includes(elementInput.toLowerCase()))
        {
            var resultOutput = document.getElementById('results').innerHTML += "Name: " + currentPerson.name + "<br>" +
                "Sex: " + currentPerson.sex + "<br>" + "Born: " + currentPerson.born + "<br>" + "Died: " + currentPerson.died + "<br>"
                + "Father's First Name: " + currentPerson.fatherFirst + "<br>" + "Father's Last Name: " + currentPerson.fatherLast + "<br>"
                + "Mother's First Name: " + currentPerson.motherFirst + "<br>" + "Mother's Last Name: " + currentPerson.motherLast + "<br>" + "<br>";


        }
    }

    if (document.getElementById('results').innerHTML === "")
    {
        document.getElementById('results').innerHTML = "No person found";
    }
}