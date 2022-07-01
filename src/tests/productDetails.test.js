const productDetails = require('../functions/productDetails');

const noProducts = 'No product was passed!';

const expectResult = [
  {
    name: 'Alcool gel',
    details: {
      productId: 'Alcool gel123',
    },
  },
  {
    name: 'Máscara',
    details: {
      productId: 'Máscara123',
    },
  },
];

describe('Verificando se a função productDetails está correta', () => {
  test('1 - Verificando se a função productDetail retorna noProduct caso nenhum parâmetro tenha sido passado ou a lista de produtos esteja vazia', () => {
    expect(productDetails()).toEqual(noProducts);
    expect(productDetails([])).toEqual(noProducts);
  });
  test('2 - Verifica se a função productDetail retorna o valor esperado caso um lista de produtos tenha sido passada', () => {
    expect(productDetails(['Alcool gel', 'Máscara'])).toEqual(expectResult);
  });
});
