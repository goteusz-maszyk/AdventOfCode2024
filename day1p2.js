import { readFileSync } from "fs";
const inp = readFileSync('day1.txt', { encoding: "utf-8" }).split('\n')

const list1 = []
const list2 = new Map()

for (const line of inp) {
  const split = line.split('   ');
  list1.push(parseInt(split[0]));
  const current = list2.get(parseInt(split[1]));
  if (current == undefined) {
    list2.set(parseInt(split[1]), 1)
  } else {
    list2.set(parseInt(split[1]), current + 1)
  }
}

let score = 0
for (const i in list1) {
  const el = list1[i];
  score += el * (list2.get(el) ?? 0);
}

console.log(score)