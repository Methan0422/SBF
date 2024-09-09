let dom_solve = document.querySelector("#solve");


let grid = [];
let abc = ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j']

dom_solve.addEventListener("click", () => {
    getForm();
});

function getForm(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            alert(abc[i][j]);
            //let x = document.forms[[i][j]][[i][j]].value;//
        }
    }

}
//let x = document.forms["formOne"]["inputOne"].value;//