import { helpBaseUrl, BaseUrl } from "./consts"

const chapters = () => {
    cy.get('.MuiToolbar-root > :nth-child(1)').click()
    cy.get('.MuiList-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(500)

    //checks if url is correct
    cy.url().should('be.equal', `${BaseUrl}/bundles`)

    //Help
    cy.window().then(win => {
        cy.stub(win, 'open').as('open')
    })

    cy.get('[title="Help"]').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/content/chapters`, '_blank')

    //Filter to check order
    cy.get('.MuiBadge-root > .MuiSvgIcon-root').click()

    const filter = [ {a:'2', b:'3'}, {a:'4', b:'1'},{a:'6', b:'1'},{a:'8', b:'2'},{a:'10', b:'1'} ]
    filter.forEach ( ( selector ) => {
    cy.get(`:nth-child(${selector.a}) > .MuiBox-root > :nth-child(${selector.b})`).click()
    })

    //Apply
    cy.get('.MuiButton-contained').click()

    //Check order
    Cypress._.times(8, (index) => {
        cy.get(`:nth-child(${index+1}) > .MuiPaper-root`)
          .should('contain', `Chapter Number ${index+1}`)
    })

    //Reset filter
    cy.get('.MuiBadge-root > .MuiSvgIcon-root').click()
    cy.get('.MuiButton-outlined').click()

    //Open a chapter
    cy.get(':nth-child(2) > .MuiPaper-root').click()
    cy.wait(500)

    //Open a lesson
    cy.get(':nth-child(1) > .MuiListItem-container > .MuiListItem-root').click()
    cy.wait(6000)

    //Lesson Help
    cy.get('[title="Help"]').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/content/lessons`, '_blank')

    // Teach and Prepare
    cy.get('.MuiButton-outlined').click()
    cy.wait(2000)
    cy.get('.MuiButton-outlined').click()
    cy.wait(2000)

    //Fullscreen
    cy.get('.react-pdf__Document > .MuiButtonBase-root').click()
    cy.wait(2000)

    //Arrow navigation
    for(let n = 0; n < 5; n ++){
        cy.get('#forward').click()
    }

    for(let n = 0; n < 5; n ++){
        cy.get('#previous').click()
    }

    //Slider
    cy.get('.MuiSlider-thumb').type("{rightarrow}{rightarrow}{rightarrow}");
    cy.wait(1000)

    //Exit Fullscreen
    cy.get('.react-pdf__Document > .MuiButtonBase-root').click()
    cy.wait(1000)

    //Go back
    cy.get('.MuiGrid-align-content-xs-center > :nth-child(1)').click()
    cy.wait(1000)

    //Add Bookmark
    cy.get(':nth-child(1) > .MuiListItem-container > .MuiListItemSecondaryAction-root > [aria-label="bookmark"]').click()
    cy.wait(1000)
    cy.get('#notistack-snackbar').should('contain','Bookmark added')

    //Go back
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click()

    //Page Number
    cy.get('.MuiPagination-ul > :nth-child(3) > .MuiButtonBase-root').click()
    cy.get('.MuiPagination-ul > :nth-child(4) > .MuiButtonBase-root').click()

    //Next and Previous Page Navigation
    cy.get(':nth-child(11) > .MuiButtonBase-root').click()
    cy.get('.MuiPagination-ul > :nth-child(1) > .MuiButtonBase-root').click()

    // Search
    cy.get('#search')
    .type('fruits')
    cy.get('.MuiIconButton-colorPrimary').click()

    // Clear search
    cy.get('#search').type('{selectall}{backspace}')

    //Share
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > [aria-label="share"]').click()
    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root').should('contain','Whatsapp').and('contain','Facebook').and('contain','LinkedIn').and('contain','Twitter').and('contain','SMS').and('contain','Email')

    //Escape Key
    cy.get('body').trigger('keydown', { keyCode: 27})
}

export default {chapters}