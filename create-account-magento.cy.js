describe('Web Ui magento', () => {
    it('create account magento',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('.block-content > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#firstname').type('froz88k')
        cy.get('#lastname').type('88k')
        cy.get('#email_address').type('proandp@gmail.com')
        cy.get('#password').type('tSu!sAc4zx6Lphj')
        cy.get('#password-confirmation').type('tSu!sAc4zx6Lphj')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-error').should('contain.text', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    })
    
})