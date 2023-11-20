import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number: number) {
  return numeral(number).format(Number.isInteger(number) ? '0,0' : '0,0.00');
}

export function getRandomNumber(digit: number) {
  return Math.random().toFixed(digit).split('.')[1];
}
