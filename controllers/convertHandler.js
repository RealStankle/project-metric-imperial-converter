function ConvertHandler() {
  this.getNum = function (input) {
    let onlyDigitsString = input.replace(/[a-zA-Z]+/, '');

    if (!onlyDigitsString.length) {
      onlyDigitsString = '1';
    }

    const regex = /^\d+(\.)?(\d+)?(\/)?(\d+)?$/;

    const testResult = regex.test(onlyDigitsString);

    return testResult ? eval(onlyDigitsString) : 'invalid number';
  };

  this.getUnit = function (input) {
    const inputUnits = ['km', 'mi', 'l', 'gal', 'kg', 'lbs'];
    const regex = /[a-zA-Z]+$/;

    let onlyUnit = input.match(regex);

    const lowercaseUnit = onlyUnit ? onlyUnit[0].toLowerCase() : '';

    return !inputUnits.includes(lowercaseUnit)
      ? 'invalid unit'
      : lowercaseUnit === 'l'
      ? lowercaseUnit.toUpperCase()
      : lowercaseUnit;
  };

  this.getReturnUnit = function (initUnit) {
    const unitsObj = {
      km: 'mi',
      mi: 'km',
      L: 'gal',
      gal: 'L',
      kg: 'lbs',
      lbs: 'kg',
    };

    return unitsObj[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const unitSpellingObj = {
      km: 'kilometers',
      mi: 'miles',
      L: 'liters',
      gal: 'gallons',
      kg: 'kilograms',
      lbs: 'pounds',
    };

    return unitSpellingObj[unit];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const convertionsObj = {
      km: 1 / miToKm,
      mi: miToKm,
      L: 1 / galToL,
      gal: galToL,
      kg: 1 / lbsToKg,
      lbs: lbsToKg,
    };

    return Number((initNum * convertionsObj[initUnit]).toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return {
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: `${initNum} ${this.spellOutUnit(
        initUnit
      )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`,
    };
  };
}

module.exports = ConvertHandler;
