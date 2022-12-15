import { helpBaseUrl, BaseUrl } from "./consts"

const signin = () => {

    //email
    cy.get('.MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input')
    .type('vish@ontum.co')

    cy.get('.MuiButton-label').click()

    cy.wait(3000)

    //Check for the text "Verification Code"
    cy.contains('Verification Codea')

    //Help
    cy.window().then(win => {
        cy.stub(win, 'open').as('open')
    })
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/troubleshooting/otp-is-not-working`, '_blank')

    //otp
    cy.get('.MuiInputBase-input')
    .type('wcS7AENcmF4P')
    
    cy.get('.MuiButton-contained').click()

    cy.wait(3000)

    cy.url().should('be.equal', `${BaseUrl}/home`)
}

export default {signin}