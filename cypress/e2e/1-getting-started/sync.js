const sync = () => {
    cy.get('.jss18').click()
    cy.wait(3000)
    cy.get('#notistack-snackbar').should('contain','Sync completed')
}

export default {sync}