// Crie a função productDetails que recebe um array de
// produtos e retorna uma lista de produtos na forma abaixo:

// productDetails(['Alcool gel', 'Máscara123'])

/*
[
  {
    name: 'Alcool gel'
    details: {
      productId: 'Alcool gel123'
    }
  },
  {
    name: 'Máscara'
    details: {
      productId: 'Máscara123'
    }
  }
]
*/

const productDetails = (products) => products.reduce((acc, curr) => {
  const obj = {
    name: curr,
    details: {
      productId: `${curr}123`,
    },
  };
  acc.push(obj);
  return acc;
}, []);

module.exports = productDetails;
