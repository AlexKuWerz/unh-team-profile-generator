const Intern = require('../lib/Intern');

describe('Created Intern object', () => {
    const enteredId = 1;
    const enteredName = 'Alex';
    const enteredEmail = 'email@email.com';
    const enteredSchool = 'Studing School Number 2';
    const newIntern = new Intern(enteredId, enteredName, enteredEmail, enteredSchool);

    test('should be instance of class Intern', () => {
        expect(newIntern).toBeInstanceOf(Intern);
    });

    test('should be equal to expected object', () => {
        const expectedObj = {
            id: enteredId,
            name: enteredName,
            email: enteredEmail,
            school: enteredSchool,
        };

        expect(newIntern).toEqual(expectedObj);
    });

    test('method getId() should return object id and equal to entered', () => {
        const expectedId = newIntern.getId();

        expect(expectedId).toBe(newIntern.id);
        expect(expectedId).toBe(enteredId);
    });

    test('method getName() should return object name and equal to entered', () => {
        const expectedName = newIntern.getName();

        expect(expectedName).toBe(newIntern.name);
        expect(expectedName).toBe(enteredName);
    });

    test('method getEmail() should return object email and equal to entered', () => {
        const expectedEmail = newIntern.getEmail();

        expect(expectedEmail).toBe(newIntern.email);
        expect(expectedEmail).toBe(enteredEmail);
    });

    test('method getSchool() should return object school and equal to entered', () => {
        const expectedSchool = newIntern.getSchool();

        expect(expectedSchool).toBe(newIntern.school);
        expect(expectedSchool).toBe(enteredSchool);
    });

    test('method getRole() should return "Intern"', () => {
        expect(newIntern.getRole()).toBe('Intern');
    });
});