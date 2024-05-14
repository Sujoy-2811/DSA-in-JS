let lines = 5,
  pattern = "";

for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= lines - i; j++) {
    pattern += " ";
  }
  for (let j = 1; j <= i; j++) {
    pattern += `${i} `;
  }
  pattern += "\n";
}

console.log(pattern);
