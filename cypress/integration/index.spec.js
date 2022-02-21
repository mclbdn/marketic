describe("Index page tests", () => {
  // Response status tests
  describe("Response status tests", () => {
    it("Loads the index page successfully", () => {
      cy.request({ url: "/" }).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  });

  // Visit index page before each test case
  before(() => {
    cy.visit("/");
  });

  // Header part tests
  describe("Header part tests", () => {
    it("Renders hero section correctly", () => {
      cy.get(".hero-container").should("exist");
    });
  });

  // Feature part tests
  describe("Feature part tests", () => {
    it("Renders feature section correctly", () => {
      cy.get(".features-section").should("exist");
    });
  });

  // Contact part tests
  describe("Contact part tests", () => {
    it("Renders contact section correctly", () => {
      cy.get(".contact-section").should("exist");
    });

    it("Allows the form to be used", () => {
      cy.get("#contact-form").within(() => {
        // Name input
        cy.get("input[name='name']")
          .should("exist")
          .type("Michal")
          .and("have.value", "Michal");

        // Email input
        cy.get("input[name='email']")
          .should("exist")
          .type("michal@email.com")
          .and("have.value", "michal@email.com");

        // Phone input
        cy.get("input[name='phone']")
          .should("exist")
          .type("123456789")
          .and("have.value", "123456789");
      });

      // Message textarea
      cy.get("textarea[name='message']")
        .should("exist")
        .type("Hi, there!")
        .and("have.value", "Hi, there!");

      // Submit button
      cy.get("button[type='submit']").should("exist").click();

      // Fields cleared
      cy.get("input[name='name']").should("have.value", "");
      cy.get("input[name='email']").should("have.value", "");
      cy.get("input[name='phone']").should("have.value", "");
      cy.get("textarea[name='message']").should("have.value", "");
    });
  });

  describe("Footer part tests", () => {
    it("Renders the footer correctly", () => {
      cy.get("footer").should("exist");
    });
  });
});
