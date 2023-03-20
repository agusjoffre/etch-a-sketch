
let board = document.querySelector(".board");
let blackBtn = document.querySelector("#black-btn");
let erasorBtn = document.querySelector("#erasor-btn");
let randomBtn = document.querySelector("#random-btn");
let resetBtn = document.querySelector("#reset-btn");

let color;

let isRandom = false;

blackBtn.addEventListener("click", () => {
  color = "black";
  isRandom = false;
});
erasorBtn.addEventListener("click", () => {
  color = "white";
  isRandom = false;
});
resetBtn.addEventListener("click", () => {
  board.innerHTML = "";
  isRandom = false;
});

randomBtn.addEventListener("click", () => {
  isRandom = true;
});

let isDrawing = true;

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    let col = document.createElement("div");
    col.classList.add("col");
    board.appendChild(col);
    for (let j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("click", () => {
        if (isDrawing == true) {
            isDrawing = false;
        } else {
            isDrawing = true
        }
        
      });
      square.addEventListener("mouseover", (event) => {
        if (isRandom) {
          color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
        if (isDrawing == true) {
          square.style.backgroundColor = color;
        }
      });

      col.appendChild(square);
    }
  }
}



function listenSetSize() {
  let input = prompt("set the size");
  if (input > 1 && input < 101) {
    board.innerHTML = "";
    createGrid(input);
  } else {
    alert("error");
  }
}

let setSize = document.querySelector("#set-size");
setSize.addEventListener("click", () => {
  listenSetSize();
});
