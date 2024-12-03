import { readFileSync } from "fs";
const inp = readFileSync('day3.txt', { encoding: "utf-8" })

const multRegex = /(?<=mul\()[0123456789]{1,3},[0123456789]{1,3}(?=\))/g

const multMatch = [...inp.matchAll(multRegex)];

let sum = 0;
for (const element of multMatch) {
  const nums = element[0].split(',').map(num => parseInt(num));
  sum += nums[0] * nums[1]
}
console.log(sum)