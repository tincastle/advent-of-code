import { readFileSync } from 'node:fs';

const content = readFileSync('02.txt', 'utf8');
const ranges = content.split(',').map((range) => range.split('-').map(Number)); // Array<[number, number]>

const numDigits = (num) => num.toString().length;
const half = (num) => {
  // Assume num has even digits
  const numString = num.toString();
  return numString.substring(0, numString.length / 2);
}
const twice = (num) => Number(`${num}${num}`);

const part1 = () => {
  const adjustedRanges = ranges.map(([first, last]) => {
    const range = [first, last];
    if (numDigits(first) % 2) range[0] = 10 ** numDigits(first); 
    if (numDigits(last) % 2) range[1] = 10 ** (numDigits(last) - 1) - 1;
    return range;
  });

  const set = new Set();
  adjustedRanges.forEach(([first, last]) => {
    if (first > last) return;
    for (let i = half(first); ; i++) {
      const ii = twice(i);
      if (ii < first) continue;
      if (ii > last) break;
      set.add(ii);
    }
  });
  const sum = Array.from(set).reduce((sum, curr) => sum + curr, 0);
  console.log(sum);
}

part1();

