describe("FizzBuzz", () => {
  it("muestra el resultado de FizzBuzz al usuario", () => {
    cy.visit("/");
    cy.get("#numero").type("15");
    cy.get("#fizzbuzz-button").click();
    cy.get("#resultado-div").should("contain", "FizzBuzz");
  });
});
