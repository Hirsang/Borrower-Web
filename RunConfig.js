const username ='mandiridk@mail7.io'
const password ='Swadaya2'
const borrowerdashboard='https://borrower.dompetkilat.dev'
const passwordPertama='ttastats'

function generateIdCardNumber() {
    const prefix = '3276';
    const timestamp = Date.now().toString().slice(-12); // Mengambil 12 digit terakhir dari timestamp
    const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(5, '0'); // Empat digit acak
    return (prefix + timestamp + randomDigits).slice(0, 16); // Menggabungkan dan memastikan panjang tidak melebihi 16 digit
}
function generatePhoneNumber() {
    const prefix = '8';
    const randomDigits = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0'); // Sembilan digit acak
    return (prefix + randomDigits).slice(0, 12); // Menggabungkan dan memastikan panjang tidak melebihi 12 digit
}
function generateRekeningNumber() {
    const prefix = '12';
    const randomDigits = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0'); // Sembilan digit acak
    return (prefix + randomDigits).slice(0, 10); 
}
function generateEmail(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomText = '';
    for (let i = 0; i < length; i++) {
        randomText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomText;
}
function generateRandomName(prefix) {
    const names = ["Dompet", "Kilat", "Mudah", "Aman", "Cerdas"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return prefix + randomName ;
}
const login = () => {
    cy.visit(borrowerdashboard);
    cy.xpath("//h2[normalize-space()='KEBIJAKAN DAN PRIVACY']", { timeout: 10000 }).should('be.visible');
    cy.get('#mui-1').click();
    cy.get('#email').type(username);
    cy.get('#password').type(password);
    cy.get('[data-test-qa="login"]',{ timeout: 10000 }).click();
    cy.get('[data-test-qa="register"]',{timeout:10000}).should('be.visible');
    cy.get('[data-test-qa="register"]').click();
    cy.get('[data-test-qa="verify-ekyc"]').should('be.visible');
    cy.get('[data-test-qa="verify-ekyc"]').click();
}

module.exports = { 
    login,
    username, 
    password,
    passwordPertama, 
    borrowerdashboard, 
    generateIdCardNumber, 
    generatePhoneNumber, 
    generateEmail,
    generateRandomName
};
