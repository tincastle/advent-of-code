import { readFileSync } from "node:fs";

const content = readFileSync(process.argv[2], "utf8");
const lines = content.split("\n");

const part1 = () => {
	const numberMatches = lines
		.slice(0, lines.length - 1)
		.map((line) => line.matchAll(/\d+/g));
	const operatorMatches = lines[lines.length - 1].matchAll(/[+*]/g);

	const subResults = [];
	while (true) {
		const numbers = numberMatches.map((line) => Number(line.next().value?.[0]));
		if (numbers.some(Number.isNaN)) break;
		const operator = operatorMatches.next().value?.[0];
		if (!operator) break;

		switch (operator) {
			case "+":
				subResults.push(numbers.reduce((a, b) => a + b, 0));
				break;
			case "*":
				subResults.push(numbers.reduce((a, b) => a * b, 1));
				break;
		}
	}
	const total = subResults.reduce((a, b) => a + b, 0);
	console.log(total);
};

part1();

const part2 = () => {};

part2();
