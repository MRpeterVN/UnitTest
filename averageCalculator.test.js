const average = require('./averageCalculator');

test('All valid values within range', () => {
    const values = [10, 20, -999];
    expect(average(values, 5, 25)).toBe(15); 
});

test('Some values out of range', () => {
    const values = [5, 30, -999];
    expect(average(values, 5, 25)).toBe(5); 
});

test('No valid values in range', () => {
    const values = [300, -999];
    expect(average(values, 5, 25)).toBe(-999); 
});

test('Array with only end value', () => {
    const values = [-999];
    expect(average(values, 5, 25)).toBe(-999); 
});

test('Max input limit of 100 values', () => {
    const values = new Array(100).fill(10).concat(-999);
    expect(average(values, 5, 25)).toBe(10); 
});
