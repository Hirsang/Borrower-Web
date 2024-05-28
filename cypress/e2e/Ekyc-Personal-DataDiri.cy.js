/// <reference types="Cypress" />

const { login, username, password, borrowerdashboard, generateIdCardNumber, generatePhoneNumber, generateRandomName, generateEmail, generateIdNPWPNumber, generateSIUPNumber, Data1, Data2, Data3, MaxSize, FilePDF, generateNama, nama, name, generateRekeningNumber } = require("../../RunConfig");

describe('EKYC-Borrower-Personal', ()=> {
    it('Step Data Diri', ()=> {
        login(username, password, borrowerdashboard);
        cy.get('#email',{timeout:5000}).should('have.value', username)
        cy.wait(1000).get('#name').type(name);
        cy.wait(300).get('#phoneNumber').type(generatePhoneNumber());
        cy.wait(300).get('#idCardNumber').type(generateIdCardNumber())
        cy.wait(300).get('#familyCardNumber').type(generateIdCardNumber())
        cy.wait(300).get('#birthPlace').type('KANDANG AYAM')
        cy.wait(300).xpath('//button[@aria-label="Choose date"]').click()
        cy.wait(300).xpath("//button[@aria-label='calendar view is open, switch to year view']//*[name()='svg']").click()
        cy.wait(300).xpath("//button[normalize-space()='2000']").click()
        cy.wait(300).xpath("//button[normalize-space()='8']").click()
        cy.wait(300).get('#genderId').click()
        cy.wait(300).get('#genderId-option-0').click()
        cy.wait(300).get('#numberOfFamilyMembers').type('11')
        cy.wait(300).get('#motherMaidenName').type('Mamah DeDeH')
        cy.wait(300).get('#homeOwnershipStatusId').click()
        cy.wait(300).get('#homeOwnershipStatusId-option-1').click()
        cy.wait(300).get('[data-test-qa="open-popup"]').click()
        cy.wait(300).xpath("//p[@id='alert-dialog-description']").should('be.visible');
        cy.wait(300).get('[data-test-qa="next"]').click()
        cy.wait(1000).xpath("//button[@aria-label='menu']").click()
        cy.wait(300).get('[data-test-qa="logout"]').click()
    })
    it('Step Data Alamat', ()=> {
        login(username, password, borrowerdashboard);
        cy.wait(500).get('#address').type('Jl In Aja Dulu')
        cy.wait(500).get('#neighborhood').type('5')
        cy.wait(500).get('#hamlet').type('6')
        cy.wait(500).get('#provinceId').click()       
        cy.wait(500).xpath('//li[normalize-space()="JAWA BARAT"]').click()
        cy.wait(500).get('#districtId').click()
        cy.wait(500).xpath('//li[normalize-space()="DEPOK"]').click()
        cy.wait(500).get('#subDistrictId').click()
        cy.wait(500).xpath('//li[normalize-space()="TAPOS"]').click()
        cy.wait(500).get('#urbanVillageId').click()
        cy.wait(500).xpath('//li[normalize-space()="JATIJAJAR"]').click()
        cy.get('#postalCode',{timeout:5000}).should('have.value','16451')
        cy.wait(300).get('[data-test-qa="next"]').click()
        cy.wait(1000).xpath("//button[@aria-label='menu']").click()
        cy.wait(500).get('[data-test-qa="logout"]').click()
    }),
    it('Step Data Perusahaan', ()=> {
        login(username, password, borrowerdashboard);
        cy.wait(2000).get('#name').type(generateRandomName('PT '))
        cy.wait(1500).get('#phoneNumber').type(generatePhoneNumber())
        cy.wait(1500).get('#email').type(generateEmail(8)+'@mail7.io')
        cy.wait(300).get('#buildingOwnershipStatusId').click()
        cy.wait(300).get('#buildingOwnershipStatusId-option-0').click()
        cy.wait(300).get('#establishmentDeedNumber').type('213')
        cy.wait(300).get('[data-testid="CalendarIcon"]').click()
        cy.wait(300).xpath('//button[@aria-label="calendar view is open, switch to year view"]//*[name()="svg"]').click()
        cy.wait(300).xpath("//button[normalize-space()='2010']").click()
        cy.wait(300).xpath("//button[normalize-space()='10']").click()
        cy.wait(300).get('#establishmentLocation').type('TANAH')
        cy.wait(300).get('#legalEntityId').click()
        cy.wait(300).get('#legalEntityId-option-0').click()
        cy.wait(300).get('#businessTradePermitNumber').type(generateSIUPNumber())
        cy.wait(300).get('#lastAmendmentDeedNumber').type('327')
        cy.wait(300).get('#tinCardNumber').type(generateIdNPWPNumber())
        cy.wait(300).get('#industrialSectorId').click()
        cy.wait(300).get('#industrialSectorId-option-8').click()
        cy.wait(300).get('#onlineJobId').click()
        cy.wait(300).get('#onlineJobId-option-0').click()
        cy.wait(300).get('#monthlyIncome').type('12000000')
        cy.wait(300).get('#asset').type('12000000000')
        cy.wait(300).get('#address').type('Jl Doang')
        cy.wait(500).get('#provinceId').click()       
        cy.wait(500).xpath('//li[normalize-space()="JAWA BARAT"]').click()
        cy.wait(500).get('#districtId').click()
        cy.wait(500).xpath('//li[normalize-space()="DEPOK"]').click()
        cy.wait(500).get('#subDistrictId').click()
        cy.wait(500).xpath('//li[normalize-space()="TAPOS"]').click()
        cy.wait(500).get('#urbanVillageId').click()
        cy.wait(500).xpath('//li[normalize-space()="CILANGKAP"]').click()
        cy.get('#postalCode',{timeout:5000}).should('have.value','16458')
        cy.wait(500).get('[data-test-qa="next"]').click()
        cy.wait(1000).xpath("//button[@aria-label='menu']").click()
        cy.wait(300).get('[data-test-qa="logout"]').click()
    }),
    it('Step Data Upload Doc PIC', ()=> {
        login(username, password, borrowerdashboard);
        //Test Foto Selfie
        cy.wait(1000).get('#selfie').attachFile(MaxSize)
        cy.wait(1000).xpath('//*[contains(text(),"Foto Selfie harus kurang dari 900KB")]').should('be.visible')
        cy.wait(1000).get('#selfie').attachFile(FilePDF)
        cy.wait(1000).xpath('//*[contains(text(),"Foto Selfie tidak valid")]').should('be.visible')
        cy.wait(1000).get('#selfie').attachFile(Data1)
        //Test Foto KTP
        cy.wait(1000).get('#identityCard').attachFile(MaxSize)
        cy.wait(1000).xpath('//*[contains(text(),"Foto KTP harus kurang dari 900KB")]').should('be.visible')
        cy.wait(1000).get('#identityCard').attachFile(FilePDF)
        cy.wait(1000).xpath('//*[contains(text(),"Foto KTP tidak valid")]').should('be.visible')
        cy.wait(1000).get('#identityCard').attachFile(Data2)
        //Test Foto NPWP
        cy.wait(1000).get('#tinCard').attachFile(MaxSize)
        cy.wait(1000).xpath('//*[contains(text(),"Foto NPWP harus kurang dari 900KB")]').should('be.visible')
        cy.wait(1000).get('#tinCard').attachFile(FilePDF)
        cy.wait(1000).xpath('//*[contains(text(),"Foto NPWP tidak valid")]').should('be.visible')
        cy.wait(1000).get('#tinCard').attachFile(Data3)

        cy.wait(300).get('[data-test-qa="open-poup"]').click()
        cy.wait(300).xpath("//p[@id='alert-dialog-description']").should('be.visible');
        cy.wait(300).get('[data-test-qa="next"]').click()
        cy.wait(50000).xpath("//button[@aria-label='menu']").click()
        cy.wait(300).get('[data-test-qa="logout"]').click()
    }),
    it('Step Data Bank', ()=>{
        login(username, password, borrowerdashboard);
        cy.wait(1500).get('#accountHolderName').type(name)
        cy.wait(500).get('#bankId').click()
        cy.wait(500).get('#bankId-option-18').click()
        cy.wait(1000).get('#accountNumber').type(generateRekeningNumber())
        cy.wait(1000).xpath('//*[contains(text(),"Serta menyetujui dan mengizinkan penggunaan, pemrosesan, dan transfer Data Pribadi saya sebagaimana dijelaskan di dalamnya, termasuk mengizinkan penyedia layanan PT Indo Fin Tek (Dompet Kilat) untuk melakukan penggunaan, pemrosesan, dan transfer Data Pribadi sesuai kebijakan Perusahaan yang berlaku. Dapat diakses pada laman berikut")]').should('be.visible')
        // cy.wait(300).xpath("//span[normalize-space()='Kebijakan Privasi Pengguna.']").click()
        cy.wait(300).get('[aria-label="ant design"]').click()
        cy.wait(500).xpath("//h2[normalize-space()='KEBIJAKAN PRIVASI PENGGUNA']")
        cy.wait(300).get('[data-test-qa="close-popup-snk"]').click()
        cy.wait(300).get('[data-test-qa="submit"]').click()
        cy.wait(1500).xpath('//*[contains(text(),"Harap Menunggu Hasil Verifikasi Data..")]')

        //[Mandiri-18][bca-19][BRI-12][BNI-24][SAHABAT SAMPOERNA-22][PERMATA-17]
    })
    

})