// Question 1
let to_verify = new Array(9);

for (var i = 0; i < to_verify.length; i++)
    to_verify[i] = new Array(9);

// End of question 1

// Question 2
// importing the statement table.
import { table_digits } from '../javascript_test_je1.js';
// function take a one dimenssional table as parametre and return a 2 dimension table.
function F11(to_check) {
    let toVerify = new Array(9);

    for (var i = 0; i < toVerify.length; i++)
        toVerify[i] = new Array(9);

    for(let i = 0; i < 9; i++) {
        let tmpNumbers = to_check[i].split(' ');
        for(let j = 0; j < 9; j++) {
            toVerify[i][j] = parseInt(tmpNumbers[j]);
        }
    }

    return toVerify;
}
// Creating the table to_verify
to_verify = F11(table_digits);
// End of question 2

// Question 3
// Display of a table in the HTML file
function F12(toCheck) {
    let htmlTable = document.createElement('table');
    htmlTable.style.margin = '10px';
    for (let i = 0; i < 9; i++) {
        let htmlTr = document.createElement('tr');
        for (let j = 0; j < 9; j++) {
            let htmlTd = document.createElement('td'); 
            htmlTd.innerText = to_verify[i][j];
            htmlTr.appendChild(htmlTd);
            // changing table style
            htmlTd.style.border = '1px solid Black';
            htmlTd.style.padding = '5px' 
        }
        htmlTable.appendChild(htmlTr);
    }
     // changing table style
    htmlTable.style.borderCollapse ='collapse'
    htmlTable.style.borderSpacing = 0;
    document.body.appendChild(htmlTable);
}

F12();

// End of question 3

// exporting the table to_verify to use in the other files
export {to_verify};
