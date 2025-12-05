import { readFileSync } from 'node:fs';

const content = readFileSync(process.argv[2], 'utf8');
const grid = content.split('\n').map((line) => line.split(''));

const isPaper = (row, column) => grid[row]?.[column] === '@';

const part1 = () => {
  let liftablePapers = 0;
  grid.forEach((line, row) => {
    line.forEach((cell, column) => {
      if (cell !== '@') return;
      let adjacentPapers = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          adjacentPapers += isPaper(row + dr, column + dc);
        }
      }
      liftablePapers += adjacentPapers < 4;
    });
  });
  console.log(liftablePapers);
}

part1();

