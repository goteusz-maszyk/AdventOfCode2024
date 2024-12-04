matches = []
match_count = 0

def find_match(inp: list[str], row_i: int, col_i: int):
  if col_i - 1 < 0 or len(inp[row_i]) - col_i < 1 or len(inp) - row_i <= 1 or row_i - 1 < 0:
    return 0

  right_down = inp[row_i - 1][col_i - 1] == "M" and inp[row_i + 1][col_i + 1] == "S" or inp[row_i - 1][col_i - 1] == "S" and inp[row_i + 1][col_i + 1] == "M"
  if not right_down:
    return 0
  
  if inp[row_i - 1][col_i + 1] == "M" and inp[row_i + 1][col_i - 1] == "S" or inp[row_i - 1][col_i + 1] == "S" and inp[row_i + 1][col_i - 1] == "M":
    return 1
  return 0


with open("day4full.txt") as file:
  inp = file.readlines()

  for row_i in range(len(inp)):
    row = inp[row_i]

    for col_i in range(len(row)):
      letter = row[col_i]
      if letter != "A":
        continue

      match_count += find_match(inp, row_i, col_i)
      
print(match_count)