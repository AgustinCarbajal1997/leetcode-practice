/*
ejemplo expandFromCenter
const s = "babad";
const left = 2;  // 'b'
const right = 2; // 'b'

expandFromCenter(s, 2, 2);
// Proceso:
1. left = 2, right = 2 -> s[left] === s[right] ('b' === 'b')
   => left-- -> 1, right++ -> 3
2. left = 1, right = 3 -> s[left] === s[right] ('a' === 'a')
   => left-- -> 0, right++ -> 4
3. left = 0, right = 4 -> s[left] !== s[right] ('b' !== 'd')
   => Sale del bucle.
   Longitud = right - left - 1 = 4 - 0 - 1 = 3

// Resultado:
console.log(expandFromCenter(s, 2, 2)); // 3 (palíndromo: "aba")

*/

const longuestPalindrome = (s) => {
  if (!s || s.length < 1) return "";

  let start = 0;
  let end = 0;

  const expandFromCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromCenter(s, i, i); // para impares
    const len2 = expandFromCenter(s, i, i + 1); // para pares
    const len = Math.max(len1 + len2); // elige el mas grande de par o impar contando desde el centro
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2); //a partir del indice central calcula cual es el indice desde donde arranca el palindromo
      end = i + Math.floor(len / 2); //a partir del indice central calcula cual es el indice desde donde termina el palindromo
    }
  }

  return s.substring(start, end + 1);
};

console.log(longuestPalindrome("babad"));
