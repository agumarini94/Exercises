

// ---ACA ACTIVA EL GRID <== 
function processEvents(colorRecibido) {
    startClick ();
}

//mousedown -> its activate when the mouse is click
function clearBoard() {
    const theBotton = document.getElementById('clear');
    theBotton.addEventListener('click', () => {
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = 'white';
        });
    });
    }
clearBoard();
let botonPresionado = true;
let isMouseDown = false;

function startClick() {
    const boardGrid = document.querySelectorAll('.pixel');
    document.addEventListener('mousedown', () => {
        isMouseDown = true;
    });
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
    boardGrid.forEach(pixel => {
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = clickedId;
        })
        pixel.addEventListener('mouseover', () => {
            if (isMouseDown) {
                pixel.style.backgroundColor = clickedId;
            }
        })
    })
        // boardGrid.addEventListener('mouseover', () => {
        //     isMouseDown = true; 
        //         if (isMouseDown) {
        //             pixel.style.backgroundColor = clickedId;
        //         }
        //     })
        // })
        // pixel.addEventListener('mouseup', () => {
        //     isMouseDown = false; 
        // })
        //     if (clickedId) {
        //         pixel.style.backgroundColor = clickedId;
                // if (stopBotonPresionado == true) { // solté el mouse
                //     mouseFinishClick(); // detenerlo
                // }
                // else { // sino sigue
                //     if (botonPresionado == 'True') { // si tiene el botón apretado
                //         mouseIsOver();
                //     }
            

// const mouseStartClick = document.querySelector('.board'); // traigo el tablero grid
// mouseStartClick.addEventListener('mousedown', () => {

//     newDiv.style.backgroundColor = clickedId;
//     // alert('mouse apretado');
//     console.log('mouse start click');
// });

//--- this work when finish the click ---
// function mouseFinishClick() {
//     const boardGrid = document.querySelectorAll('.pixel');
//     boardGrid.forEach(pixel => {   
//         pixel.addEventListener('mouseup', () => {
//             pixel.style.backgroundColor = clickedId;
//             console.log('mouse is finish to click');
//         })
//     })
// }
// const mouseFinishClick = document.querySelector('.board');
// mouseFinishClick.addEventListener('mouseup', () => {
//     console.log('finish to click');

// })

// // ---- this work when the mouse is over -----
// function mouseIsOver(pixeles) {
//         const boardGrid = document.querySelectorAll('.pixel');
//         boardGrid.forEach(pixel => {   
//     // const mouseIsOver = document.querySelector('.board');
//             pixel.addEventListener('mouseover', () => {
//                 pixel.style.backgroundColor = clickedId;
//                 console.log('mouse is over');
//             })
//         })
        // here should look which part of the boards is 
        // alert('mouse is over');
        
    }

// const mouseIsOver = document.querySelector('.board');
// mouseIsOver.addEventListener('mouseover', () => {
//     //here should look which part of the boards is 
//     // alert('mouse is over');
//     console.log('mouse is over');
// })

//here should do a for loop with 50 x 50 divs 
//first need to get the board  //ESTO CREA EL BORD 
const boardGrid = document.querySelector('.board');
for (let row = 0; row < 50; row++){
    for (let column = 0; column < 50; column++){
        //create a new div
        var newDiv = document.createElement('div'); //change const -> var to can change for every place the color .
        //for each div should add a new atribute 
        newDiv.setAttribute('class', 'pixel');
        boardGrid.appendChild(newDiv);
        //now each div, should activate the function 
    }
}

// === ESTO CHEQUEA EN QUE PARTE DE LA PALETA CLICKEO === 
var clickedId = null; // i make a empty value to use to keet the color 
function selectColor() {
    //now should check wich color want the user 
    const boardColors = document.querySelectorAll('.color') //Here i get all the pallet colors 
    //need to do an evernt to keep the value of the id. 
    boardColors.forEach(color => {
        color.addEventListener('click', (e) => {
            clickedId = e.target.id;
            processEvents(clickedId); // ---> esto deberia mandarle a process event q empiece 
            // processEvents(clickedId); //activa la funcion del grid 
            console.log('click in ' + clickedId); //devuelve red, green ... 
            return (clickedId);
        });
    })
}

selectColor();