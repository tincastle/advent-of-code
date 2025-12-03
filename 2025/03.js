import { readFileSync } from "node:fs";

const content = readFileSync("03.txt", "utf8");
const banks = content
	.split("\n")
	.map((bank) => bank.trim())
	.filter((bank) => bank.length)
	.map((bank) => bank.split("").map(Number));

const part1 = () => {
	const jolts = banks.map((bank) => {
		const bankExcepLast = bank.slice(0, bank.length - 1);
		const digit10 = Math.max(...bankExcepLast);
		const index = bankExcepLast.indexOf(digit10);
		const bankAfterMax = bank.slice(index + 1);
		const digit1 = Math.max(...bankAfterMax);
		return digit10 * 10 + digit1;
	});
	const sum = jolts.reduce((a, b) => a + b, 0);
	console.log(sum);
};

part1();
