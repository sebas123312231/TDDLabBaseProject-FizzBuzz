import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("deberia devolver elmismo numero si no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });

  it("deberia devolver Fizz si es multiplo de 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
});

