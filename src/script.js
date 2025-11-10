const ROWS = 4;
const COLS = 4;


const gridContainer = document.getElementById('gridContainer');

function createGrid() {
  gridContainer.innerHTML = '';

  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';
  infoDiv.innerHTML = `
    Есть!: <span class="msg" id="msg">0</span> 
    Мимо: <span class="miss" id="miss">0</span>
  `;
  gridContainer.appendChild(infoDiv);

   for (let row = 0; row < ROWS; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'grid-row';


    for (let col = 0; col < COLS; col++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', () => onCellClick(row, col));


      rowDiv.appendChild(cell);
    }

    gridContainer.appendChild(rowDiv);
  }
}

createGrid();

let goblinCell = null; 



function placeGoblin() {
 
  if (goblinCell) {
    goblinCell.innerHTML = '';
  }

  const row = Math.floor(Math.random() * ROWS);
  const col = Math.floor(Math.random() * COLS);

  const cell = gridContainer.querySelector(
    `[data-row="${row}"][data-col="${col}"]`
  );

  
  const img = document.createElement('img');
  img.src = 'img/goblin.png';
  img.alt = 'Гоблин';
  img.className = 'icon';

  
  cell.appendChild(img);

  goblinCell = cell;
}

placeGoblin();
// Счётчики
let hits = 0;
let misses = 0;

const msgSpan = document.getElementById('msg');
const missSpan = document.getElementById('miss');



function onCellClick(row, col) {
  const cell = gridContainer.querySelector
    `[data-row="${row}"][data-col="${col}"]`
  ;

  if (cell === goblinCell) {
    hits++;
    msgSpan.textContent = hits;
  } else {
    misses++;
    missSpan.textContent = misses;
  }

  placeGoblin();
}
