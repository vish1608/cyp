const logout = () => {
    cy.get('.jss12 > .MuiBox-root').click()
    cy.contains('Logout').click()
    cy.wait(1000)
}

export default {logout}