const average = (arrayValues) => {
  if(
    !arrayValues
    || arrayValues.length === 0
    || arrayValues.every((value) => typeof value === 'string')
  ) {
    return [];
  }
  const valueSum = arrayValues.reduce((acc, curr) => acc + curr);
  return Math.round(valueSum/valueSum.length);
}

console.log(average())
