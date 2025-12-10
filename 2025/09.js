import { readFileSync } from "node:fs";

const content = readFileSync(process.argv[2], "utf8");
const coords = content.split('\n').filter(Boolean).map((line) => line.split(',').map(Number));
console.log(coords.length);

const part1 = () => {
  let maxArea = 0;
  for (let i = 0; i < coords.length - 1; i++) {
    for (let j = i + 1; j < coords.length; j++){
      const dx = Math.abs(coords[i][0] - coords[j][0]) + 1;
      const dy = Math.abs(coords[i][1] - coords[j][1]) + 1;
      const area = dx * dy;
      maxArea = Math.max(maxArea, dx * dy);
    }
  }
  console.log(maxArea);
}

part1();

