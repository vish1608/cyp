import { helpBaseUrl, BaseUrl } from "./consts"

const profile = () => {
    //Account
    cy.get('.jss12 > .MuiBox-root').click()
    cy.contains('Account').click()
    cy.wait(1000)

    //checks if url is correct
    cy.url().should('be.equal', `${BaseUrl}/app/account`)

    window.localStorage.setItem('country', 'india')

    //Edit
    cy.contains('Edit').click()

    //First name
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .type('ss')

    //Last name
    cy.get('.MuiGrid-grid-md-9 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .type('gg')

    //dob
    cy.get('.MuiGrid-grid-md-9 > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .type('2001-01-01')

    //Gender
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').select('Female')

    //User Type
    cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').select('Other')
    
    //Save Changes
    cy.get('.MuiButton-containedSecondary').click()

    //Snackbar
    cy.get('#notistack-snackbar').should('contain', 'Profile updated')

    //Back to homepage
    cy.get('.MuiToolbar-root > :nth-child(1)').click()
    cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
}

export default {profile}