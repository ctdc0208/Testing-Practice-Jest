function calculator(n1, operator, n2) {
    let result = '';
    
    if (operator === 'add') {
      result = n1 + n2
    } else if (operator === 'subtract') {
      result = n1 - n2
    } else if (operator === 'multiply') {
      result = n1 * n2
    } else if (operator === 'divide') {
      result = n1 / n2
    };
    
    return result;
  };   
    module.exports = calculator;