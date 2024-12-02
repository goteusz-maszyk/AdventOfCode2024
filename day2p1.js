import { readFileSync } from "fs";
const inp = readFileSync('day2.txt', { encoding: "utf-8" }).split('\n')

function are_safe(numbers) {
  const is_increasing = numbers[1] - numbers[0] > 0
  
  for (let i = 1; i < numbers.length; i++) {
    const diff = numbers[i] - numbers[i - 1]
    if (Math.abs(diff) > 3) {
      return false
    }
    if ((diff >= 0 && !is_increasing) || (diff <= 0 && is_increasing)) {

      return false
    }
  }
  return true
}

let safe = 0

for (const line of inp) {
  const numbers = line.split(' ').map((num) => parseInt(num))
  if (are_safe(numbers)) safe += 1
}

console.log(safe)