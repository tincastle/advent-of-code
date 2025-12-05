import { readFileSync } from 'node:fs';

const content = readFileSync(process.argv[2], 'utf8');
const grid = content.split('\n').map((line) => line.split(''));

const isPaper = (grid, row, column) => grid[row]?.[column] === '@';

const part1 = () => {
  let liftablePapers = 0;
  grid.forEach((line, row) => {
    line.forEach((cell, column) => {
      if (cell !== '@') return;
      let adjacentPapers = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          adjacentPapers += isPaper(grid, row + dr, column + dc);
        }
      }
      liftablePapers += adjacentPapers < 4;
    });
  });
  console.log(liftablePapers);
}

part1();

const part2 = () => {
  let newGrid = grid.map((line) => line.map((cell) => cell));
  let totalLifted = 0;
  while (true) {
    let liftablePapers = 0;
    const nextGrid = newGrid.map((line, row) => {
      return line.map((cell, column) => {
        if (cell !== '@') return cell;
        let adjacentPapers = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            adjacentPapers += isPaper(newGrid, row + dr, column + dc);
          }
        }
        if (adjacentPapers < 4) {
          liftablePapers += 1;
          return '.'
        }
        return cell;
      });
    });
    if (!liftablePapers) break;
    totalLifted += liftablePapers;
    newGrid = nextGrid.map((line) => line.map((cell) => cell));
  }
  console.log(totalLifted);
}

part2();

