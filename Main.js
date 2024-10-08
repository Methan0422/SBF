//calling from css
let dom_solve = document.querySelector("#solve");
let dom_reset = document.querySelector("#reset");

//main dictionary
const board = {};

let gridRow = [];
let gridColumn = [];
let gridBox = [];
let segOne = [];
const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',];

//The solve button
dom_solve.addEventListener("click", () => {
    getForm();
    rowCheck();



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

});

//reset
//document.getElementById('myInput').value = ''"
dom_reset.addEventListener("click", () => {
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            document.getElementById(abc[i] + abc[j]).value = '';
            gridRow = [];
            gridColumn = [];
            gridBox = [];
        }
    }
})

//makes list of values
function getForm(){
    gridRow = [];
    gridColumn = [];
    gridBox = [];
    for (let i = 0; i < 9; i++) {
        let row = [];
        let column = [];
        for (let j = 0; j < 9; j++) {
            let x = document.forms[abc[i] + abc[j]][abc[i] + abc[j]].value;
            if (x === ''){
                row.push('0');
            }
            if (x > 0){
                row.push(x);
            }
            let y = document.forms[abc[j] + abc[i]][abc[j] + abc[i]].value;
            if (y === ''){
                column.push('0');
            }
            if (y > 0){
                column.push(y);
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

/*
function lockGrid(){
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            document.getElementById(abc[i] + abc[j]).disable = true;
        }
    }
}*/

function rowCheck(){
    let tempRow = [];
        for (let i = 0; i < 9; i++){
            tempRow = [];
            tempRow = gridRow[i];
            for (let j = 0; j < 9; j++){
                if (tempRow[i] === tempRow[j]){
                    if (i != j && tempRow[i] != 0){;
                        alert("zeros not working");
                        break
                    if (i != j){;
                        if (tempRow[i] != 0){

                        }
                    }
                }
            }
        }     
    }
}

function row_missing(){
    let missing = [];
    for (let i = 0; i < 9; i++){
        temp_missing_row = gridRow[i];
        for (let j = 0; j < 9; j++){
            if (temp_missing_row[j] == 0){
                temp_missing_row = temp_missing_row.push[j];
            }
        }
        // for (let j = 0; j < 9; j++){
        //     temp_missing_row[j]
        // }
    }
}
//let x = document.forms["formOne"]["inputOne"].value;