const cms = () => {
    cy.visit('https://stage.cms.ontum.co/')

    cy.get('#login_email').type('Administrator')
    cy.get('#login_password').type('ThisTest123')
    cy.get('.for-login > .login-content > .form-signin > .page-card-actions > .btn').click()
    cy.wait(7000)

    //User Profile
    cy.get('.widget-body > [href="/app/user-profile"]').click()
    cy.contains('cypress@ontum.co').click()
    cy.wait(1000)
    cy.get('body').type('{shift}{ctrl}{d}')
    cy.get('.modal-footer > .standard-actions > .btn-primary').click()
    
    cy.go('back')
    

    //User
    cy.get('[href="/app/user"]').click()
    cy.reload()
    cy.wait(8000)
    cy.contains('cypress@ontum.co').click()
    cy.wait(1000)
    cy.get('body').type('{shift}{ctrl}{d}')
    cy.get('.modal-footer > .standard-actions > .btn-primary').click()
}

export default {cms}