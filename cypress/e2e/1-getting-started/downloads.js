import { helpBaseUrl, BaseUrl } from "./consts"

const downloads = () => {
    cy.get('.MuiToolbar-root > :nth-child(1)').click()
    cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root').click()
    cy.wait(2000)

    //checks if url is correct
    cy.url().should('be.equal', `${BaseUrl}/downloads`)

    //Help
    cy.window().then(win => {
        cy.stub(win, 'open').as('open')
    })
    
    cy.get(':nth-child(2) > .MuiBox-root > .MuiIconButton-root').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/content/my-downloads`, '_blank')

    //Sync downloads
    cy.get('#sync_download').click()
    cy.wait(2000)

    //Delete download
    cy.get(':nth-child(1) > .jss164 > .jss172 > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-action > .MuiButtonBase-root').click()
    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000)
}

export default {downloads}