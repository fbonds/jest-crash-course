const functions = require('./functions');

// perform before and after functions for each individual test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// perform before and after functions for all tests
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

//using before/after each inside a test
// const nameCheck = () => console.log('Checking name...');
// describe('Checking Names', () => {
//     beforeEach(() => nameCheck());
//     test('User is Jeff', () => {
//         const user = 'Jeff';
//         expect(user).toBe('Jeff');
//     })
// })


test('Adds 2 = 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 = 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that if statement treats as true
// toBeFalsy matches anything that if statement treats as false

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toBe is for primitves, more complex things use toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

// toBeLessThan - there is also toBeLessThanOrEqual etc
test('Should be under 800', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//regex - toMatch or not.toMatch
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

//Arrays - toContain
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// working with async data / promises
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        });
});

// Async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});