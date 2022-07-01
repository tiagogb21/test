// 1 - ao receber um array de números, a função average retorna a média de seus valores;
// 2 - ao receber um array que contém valores não numéricos, a função average retorna undefined;
// 3 -  ao receber um array vazio, a função average retorna undefined;

const verifyingAverage = (arrayValues) => !arrayValues
    || arrayValues.length === 0
    || !arrayValues.every((value) => typeof value === 'number');

const average = (arrayValues) => {
  if (verifyingAverage(arrayValues)) return undefined;
  const valueSum = arrayValues.reduce((acc, curr) => acc + curr);
  return Math.round(valueSum / arrayValues.length);
};

module.exports = average;
