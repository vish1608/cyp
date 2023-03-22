const yok = () => {
    cy.visit('https://stage.cms.ontum.co/')

    cy.get('#login_email').type('Administrator')
    cy.get('#login_password').type('ThisTest123')
    cy.get('.for-login > .login-content > .form-signin > .page-card-actions > .btn').click()
    cy.wait(7000)

    //User Profile
    cy.get('.widget-body > [href="/app/user-profile"]').click()
    cy.reload()
    cy.wait(7000)
    cy.get('[data-original-title="Name"] > .input-with-feedback').type('{selectall}{backspace}'); // Removes entered name
    cy.wait(3000);
    cy.get('[data-original-title="Name"] > .input-with-feedback').type('');
    cy.wait(1000);
    cy.contains('').click()
    cy.wait(1000)
    cy.get(':nth-child(3) > label > input').click();
    cy.go('back');

}

export default {yok}