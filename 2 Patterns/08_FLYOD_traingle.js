let lines = 5,
  count = 0,
  pattern = "";

for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= i; j++) {
    count++;
    pattern += count;
    if (count < 10) pattern += "  ";
    else pattern += " ";
  }
  pattern += "\n";
}

console.log(pattern);
