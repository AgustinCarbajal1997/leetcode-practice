const reverse = (x) => {
  const MAX_INT = Math.pow(2, 31) - 1; // 2^31 - 1 (2147483647)
  const MIN_INT = -Math.pow(2, 31); // -2^31 (-2147483648)

  // Convertir el número a una cadena, invertir y manejar el signo
  const reversed =
    parseInt(Math.abs(x).toString().split("").reverse().join("")) *
    Math.sign(x);

  // Verificar si está dentro del rango de un entero de 32 bits
  if (reversed < MIN_INT || reversed > MAX_INT) {
    return 0;
  }

  return reversed;
};

console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(1534236469)); // Output: 0 (fuera del rango de 32 bits)
