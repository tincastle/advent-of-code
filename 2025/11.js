import { readFileSync } from "node:fs";

const content = readFileSync(process.argv[2], "utf8");
const lines = content.split('\n').filter(Boolean);
const adjGraph = Object.fromEntries(lines.map((line) => line.split(': ')).map(([src, str]) => [src, str.split(' ')]));
// console.log(adjGraph);
// console.log(lines.length); // 576

const part1 = () => {
  // Queue implementation of BFS
  const q = ['you'];
  let numPaths = 0;
  for (let i = 0; i < q.length; i++) {
    const node = q[i];
    const neighbors = adjGraph[node];
    const nonterminals = neighbors.filter((neighbor) => neighbor !== 'out');
    numPaths += neighbors.length - nonterminals.length;
    q.push(...nonterminals);
  }
  console.log(numPaths);
}

part1();

