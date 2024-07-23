export const username ='kidawot653@tiervio.com'
export const password ='Swadaya2'
export const borrowerdashboard='https://borrower.dompetkilat.dev'
export const passwordPertama='TLb7f6773d36'

export function generateIdCardNumber() {
    const prefix = '3999';
    const timestamp = Date.now().toString().slice(-12); // Mengambil 12 digit terakhir dari timestamp
    const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(5, '0'); // Empat digit acak
    return (prefix + timestamp + randomDigits).slice(0, 16); // Menggabungkan dan memastikan panjang tidak melebihi 16 digit
}
export function generatePhoneNumber() {
    const prefix = '080';
    const randomDigits = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0'); // Sembilan digit acak
    return (prefix + randomDigits).slice(0, 12); // Menggabungkan dan memastikan panjang tidak melebihi 12 digit
}
export function generateRekeningNumber() {
    const prefix = '12';
    const randomDigits = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0'); // Sembilan digit acak
    return (prefix + randomDigits).slice(0, 10); 
}
export function generateEmail(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomText = '';
    for (let i = 0; i < length; i++) {
        randomText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomText;
}
export function generatenama() {
    const firstNames = [
        "Adi", "Budi", "Cahyo", "Dewi", "Eko", "Fajar", "Gita", "Hadi", "Ika", "Joko",
        "Kartika", "Lina", "Mira", "Nia", "Oka", "Putri", "Rizki", "Sari", "Teguh", "Umi"
    ];
    const lastNames = [
        "Santoso", "Wijaya", "Saputra", "Pratama", "Suharto", "Gunawan", "Wibowo", "Purnomo", "Rahayu", "Lestari",
        "Anggraini", "Susilo", "Rahardjo", "Yulianto", "Utami", "Hermanto", "Sudarmo", "Nugroho", "Handayani", "Setiawan"
    ];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
}
export function generateRandomNumber(length) {
    const characters = '1234567890';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
export const getNama = () => {
    const nama = Cypress.env('nama', generatenama());
    if (!nama) {
    throw new Error('nama tidak tersedia');
    }
    return nama;
};
export function generateRandomName(prefix) {
    const names = ["Dompet", "Kilat", "Mudah", "Aman", "Cerdas", "Jaya"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return prefix + randomName ;
}
export const login = () => {
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
// data foto
export const MaxSize = 'MaxFile.jpg'
export const FilePDF ='FilePDF.pdf'
export const Data1 = 'Data1.jpg'
export const Data2 = 'Data2.png'
export const Data3 = 'Data3.png'


