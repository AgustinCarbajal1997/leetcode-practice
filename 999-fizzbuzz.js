const isMultiplo = (nb, multiplo) => {
  if (nb % multiplo === 0) return true;
  return false;
};

const initFizzbuzz = (limit) => {
  let result = [];
  for (let i = 1; i <= limit; i++) {
    if (isMultiplo(i, 3) && isMultiplo(i, 5)) {
      result.push("fizzbuzz");
      continue;
    }
    if (isMultiplo(i, 3)) {
      result.push("fizz");
      continue;
    }
    if (isMultiplo(i, 5)) {
      result.push("buzz");
      continue;
    }
    result.push(`${i}`);
  }
  return result;
};

console.log(initFizzbuzz(50));
