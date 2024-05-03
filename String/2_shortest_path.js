let direction = "ssseeee";
// let direction = "wsenenws";

function shortestDir(dir) {
  let x = 0,
    y = 0;
  for (let i = 0; i < dir.length; i++) {
    switch (dir[i]) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "w":
        x--;
        break;
      case "e":
        x++;
        break;

      default:
        break;
    }
  }

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

console.log(shortestDir(direction));
