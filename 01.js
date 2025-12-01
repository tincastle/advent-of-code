import { readFileSync } from "node:fs";

const input = readFileSync("01.txt", "utf8");
const lines = input.split("\n").filter((line) => !!line);

const part1 = () => {
	let [dial, turns] = [50, 0];
	lines.forEach((line) => {
		const direction = line[0] === "R" ? 1 : -1;
		const distance = Number(line.substring(1));
		dial += direction * distance;
		dial %= 100;
		if (dial < 0) dial += 100;
		turns += !dial;
	});
	console.log(turns);
};

part1();

const part2 = () => {
	let [dial, turns] = [50, 0];
	lines.forEach((line) => {
		const direction = line[0] === "R" ? 1 : -1;
		const distance = Number(line.substring(1));
		// TODO
	});
	console.log(turns);
};

part2();
