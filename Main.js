//calling from css
let dom_solve = document.querySelector("#solve");


let grid = [];
let segOne = [];
let abc = ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j'];

//The solve button
dom_solve.addEventListener("click", () => {
    getForm();


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
    let segOne = [];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            let x = document.forms[abc[i] + abc[j]][abc[i] + abc[j]].value;
            alert("start");
            if (x === ''){
                row.push('0');
            }
            if (x > 0){
                row.push(x);
            }
        }
        alert("close");
        segOne.push(row);
    }
    alert("Made it");
    grid.push(segOne);
}
//let x = document.forms["formOne"]["inputOne"].value;
