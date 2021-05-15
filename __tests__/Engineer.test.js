const Engineer = require('../lib/Engineer');

describe('Created Engineer object', () => {
    const enteredId = 1;
    const enteredName = 'Alex';
    const enteredEmail = 'email@email.com';
    const enteredGithub = 'GitHubUserName';
    const newEngineer = new Engineer(enteredId, enteredName, enteredEmail, enteredGithub);

    test('should be instance of class Engineer', () => {
        expect(newEngineer).toBeInstanceOf(Engineer);
    });

    test('should be equal to expected object', () => {
        const expectedObj = {
            id: enteredId,
            name: enteredName,
            email: enteredEmail,
            github: enteredGithub,
        };

        expect(newEngineer).toEqual(expectedObj);
    });

    test('method getId() should return object id and equal to entered', () => {
        const expectedId = newEngineer.getId();

        expect(expectedId).toBe(newEngineer.id);
        expect(expectedId).toBe(enteredId);
    });

    test('method getName() should return object name and equal to entered', () => {
        const expectedName = newEngineer.getName();

        expect(expectedName).toBe(newEngineer.name);
        expect(expectedName).toBe(enteredName);
    });

    test('method getEmail() should return object email and equal to entered', () => {
        const expectedEmail = newEngineer.getEmail();

        expect(expectedEmail).toBe(newEngineer.email);
        expect(expectedEmail).toBe(enteredEmail);
    });

    test('method getGithub() should return object github and equal to entered', () => {
        const expectedGithub = newEngineer.getGithub();

        expect(expectedGithub).toBe(newEngineer.github);
        expect(expectedGithub).toBe(enteredGithub);
    });

    test('method getRole() should return "Engineer"', () => {
        expect(newEngineer.getRole()).toBe('Engineer');
    });
});