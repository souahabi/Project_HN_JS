//Question 1, 4
import { F21 } from '../EX2/OUAHABI_Soufiane_test_javascript_algo_ex2.js';
import { to_verify } from '../EX1/OUAHABI_Soufiane_test_javascript_algo_ex1.js';
let htmlTable = document.createElement('table');
htmlTable.style.margin = '10px';
function F31 (toCheck){
    // seperating a 9 x 9 table into 9 tables of 9 (according to rows)
    let row = [];
    let isCorrect = true;
    for (let i = 0; i < 9; i++){
        row[i] = [];
        for (let j = 0; j < 9; j++){
            row[i].push(toCheck[i][j]);
        }
        // Display of the error message in the HTML file
        let lineI = ['line ' + (i+1) + ' incorrect']
        if (F21(row[i]) === false){
            isCorrect = false;
            let htmlTr = document.createElement('tr');
            let htmlTd = document.createElement('td');
            htmlTd.innerText = lineI[0];
            htmlTr.appendChild(htmlTd);
            htmlTd.style.border = '1px solid Black';
            htmlTd.style.padding = '5px' 
            for (let l = 0; l < 9; l++) {
                htmlTd = document.createElement('td'); 
                htmlTd.innerText = to_verify[i][l];
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
    }
    return isCorrect;
}
// End of question 1

// Quetion 2, 4

function F32 (toCheck){
    // seperating a 9 x 9 table into 9 tables of 9 (according to columns)
    let column = [];
    let isCorrect = true;
    for (let j = 0; j < 9; j++){
        column[j] = [];
        for (let i = 0; i < 9; i++){
            column[j].push(toCheck[i][j]);
        }
        // Display of the error message in the HTML file
        let ColumnJ = ['Column ' + (j+1) + ' incorrect']
        if (F21(column[j]) === false){
            isCorrect = false;
            let htmlTr = document.createElement('tr');
            let htmlTd = document.createElement('td');
            htmlTd.innerText = ColumnJ[0];
            htmlTr.appendChild(htmlTd);
            htmlTd.style.border = '1px solid Black';
            htmlTd.style.padding = '5px' 
            for (let l = 0; l < 9; l++) {
                htmlTd = document.createElement('td'); 
                htmlTd.innerText = to_verify[l][j];
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
    }
    return isCorrect;
}
// End of question 2

// Question 3, 4
function F33 (toCheck){
    // seperating a 9 x 9 table into 9 tables of 9 (according to region)
    let region = [];
    let isCorrect = true;
    for (let p = 0; p < 9; p++){
        region[p] = [];
        let l = Math.floor(p/3);
        for (let i = 3*l; i < (3*l + 3); i++){
            if (p % 3 === 0){
                for (let j = 0; j < 3; j++){
                    region[p].push(toCheck[i][j]);
                }
            }
            else if (p % 3 === 1){
                for (let j = 3; j < 6; j++){
                    region[p].push(toCheck[i][j]);
                }
            }
            else {
                for (let j = 6; j < 9; j++){
                    region[p].push(toCheck[i][j]);
                } 
            }
        } 
    // Display of the error message in the HTML file
    let regionJ = ['region ' + (p+1) + ' incorrect']
        if (F21(region[p]) === false){
            isCorrect = false;
            let htmlTr = document.createElement('tr');
            let htmlTd = document.createElement('td');
            htmlTd.innerText = regionJ[0];
            htmlTr.appendChild(htmlTd);
            htmlTd.style.border = '1px solid Black';
            htmlTd.style.padding = '5px' 
            for (let i = 3*l; i < (3*l + 3); i++){
                if (p % 3 === 0){
                    for (let j = 0; j < 3; j++){
                        htmlTd = document.createElement('td'); 
                        htmlTd.innerText = to_verify[i][j];
                        htmlTr.appendChild(htmlTd);
                    htmlTd.style.border = '1px solid Black';
                    htmlTd.style.padding = '5px'
                    }
                }
                else if (p % 3 === 1){
                    for (let j = 3; j < 6; j++){
                        htmlTd = document.createElement('td'); 
                        htmlTd.innerText = to_verify[i][j];
                        htmlTr.appendChild(htmlTd);
                        htmlTd.style.border = '1px solid Black';
                        htmlTd.style.padding = '5px'
                    }
                }
                else {
                    for (let j = 6; j < 9; j++){
                        htmlTd = document.createElement('td'); 
                        htmlTd.innerText = to_verify[i][j];
                        htmlTr.appendChild(htmlTd);
                        htmlTd.style.border = '1px solid Black';
                        htmlTd.style.padding = '5px'
                    } 
                }
            }  
            // changing table style
            htmlTable.appendChild(htmlTr);
        }
        // changing table style
    htmlTable.style.borderCollapse ='collapse'
    htmlTable.style.borderSpacing = 0;
    }
    return isCorrect; 
}
// End of question 3

// Question 5
let rowTable = F31(to_verify);
let columnTable = F32(to_verify);
let regionTable = F33(to_verify);

if (rowTable && columnTable && regionTable){
    let message = document.createElement('p');
    message.innerText = 'the table is correct'
    document.body.appendChild(message);
}
else{

    document.body.appendChild(htmlTable);
}
// End of question 5