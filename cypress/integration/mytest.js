context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://sorteio-ajax.000webhostapp.com/");
  });

  it("should add a new table row on click", () => {
    cy.get("#quantitiy").type(2);
    cy.get("#max").type(70);

    cy.get("#sortear").click();
    cy.get("tr").should("have.length", 1);

    cy.get("#sortear").click();
    cy.get("tr").should("have.length", 2);
  });
});
