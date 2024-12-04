matches = []
match_count = 0

def find_match(inp: list[str], row_i: int, col_i: int):
  left_available = col_i - 3 >= 0
  right_available = len(inp[row_i]) - col_i >= 3
  down_available = len(inp) - row_i > 3
  up_available = row_i - 3 >= 0

  count = 0
  # horizontal
  if right_available:
    if inp[row_i][col_i + 1] == 'M' and inp[row_i][col_i + 2] == 'A' and inp[row_i][col_i + 3] == 'S':
      print('hori r')
      count += 1
  if left_available:
    if inp[row_i][col_i - 1] == 'M' and inp[row_i][col_i - 2] == 'A' and inp[row_i][col_i - 3] == 'S':
      print('hori l')
      count += 1
  
  # vertical
  if down_available:
    if inp[row_i + 1][col_i] == 'M' and inp[row_i + 2][col_i] == 'A' and inp[row_i + 3][col_i] == 'S':
      print('vert d')
      count += 1
  if up_available:
    if inp[row_i - 1][col_i] == 'M' and inp[row_i - 2][col_i] == 'A' and inp[row_i - 3][col_i] == 'S':
      print('vert u')
      count += 1

  # diagonal-up
  if down_available and left_available:
    if inp[row_i + 1][col_i - 1] == 'M' and inp[row_i + 2][col_i - 2] == 'A' and inp[row_i + 3][col_i - 3] == 'S':
      print('di dl')
      count += 1
  if up_available and right_available:
    if inp[row_i - 1][col_i + 1] == 'M' and inp[row_i - 2][col_i + 2] == 'A' and inp[row_i - 3][col_i + 3] == 'S':
      print('di ur')
      count += 1

  # diagonal-down
  if down_available and right_available:
    if inp[row_i + 1][col_i + 1] == 'M' and inp[row_i + 2][col_i + 2] == 'A' and inp[row_i + 3][col_i + 3] == 'S':
      print('di dr')
      count += 1
  if left_available and up_available: # l/u available
    if inp[row_i - 1][col_i - 1] == 'M' and inp[row_i - 2][col_i - 2] == 'A' and inp[row_i - 3][col_i - 3] == 'S':
      print('di ul')
      count += 1

  return count


with open("day4full.txt") as file:
  inp = file.readlines()

  for row_i in range(len(inp)):
    row = inp[row_i]

    for col_i in range(len(row)):
      letter = row[col_i]
      if letter != "X":
        continue

      match_count += find_match(inp, row_i, col_i)
      
print(match_count)