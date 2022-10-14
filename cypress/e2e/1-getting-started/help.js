import { helpBaseUrl, BaseUrl } from "./consts"

const help = () => {
    cy.get('.MuiToolbar-root > :nth-child(1)').click()
    cy.contains('Help').click()
    cy.wait(1000)

    //checks if url is correct
    cy.url().should('be.equal', `${BaseUrl}/help`)

    //Get In Touch
    cy.get('.MuiGrid-spacing-xs-2 > :nth-child(3)')
    .should('contain', '+91 93800 84748')
    .and('contain', 'support@meghshala.online')
    .and('contain', '+91 63629 08766')
    .and('contain', 'contact@ontum.co')

    //FAQ (Help links)
    cy.window().then(win => {
        cy.stub(win, 'open').as('open')
    })

    const help = [ {a:'1', b:'getting-started'}, {a:'2', b:'content'},{a:'3', b:'features'},{a:'4', b:'troubleshooting'},{a:'5', b:''} ]
    help.forEach ( ( selector ) => {
        cy.get(`.MuiGrid-container.MuiGrid-grid-xs-8 > .MuiList-root > :nth-child(${selector.a})`).click()
        cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/${selector.b}`, '_blank')
    })
}

export default {help}