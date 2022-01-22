const caesarCipher = require('./caesarCipher');

test('takes and return each character "shifted"', () => {
    expect(caesarCipher('SERR CVMMN!')).toMatch('FREE PIZZA!');
});