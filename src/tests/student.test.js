const createStudent = require('../functions/student');

const student = createStudent('Tiagão, eita desenvolvedor bão');

const welcomeMessage = (name) => `Bem-vindo, ${name}!`;

describe('1 - Implemente a função `createStudent`', () => {
  it('Verifica se a função `createStudent` retorna o objeto esperado', () => {
    expect(typeof student).toBe('object');
    expect(typeof student.feedback).toBe('function');
    expect(student.name).toMatch(/Tiagão, eita desenvolvedor bão/);
    expect(student.feedback()).toEqual(welcomeMessage(student.name));
  });
});
