const Employee = require('../lib/Employee');

describe('Created Employee object', () => {
    const enteredId = 1;
    const enteredName = 'Alex';
    const enteredEmail = 'email@email.com';
    const newEmployee = new Employee(enteredId, enteredName, enteredEmail);

    test('should be instance of class Employee', () => {
        expect(newEmployee).toBeInstanceOf(Employee);
    });

    test('should be equal to expected object', () => {
        const expectedObj = {
            id: enteredId,
            name: enteredName,
            email: enteredEmail,
        };

        expect(newEmployee).toEqual(expectedObj);
    });

    test('method getId() should return object id and equal to entered', () => {
        const expectedId = newEmployee.getId();

        expect(expectedId).toBe(newEmployee.id);
        expect(expectedId).toBe(enteredId);
    });

    test('method getName() should return object name and equal to entered', () => {
        const expectedName = newEmployee.getName();

        expect(expectedName).toBe(newEmployee.name);
        expect(expectedName).toBe(enteredName);
    });

    test('method getEmail() should return object email and equal to entered', () => {
        const expectedEmail = newEmployee.getEmail();

        expect(expectedEmail).toBe(newEmployee.email);
        expect(expectedEmail).toBe(enteredEmail);
    });

    test('method getRole() should return "Employee"', () => {
        expect(newEmployee.getRole()).toBe('Employee');
    });
});