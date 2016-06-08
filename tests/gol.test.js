const size = 32;

class Cell {
  constructor() {
    this.life = false;
  }
  setNeighbours = () => {
    this.neighbours = this.neighbours.clone();
  }
  getLife() {
    return this.life;
  }
  setLife(life) {
    this.life = life;
  }
  getPopulation = () =>
     this.neighbours.reduce((prev, curr) => prev + curr.getLife())
}

const grid = new Array(size);
grid.forEach((z, k) => {
  grid[k] = new Array(size);
  for (let i = 0; i < size; i++) {
    grid[k][i] = new Cell();
  }
  console.log(grid[k]);
});

function rules(x, y, grid) {
  const neighbours = getPopulation(x, y, grid);
  if (neighbours < 2) {
    return false;
  }
  if (neighbours > 3) {
    return false;
  }
  if (neighbours === 2 || neighbours === 3) {
    return true;
  }
}
