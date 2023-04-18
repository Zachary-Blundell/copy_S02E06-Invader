// ton code ici

function makeGrid(tailleGrille, taillePixels) {
    let invader = document.querySelector('#invader');

    for (let i = 0; i < tailleGrille; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        invader.appendChild(row);
    

        for (let i = 0; i < tailleGrille; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
            square.style.width = taillePixels + 'px';
            square.style.height = taillePixels + 'px';
            // console.log(square);
        }

    }
    let squares = document.getElementsByClassName('square');
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', changeColor);
    }

}

function changeColor() {
    if (this.style.backgroundColor == 'black') {
        this.style.backgroundColor = '#D2DAE2';
    }
    else {
        this.style.backgroundColor = 'black';
    }
}

//main-header
let headerMain = document.getElementById('main-header');

const inputGrille = document.createElement('input');
inputGrille.classList.add('input-grille');
inputGrille.type = "text"
inputGrille.placeholder = "Taille de la grille"
headerMain.appendChild(inputGrille);

const inputPixels = document.createElement('input');
inputPixels.classList.add('input-pixels');
inputPixels.type = "text"
inputPixels.placeholder = "Taille des pixels"
headerMain.appendChild(inputPixels);

const buttonValider = document.createElement('button');

buttonValider.type = "button";
buttonValider.innerText = "Valider";
buttonValider.classList.add('button-valider');
headerMain.appendChild(buttonValider);


// let inputText = document.createElement('div');
// inputText = text.classList.add('inputText');
// headerMain.appendChild(inputText);
function changeForme() {
    let invader = document.querySelector('#invader');
    let rows = document.getElementsByClassName('row');
    let rowsLength = rows.length;
    for (let i = 0; i < rowsLength; i++) {
        invader.removeChild(rows[0]);
    }
    makeGrid(inputGrille.value, inputPixels.value);
}

buttonValider.addEventListener('click', changeForme);