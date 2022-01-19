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

  calculator(1, "add", 2);
  calculator(1, "subtract", 2);
  calculator(1, "multiply", 2);
  calculator(1, "divide", 2);