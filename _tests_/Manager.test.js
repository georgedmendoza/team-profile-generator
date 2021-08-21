const Manager = require('../lib/Manager');

test('test to see if there is an office number', () => {
    const manager = new Manager('George',13,'georgedmendoza13@gmail.com',12, 'Manager');

    expect(manager.officeNumber()).toBeGreaterThan(0);
})

test('overwrites role to output Manager', () => {
    const manager = new Manager('George',13,'georgedmendoza13@gmail.com',12, 'Manager');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})