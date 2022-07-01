const isAValidUser = require('../functions/users');

const invalidUser = 'Usuário inválido!';
const user = (name, age) => `Oi, ${name}! Sua idade é ${age} anos. Bem vindo!`;

describe('', () => {
  test('1 - Verifica se retorna a mensagem "Usuário inválido!" caso algum dos parâmetros não seja passado', () => {
    expect(isAValidUser('Maria', 3)).toEqual(invalidUser);
    expect(isAValidUser({}, 'Maria')).toEqual(invalidUser);
    expect(isAValidUser({}, 3)).toEqual(invalidUser);
  });

  test('2 - Verifica se retorna a mensagem "Usuário inválido!" caso algum dos parâmetros seja passado de forma incorreta', () => {
    expect(isAValidUser('{}', 'Maria', 3)).toEqual(invalidUser);
    expect(isAValidUser({}, 3, 3)).toEqual(invalidUser);
    expect(isAValidUser({}, 'Maria', '3')).toEqual(invalidUser);
  });

  test('3 - Verifica se retorna a mensagem "Usuário inválido!" caso o objeto não tenha a propriedade name ou se não for um usuário válido', () => {
    expect(isAValidUser({ a: 1 }, 'Maria', 3)).toEqual(invalidUser);
    expect(isAValidUser({ name: 'Jose' }, 'Maria', 3)).toEqual(invalidUser);
  });

  test('4 - Verifica se caso o objeto contiver o usuário e o usuário for válido retorna a mensagem de usuarioValido"', () => {
    expect(isAValidUser({ name: 'Jose', name: 'Maria' }, 'Maria', 3)).toEqual(user('Maria', 3));
  });
});
