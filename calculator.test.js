const calculator = require('./calculator');

test('one plus two', () => {
    expect(calculator(1, "add", 2)).toBe(3);
});

test('one minus two', () => {
    expect(calculator(1, "subtract", 2)).toBe(-1);
});

test('one times two', () => {
    expect(calculator(1, "multiply", 2)).toBe(2);
});

test('one divide two', () => {
    expect(calculator(1, "divide", 2)).toBe(0.5);
});

