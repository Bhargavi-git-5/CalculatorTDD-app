export function add(numbers) {
    if (typeof numbers !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (numbers === '') {
      return 0;
    }
  
    // Default delimiter is comma and new line
    let delimiter = /[\n,]/;
  
    // Check for custom delimiter
    if (numbers.startsWith('//')) {
      const delimiterLineIndex = numbers.indexOf('\n');
      const customDelimiter = numbers.substring(2, delimiterLineIndex);
      delimiter = new RegExp(customDelimiter);
      numbers = numbers.substring(delimiterLineIndex + 1);
    }
  
    // Split numbers based on delimiter and convert to numbers
    const nums = numbers.split(delimiter).map(num => {
      const number = Number(num);
      if (isNaN(number)) {
        throw new Error(`Invalid number: ${num}`);
      }
      return number;
    });
  
    // Check for negative numbers
    const negativeNumbers = nums.filter(num => num < 0);
  
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  
    // Return the sum of all numbers
    return nums.reduce((sum, num) => sum + num, 0);
  }
  