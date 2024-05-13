function tilingProblem(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  const verticalTiling = tilingProblem(n - 1);
  const horizontalTiling = tilingProblem(n - 2);

  return verticalTiling + horizontalTiling;
}

console.log(tilingProblem(1));
console.log(tilingProblem(2));
console.log(tilingProblem(3));
console.log(tilingProblem(5));
console.log(tilingProblem(13));
