import { readFileSync } from "fs";
const inp = readFileSync('day5full.txt', { encoding: "utf-8" }).split('\n\n')

const orderings = inp[0].split('\n').map(line => {
  const split = line.split("|")
  return [parseInt(split[0]), parseInt(split[1])]
})

const prints = inp[1].split('\n').map(line => line.split(','))

let middle_sum = 0
for (const prnt of prints) {
  const form_print = prnt.map(prnt => parseInt(prnt))
  
  let is_valid = true
  for (let i = 0; i < orderings.length; i++) {
    const first = orderings[i][0]
    const last = orderings[i][1]
    
    const first_idx = form_print.indexOf(first);
    const last_idx = form_print.indexOf(last);
    if (first_idx > -1 && last_idx > -1 && first_idx > last_idx) {
      console.log(`invalid ${form_print} cuz of ${first} ${form_print.indexOf(first)} ${last} ${form_print.indexOf(last)}`)
      is_valid = false
      break
    }
  }
  if (is_valid) {
    middle_sum += form_print[Math.floor(form_print.length / 2)]
  }
}

console.log(middle_sum)