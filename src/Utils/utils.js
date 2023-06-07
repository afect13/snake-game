export function createBoardCells() {
  const cellSize = this.textures.get("cell").source[0].width + 1;
  const canvasWidth = this.sys.game.config.width;
  const canvasHeigh = this.sys.game.config.height;
  const size = 15;
  const cell = [];
  const offsetX = (canvasWidth - cellSize * size) / 2;
  const offsetY = (canvasHeigh - cellSize * size) / 2;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      cell.push({ row: row, col: col, x: offsetX + cellSize * col, y: offsetY + cellSize * row });
    }
  }
  return cell;
}

export function createSnake(boardCells) {
  const cells = [];
  const startCells = [
    { row: 7, col: 7 },
    { row: 8, col: 7 },
  ];

  for (let startCell of startCells) {
    const cell = boardCells.find((cell) => cell.row === startCell.row && cell.col === startCell.col);
    cells.push(cell);
  }
  return cells;
}
