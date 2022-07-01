const productDetails = require('../functions/productDetails');

const noProducts = 'No product was passed!';

describe('Verificando se a função productDetails está correta', () => {
  test('1 - Verificando se a função productDetail retorna noProduct caso nenhum parâmetro tenha sido passado ou a lista de produtos esteja vazia', () => {
    expect(productDetails()).toEquals(noProducts);
    expect(productDetails([])).toEquals(noProducts);
  });
});
