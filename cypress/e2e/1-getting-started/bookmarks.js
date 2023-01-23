import { helpBaseUrl, BaseUrl } from "./consts"

const bookmarks = () => {
    cy.get('.MuiToolbar-root > :nth-child(1)').click()
    cy.get('.MuiList-root > :nth-child(4) > .MuiButtonBase-root').click()
    cy.wait(1000)

    //checks if url is correct
    cy.url().should('be.equal', `${BaseUrl}/bookmarks`)

    //Help
    cy.window().then(win => {
        cy.stub(win, 'open').as('open')
    })
    
    cy.get('.MuiBox-root > .MuiIconButton-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/content/bookmarks`, '_blank')

    //Sync bookmarks
    cy.get('.MuiButton-root').click()
    cy.wait(1000)

    //Lessons tab
    cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()
    cy.wait(1000)

    //Chapters tab
    cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()

    //Remove Bookmark
    cy.get('.MuiCardHeader-action').click()
    cy.get('[tabindex="0"][role="menuitem"] > .MuiButtonBase-root').click()
    cy.get('#notistack-snackbar').should('contain','Bookmark removed') 
}

export default {bookmarks}