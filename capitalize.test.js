const capitalize = require('./capitalize');

test('capitalize first character', () => {
    expect(capitalize("capitalize first character")).toMatch("Capitalize First Character");
});