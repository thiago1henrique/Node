let total: string | number = 200;
total = '300';

function isNumber(value: string | number) {
  if (typeof value === 'string') return true;
  else return false;
}

console.log(isNumber(200));

const button = window.document.querySelector('button');
//if (button) button.click();
button?.click();

function toNumber(value: number | string) {
  if (typeof value === 'number') return value;
  else if (typeof value === 'string') return Number(value);
  else throw 'value deve ser um number | string';
}

console.log(toNumber(true));
