function addBigInt(str1: string, str2: string): string {
  const diff = str1.length - str2.length;

  if (diff >= 0) {
    str2 = "0".repeat(diff) + str2;
  } else {
    str1 = "0".repeat(-diff) + str1;
  }

  let carry = 0;
  let res = ''

  for (let index = str1.length - 1; index >= 0; index--) {
    const s1 = str1[index];
    const s2 = str2[index];

    const num = +s1 + +s2 + carry
    const ans = num % 10
    
    res = `${ans}${res}`

    carry = num >= 10 ? 1 : 0
  }
  

  return `${carry || ''}${res}`
}

addBigInt('999', '666')
