const Intern = require('../lib/Intern');

test('create new intern object with school', () => {
    const intern = new Intern('George',13,'georgedmendoza13@gmail.com','kstate');

    expect(intern.school).toEqual(expect.any(String));
})

test('gets school info', () => {
    const intern = new Intern('George',13,'georgedmendoza13@gmail.com','kstate');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('outputs role to be Intern', () => {
    const intern = new Intern('George',13,'georgedmendoza13@gmail.com','kstate');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})