function grid(){
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";
    document.body.appendChild(container);
    var main = document.getElementById('main');
    for (var i=0; i<16; i++) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
        main.appendChild(row);
        var roww = document.getElementById('row'+i);
        for (var j=0; j<16; j++) {
            var box = document.createElement("div");
            box.className = "box";
            roww.appendChild(box);
        }
    }
}




function click() {
    var boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function() {
            this.style.backgroundColor = "black";
        });
    }
}

function reset() {
    var boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "";
    }
}
function hover() {
    var boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = "lightblue";
        });
    }
}

function createNewGrid() {
    var newGridButton = document.createElement("button");
    newGridButton.id = "newGridButton";
    newGridButton.innerHTML = "New Grid";
    document.body.insertBefore(newGridButton, document.getElementById('main'));

    newGridButton.addEventListener("click", function() {
        var gridSize = prompt("Enter the number of squares per side for the new grid (maximum 100):");
        gridSize = parseInt(gridSize);
        if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
            alert("Invalid input. Please enter a number between 1 and 100.");
            return;
        }

        var main = document.getElementById('main');
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        main.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        for (var i = 0; i < gridSize; i++) {
            var row = document.createElement("div");
            row.className = "row";
            row.id = "row" + i;
            main.appendChild(row);
            var roww = document.getElementById('row' + i);
            for (var j = 0; j < gridSize; j++) {
                var box = document.createElement("div");
                box.className = "box";
                roww.appendChild(box);
            }
        }

        hover();
    });
}

grid();
createNewGrid();
hover();


