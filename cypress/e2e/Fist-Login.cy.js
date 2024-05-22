const { username, passwordPertama, password, borrowerdashboard } = require("../../RunConfig");

describe('First Login Borrower', () => {
  it('Login & Reset Password', () => {
    cy.visit(borrowerdashboard)
    cy.xpath("//h2[normalize-space()='KEBIJAKAN DAN PRIVACY']", { timeout: 10000 }).should('be.visible'); // Menunggu hingga elemen terlihat dengan timeout 10 detik
    cy.get('#mui-1').click();

    cy.get('#email').type(username)
    cy.get('#password').type(passwordPertama)
    cy.get('[data-test-qa="login"]',{ timeout: 10000 }).click()

    cy.xpath("//div[@class='css-tyvuyb']", {timeout:10000}).should('be.visible');
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(password)
    cy.xpath("//button[normalize-space()='Login!']").click()

    cy.get('[data-test-qa="register"]',{timeout:10000}).should('be.visible')
    cy.get('[data-test-qa="close-popup"]').click()
    cy.xpath("//button[@aria-label='menu']").click()
    cy.get('[data-test-qa="logout"]').click()
  })
})
