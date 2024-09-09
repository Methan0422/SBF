//calling from css
let dom_solve = document.querySelector("#solve");

//main dictionary
const board = {};

let gridRow = [];
let gridColumn = [];
let gridBox = [];
let segOne = [];
let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',];

//The solve button
dom_solve.addEventListener("click", () => {
    getForm();

//potential dictionary   
/*    let varName;
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            varName = abc[i] + abc[j];
            board[varName] = getForm();
            alert (board);

        }
    }
*/

//grid system for input boxes
/*    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            alert(abc[i] + abc[j]);
            }}
*/
});

//makes list of values
function getForm(){
    for (let i = 0; i < 3; i++) {
        let row = [];
        let column = [];
        for (let j = 0; j < 3; j++) {
            let x = document.forms[abc[i] + abc[j]][abc[i] + abc[j]].value;
            if (x === ''){
                row.push('0');
            }
            if (x > 0){
                row.push(x);
            }
            x = document.forms[abc[j] + abc[i]][abc[j] + abc[i]].value;
            if (x === ''){
                column.push('0');
            }
            if (x > 0){
                column.push(x);
            }
        }
        gridRow.push(row);
        gridColumn.push(column);
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let box = [];
            for (let k = 0; k < 3; k++){
                for (let l = 0; l < 3; l++){
                    let y = document.forms[abc[k + (i * 3)] + abc[l + (j * 3)]][abc[k + (i * 3)] + abc[l + (j * 3)]].value;
                    if (y === ''){
                        box.push('0');
                    }
                    if (y > 0){
                        box.push(y);
                    }
                }

            }
            gridBox.push(box);
        }
    }
}
//let x = document.forms["formOne"]["inputOne"].value;
