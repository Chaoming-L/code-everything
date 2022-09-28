function _26convertTo10(str) {
  let num = 0;
  for (let i = str.length - 1, j = 1; i >= 0; i--, j *= 26) {
    const s = str[i].toUpperCase();
    num += (s.charCodeAt() - 64) * j;
  }

  return num;
}
_26convertTo10('BA');

function _10convertTo26(num) {
  let code = '';

  while (num > 0) {
    let n = num % 26 === 0 ? 26 : num % 26;

    code = String.fromCharCode(parseInt(n) + 64) + code;

    num = (num - n) / 26;
  }

  return code;
}
_10convertTo26(52);

function _10To2(num) {
  let code = '';
  
  while (num > 0) {
    let n = num % 2;
    code = n + '' + code;
    num = (num - n) / 2;
  }

  return code;
}
_10To2(12);

Number(12).toString(2);

