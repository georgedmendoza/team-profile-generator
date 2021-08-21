const Employee = require('../lib/Employee');

test('creates new employee object', () => {
    const employee = new Employee('George',13,'georgedmendoza13@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    // expect(employee.email).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.stringMatching(/.com$/));
});

test('gets employee name', () => {
    const employee = new Employee('George',13,'georgedmendoza13@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

test('gets employee id', () => {
    const employee = new Employee('George',13,'georgedmendoza13@gmail.com');

    expect(employee.getId()).toBeGreaterThan(0)
})

test('gets employee email', () => {
    const employee = new Employee('George',13,'georgedmendoza13@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringMatching(/.com$/));
})

test('gets employee role', () => {
    const employee = new Employee('George',13,'georgedmendoza13@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
})

module.exports = Employee;