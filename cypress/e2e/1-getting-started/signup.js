import { helpBaseUrl, BaseUrl } from "./consts"

const signup = () => {

    //email
    cy.get('.MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').type('vish@ontum.co')

    cy.get(':nth-child(5) > .MuiButtonBase-root').click()

    cy.wait(4000)

    //Check for the text "Verification Code"
    cy.contains('Verification Code')

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

    cy.wait(4000)

    cy.url().should('be.equal', `${BaseUrl}/signup`)

    //Profile Setup Help
    cy.window().then(win => {
        cy.stub(win, 'open').as('open')
    })
        
    cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/getting-started/sign-up`, '_blank')

    //Personal info
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('{selectall}{backspace}')
    .type('cypress')

    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    .type('testing')

    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input')
    .type('2001-01-01')

    cy.get('.MuiSelect-root').select('Male')

    cy.get('.MuiButton-root').click()

    //Who are you? Help
    cy.get('.MuiIconButton-label > .MuiSvgIcon-root').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/getting-started/sign-up`, '_blank')

    //Who are you
    const GradeFilter = [ '5', '4', '3', '2', '1' ]
    GradeFilter.forEach ( ( selector ) => {
    cy.get(`.MuiFormGroup-root > :nth-child(${selector})`).click()
    })
    cy.get('.MuiButton-root').click()

    //School details Help        
    cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/getting-started/sign-up`, '_blank')

    //School details
    cy.get('.MuiTypography-root > .MuiButtonBase-root > .MuiButton-label').click()

    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    .type('test')

    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input')
    .type('Bangalore')

    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input')
    .type('Karnataka')

    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input')
    .type('India')

    //Submit button
    cy.get('.MuiButton-contained').click()

    cy.wait(3000)

    cy.url().should('be.equal', `${BaseUrl}/home`)
    
    //Logout
    cy.get('.jss12 > .MuiBox-root').click()
    cy.contains('Logout').click()
    cy.wait(500)

    cy.url().should('be.equal', `${BaseUrl}/login`)
}

export default {signup}