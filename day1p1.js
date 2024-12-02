import { readFileSync } from "fs";
const inp = readFileSync('day1.txt', { encoding: "utf-8" }).split('\n')

const list1 = []
const list2 = []

for (const line of inp) {
  const split = line.split('   ');
  list1.push(parseInt(split[0]))
  list2.push(parseInt(split[1]))
}

list1.sort((a, b) => a - b)
list2.sort((a, b) => a - b)

let differences = 0
for (const i in list1) {
  differences += Math.abs(list1[i] - list2[i])
}

console.log(differences)