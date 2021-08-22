const Engineer = require('../lib/Engineer');

test('creates engineer object with github username', () => {
    const engineer = new Engineer('George',13,'georgedmendoza13@gmail.com','georgedmendoza');

    expect(engineer.github).toEqual(expect.any(String));
})

test('when clicked it opens new window for github username', () => {
    const engineer = new Engineer('George',13,'georgedmendoza13@gmail.com','georgedmendoza');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('overwrites role to output Engineer', () => {
    const engineer = new Engineer('George',13,'georgedmendoza13@gmail.com','georgedmendoza');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})