// A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

// 1 - name, contendo o nome passado como parâmetro;
// 2 - feedback, contendo uma função que retorna a frase 'Bem-vindo NOME!' ao ser chamada.

const createStudent = (name) => {
  if (!name) return undefined;
  return {
    name,
    feedback() {
      return `Bem-vindo, ${name}!`;
    },
  };
};

console.log(createStudent('Tiago'));

module.exports = createStudent;
