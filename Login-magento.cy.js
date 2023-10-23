describe('Web Ui magento', () => {
    it('Failed login magento',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email.input-text').type('proandp@gmail.com')
        cy.get('#pass.input-text').type('password')
        cy.get('#send2.action.login.primary').click()
        cy.get('.message-error > div')
    })
    it('Success login magento',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email.input-text').type('Proandp@gmail.com')
        cy.get('#pass.input-text').type('tSu!sAc4zx6Lphj')
        cy.get('#send2.action.login.primary').click()
        cy.get('.base').should('be.visible')
    })
    
})