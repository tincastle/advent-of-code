import { readFileSync } from 'node:fs';

const content = readFileSync(process.argv[2], 'utf8');
const [freshRangeStrings, idStrings] = content.split('\n\n').map((group) => group.split('\n'));
const freshRanges = freshRangeStrings.map((line) => line.split('-').map(Number));
const ids = idStrings.map(Number); 

const part1 = () => {
  const freshIds = ids.filter((id) => freshRanges.some(([a, b]) => a <= id && id <= b));
  console.log(freshIds.length);
}

part1();

const part2 = () => {

}

part2();

