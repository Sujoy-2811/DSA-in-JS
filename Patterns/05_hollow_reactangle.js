let length = 7,
  width = 5,
  pattern = "";

for (let i = 1; i <= width; i++) {
  for (let j = 1; j <= length; j++) {
    if (i == 1 || j == 1 || j == length || i == width) pattern += "*";
    else pattern += " ";
  }
  pattern += "\n";
}

console.log(pattern);
