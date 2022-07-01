const average = require('../functions/average');

describe('', () => {
  test('Verifica se ao receber um array de números retorna a média dos valores', () => {
    expect(average([1, 2, 3])).toEqual(2);
    expect(average([4, 5, 6])).toEqual(5);
    expect(average([4, 5, 6])).not.toEqual(6);
  });
  test('Verifica se ao receber um array com valores não numéricos retorna `undefined`', () => {
    expect(average([1, 2, '3'])).toEqual(undefined);
    expect(average(['a', 2, 3])).toEqual(undefined);
    expect(average([' '])).toEqual(undefined);
    expect(average([{}])).toEqual(undefined);
  });
});
