let dom_solve = document.querySelector("#solve");


let grid = [];
let segOne = [];
let abc = ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j'];

dom_solve.addEventListener("click", () => {
    let x = document.forms["formOne"]["inputOne"].value;
    if (x === '') {
        alert("worked");
    }
});

function getForm(){
    let segOne = [];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            let x = document.forms[[i][j]][[i][j]].value;
            if (x === ''){
                row.push
            }

            alert(abc[j][i]);

            //let x = document.forms[[i][j]][[i][j]].value;
    }

}
//let x = document.forms["formOne"]["inputOne"].value;//
