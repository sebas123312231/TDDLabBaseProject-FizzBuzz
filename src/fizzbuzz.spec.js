import fizzbuzz from "./fizzbuzz";
/*
Pruebas:

ingresa 3 -> "Fizz"
ingresa 6 -> "Fizz"
ingresa 5 -> "Buzz"
ingresa 25 -> "Buzz"
ingresa 15 -> "FizzBuzz"
ingresa 30 -> "FizzBuzz"
ingresa 2 -> "2"
ingresa 1 -> "1git"*/

describe("FizzBuzz", () => {
  it("deberia devolver elmismo numero si no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });

  it("deberia devolver Fizz si es multiplo de 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("deberia devolver Buzz si es multiplo de 5", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });
});

