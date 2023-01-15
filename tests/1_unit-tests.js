const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  test('it should return the whole number part of the input created with whole number', () => {
    assert.strictEqual(convertHandler.getNum('12kg'), 12);
  });

  test('it should return the decimal part of the input created with decimal number', () => {
    assert.strictEqual(convertHandler.getNum('12.5kg'), 12.5);
  });

  test('it should return the result of the input created with fractional number', () => {
    assert.strictEqual(convertHandler.getNum('2/5kg'), 0.4);
  });

  test('it should return the result of the input created with fractional number with a decimal', () => {
    assert.equal(convertHandler.getNum('2.4/5kg'), 0.48);
  });

  test('it should return error on double-fraction', () => {
    assert.strictEqual(convertHandler.getNum('12.5/3/2kg'), 'invalid number');
  });

  test('it should should return 1 when no numerical input is provided', () => {
    assert.strictEqual(convertHandler.getNum('kg'), 1);
  });

  test('it should return the unit part of the input', () => {
    assert.strictEqual(convertHandler.getUnit('10L'), 'L');
  });

  test('it should return error for invalid input', () => {
    assert.strictEqual(convertHandler.getUnit('10g'), 'invalid unit');
  });

  test('it should return the unit corresponding to the unit', () => {
    assert.strictEqual(convertHandler.getReturnUnit('km'), 'mi');
  });

  test('it should return the spelling of the unit', () => {
    assert.strictEqual(convertHandler.spellOutUnit('lbs'), 'pounds');
  });

  test('it should convert the input from km to mi', () => {
    assert.strictEqual(convertHandler.convert(10, 'km'), 6.21373);
  });

  test('it should convert the input from mi to km', () => {
    assert.strictEqual(convertHandler.convert(15, 'mi'), 24.1401);
  });

  test('it should convert the input from L to gal', () => {
    assert.strictEqual(convertHandler.convert(3 / 2, 'L'), 0.39626);
  });

  test('it should convert the input from gal to L', () => {
    assert.strictEqual(convertHandler.convert(2.5 / 2, 'gal'), 4.73176);
  });

  test('it should convert the input from kg to lbs', () => {
    assert.strictEqual(convertHandler.convert(2.5, 'kg'), 5.51156);
  });

  test('it should convert the input from lbs to kg', () => {
    assert.strictEqual(convertHandler.convert(45, 'lbs'), 20.41164);
  });
});
