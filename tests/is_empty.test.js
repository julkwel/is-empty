const isEmpty = require('../lib/index');

test('is empty ""', function () {
    expect(isEmpty("")).toBeTruthy();
});

test('is empty 0', () => {
    expect(isEmpty(0)).toBeTruthy();
})

test('is empty 1', () => {
    expect(isEmpty(1)).toBeFalsy();
})

test('is empty {}', () => {
    expect(isEmpty({})).toBeTruthy();
})

test('not empty {name : value}', () => {
    expect(isEmpty({name: "Hello"})).toBeFalsy();
})

test('Map test', () => {
    expect(isEmpty(new Map)).toBeTruthy();
})


test('Set test', () => {
    expect(isEmpty(new Set)).toBeTruthy();
})

test('[] test', () => {
    expect(isEmpty([])).toBeTruthy();
})
