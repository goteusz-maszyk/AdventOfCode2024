import { readFileSync } from "fs";
const inp = readFileSync('day3.txt', { encoding: "utf-8" })

const multRegex = /(?<=mul\()[0123456789]{1,3},[0123456789]{1,3}(?=\))/g
const doDontRegex = /do(n't)?(?=\(\))/g

const multMatch = [...inp.matchAll(multRegex)];
const doDontMatch = [...inp.matchAll(doDontRegex)].map((el) => [el.index, el[0] == 'do']);

let sum = 0;
let shouldMatch = true;
let doDontMatchNextIdx = 0;
for (const element of multMatch) {
  while (doDontMatchNextIdx < doDontMatch.length && doDontMatch[doDontMatchNextIdx][0] < element.index) {
    shouldMatch = doDontMatch[doDontMatchNextIdx][1]
    doDontMatchNextIdx++;
  }
  if (!shouldMatch) continue;
  const nums = element[0].split(',').map(num => parseInt(num));
  sum += nums[0] * nums[1]
}
console.log(sum)