export function numToBinary(num: number): string {
  if (typeof num !== 'number') {
    throw new Error('num is not a number.');
  }

  let integer = parseInt(`${num}`);
  let decimals = num - integer;

  let remainder = 0;
  let integerBinary = '';

  while (integer !== 0) {
    remainder = integer % 2;
    integer = parseInt(`${integer / 2}`);
    integerBinary = remainder + integerBinary;
  }

  let product = 0;
  let decimalsBinary = '';

  while (decimals !== 0) {
    decimals = decimals * 2;
    product = parseInt(`${decimals}`);
    decimals -= product;
    decimalsBinary += product;
  }

  return [integerBinary || '0', decimalsBinary].filter(item => !!item).join('.');
}
