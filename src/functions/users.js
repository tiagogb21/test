// Função que recebe 3 parâmetros:
// Um objeto que contém os usuários o nome do usuário e a idade dele.
// Verifica se existe no objeto passado
// Se for um usuário válido retorna a mensagem:
// 'Oi, NOME! Sua idade é IDADE anos. Bem vindo!'
// Caso contrário:
// 'Usuário inválido!'

const verifyingUsers = (users, name) => Object.entries(users).some((user) => user[1] === name);

const isAValidUser = (users, name, age) => {
  const invalidUser = 'Usuário inválido!';
  if (!users || !name || !age) return invalidUser;
  if (
    typeof users !== 'object'
    || typeof name !== 'string'
    || typeof age !== 'number'
  ) return invalidUser;
  if (!verifyingUsers(users, name)) return invalidUser;
  return `Oi, ${name}! Sua idade é ${age} anos. Bem vindo!`;
};

module.exports = isAValidUser;
