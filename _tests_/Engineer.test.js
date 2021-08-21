const Enginer = require('../lib/Engineer');

test('creates engineer object with github username', () => {
    const engineer = new Enginer('George',13,'georgedmendoza13@gmail.com','georgedmendoza');

    expect(engineer.github).toEqual(expect.any(String));
})

test('')