
const { login, username, password, borrowerdashboard, generateIdCardNumber, generatePhoneNumber, generateRandomName, generateEmail, generateIdNPWPNumber, generateSIUPNumber } = require("../../RunConfig");


describe('EKYC-Borrower-Personal', ()=> {
    it('Step Data Diri', ()=> {
        login(username, password, borrowerdashboard);
        cy.get('#email',{timeout:5000}).should('have.value', username)
        cy.wait(1000).get('#name').type('jawara KAMPUNG');
        cy.wait(500).get('#phoneNumber').type(generatePhoneNumber());
        cy.wait(500).get('#idCardNumber').type(generateIdCardNumber())
        cy.wait(500).get('#familyCardNumber').type(generateIdCardNumber())
        cy.wait(500).get('#birthPlace').type('NEW YORK')
        cy.wait(500).xpath('//button[@aria-label="Choose date"]').click()
        cy.wait(500).xpath("//button[@aria-label='calendar view is open, switch to year view']//*[name()='svg']").click()
        cy.wait(500).xpath("//button[normalize-space()='2000']").click()
        cy.wait(500).xpath("//button[normalize-space()='8']").click()
        cy.wait(500).get('#genderId').click()
        cy.wait(500).get('#genderId-option-0').click()
        cy.wait(500).get('#numberOfFamilyMembers').type('11')
        cy.wait(500).get('#motherMaidenName').type('Mamah DeDeH')
        cy.wait(500).get('#homeOwnershipStatusId').click()
        cy.wait(500).get('#homeOwnershipStatusId-option-1').click()
        cy.wait(500).get('[data-test-qa="open-popup"]').click()
        cy.wait(500).xpath("//p[@id='alert-dialog-description']").should('be.visible');
        cy.wait(500).get('[data-test-qa="next"]').click()
        cy.xpath("//button[@aria-label='menu']").click()
        cy.get('[data-test-qa="logout"]').click()
    }),
    it('Step Data Alamat', ()=> {
        login(username, password, borrowerdashboard);
        cy.wait(1000).get('#address').type('Jl In Aja Dulu')
        cy.wait(1000).get('#neighborhood').type('5')
        cy.wait(1000).get('#hamlet').type('6')
        cy.wait(1000).get('#provinceId').click()       
        cy.wait(1000).xpath('//li[normalize-space()="JAWA BARAT"]').click()
        cy.wait(1000).get('#districtId').click()
        cy.wait(1000).xpath('//li[normalize-space()="DEPOK"]').click()
        cy.wait(1000).get('#subDistrictId').click()
        cy.wait(1000).xpath('//li[normalize-space()="TAPOS"]').click()
        cy.wait(1000).get('#urbanVillageId').click()
        cy.wait(1000).xpath('//li[normalize-space()="JATIJAJAR"]').click()
        cy.get('#postalCode',{timeout:5000}).should('have.value','16451')
        cy.wait(500).get('[data-test-qa="next"]').click()
        cy.xpath("//button[@aria-label='menu']").click()
        cy.get('[data-test-qa="logout"]').click()
    }),
    it('Step Data Perusahaan', ()=> {
        login(username, password, borrowerdashboard);
        cy.wait(1000).get('#name').type(generateRandomName('PT '))
        cy.wait(1000).get('#phoneNumber').type(generatePhoneNumber())
        cy.wait(1000).get('#email').type(generateEmail())
        cy.wait(500).get('#buildingOwnershipStatusId').click()
        cy.wait(500).get('#buildingOwnershipStatusId-option-0').click()
        cy.wait(500).get('#establishmentDeedNumber').type('213')
        cy.wait(500).get('[data-testid="CalendarIcon"]').click()
        cy.wait(500).xpath("//button[normalize-space()='2010']").click()
        cy.wait(500).xpath("//button[normalize-space()='10']").click()
        cy.wait(500).get('#establishmentLocation').type('TANAH SENGKETA')
        cy.wait(500).get('#legalEntityId').click()
        cy.wait(500).get('#legalEntityId-option-0').click()
        cy.wait(500).get('#businessTradePermitNumber').type(generateSIUPNumber())
        cy.wait(500).get('#lastAmendmentDeedNumber').type('327')
        cy.wait(500).get('#tinCardNumber').type(generateIdNPWPNumber())
        cy.wait(500).get('#industrialSectorId').click()
        cy.wait(500).get('#industrialSectorId-option-8').click()
        cy.wait(500).get('#onlineJobId').click()
        cy.wait(500).get('#onlineJobId-option-0').click()
        cy.wait(500).get('#monthlyIncome').type('12000000')
        cy.wait(500).get('#asset').type('12000000000')







        // cy.wait(500).get('[data-test-qa="next"]').click()
        // cy.xpath("//button[@aria-label='menu']").click()
        // cy.get('[data-test-qa="logout"]').click()
    })
    

})