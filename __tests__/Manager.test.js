const Manager = require('../lib/Manager');

describe('Created Manager object', () => {
    const enteredId = 1;
    const enteredName = 'Alex';
    const enteredEmail = 'email@email.com';
    const enteredOfficeNum = 12;
    const newManager = new Manager(enteredId, enteredName, enteredEmail, enteredOfficeNum);

    test('should be instance of class Manager', () => {
        expect(newManager).toBeInstanceOf(Manager);
    });

    test('should be equal to expected object', () => {
        const expectedObj = {
            id: enteredId,
            name: enteredName,
            email: enteredEmail,
            officeNumber: enteredOfficeNum,
        };

        expect(newManager).toEqual(expectedObj);
    });

    test('method getId() should return object id and equal to entered', () => {
        const expectedId = newManager.getId();

        expect(expectedId).toBe(newManager.id);
        expect(expectedId).toBe(enteredId);
    });

    test('method getName() should return object name and equal to entered', () => {
        const expectedName = newManager.getName();

        expect(expectedName).toBe(newManager.name);
        expect(expectedName).toBe(enteredName);
    });

    test('method getEmail() should return object email and equal to entered', () => {
        const expectedEmail = newManager.getEmail();

        expect(expectedEmail).toBe(newManager.email);
        expect(expectedEmail).toBe(enteredEmail);
    });

    test('method getOfficeNumber() should return object school and equal to entered', () => {
        const expectedOfficeNum = newManager.getOfficeNumber();

        expect(expectedOfficeNum).toBe(newManager.officeNumber);
        expect(expectedOfficeNum).toBe(enteredOfficeNum);
    });

    test('method getRole() should return "Manager"', () => {
        expect(newManager.getRole()).toBe('Manager');
    });
});