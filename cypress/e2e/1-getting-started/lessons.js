import { helpBaseUrl, BaseUrl } from "./consts"

const lessons = () => {
    cy.get('.MuiToolbar-root > :nth-child(1)').click()
    cy.get('.MuiList-root > :nth-child(3) > .MuiButtonBase-root').click()
    cy.wait(1000)

    //checks if url is correct
    cy.url().should('be.equal', `${BaseUrl}/content`)

    //Help
    cy.window().then(win => {
        cy.stub(win, 'open').as('open')
    })
    
    cy.get('.MuiPaper-root > [tabindex="0"]').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/content/lessons`, '_blank')

    //Filter to check order
    cy.get('.MuiBadge-root > .MuiSvgIcon-root').click()

    const filter = [ {a:'2', b:'9'}, {a:'4', b:'4'},{a:'6', b:'1'},{a:'8', b:'2'},{a:'10', b:'1'} ]
    filter.forEach ( ( selector ) => {
    cy.get(`:nth-child(${selector.a}) > .MuiBox-root > :nth-child(${selector.b})`).click()
    })

    //Apply
    cy.get('.MuiButton-contained').click()

    //Page 3
    cy.get('.MuiPagination-ul > :nth-child(4) > .MuiButtonBase-root').click()

    //Check order
    Cypress._.times(5, (index) => {
        // cy.get(`:nth-child(${index+1}) > .jss80 > .jss87 > .MuiPaper-root`)
        cy.get(`.MuiGrid-container > :nth-child(${index+1})`)
          .should('contain', `Lesson Number ${index+9}`)
    })

    //Reset filter
    cy.get('.MuiBadge-root > .MuiSvgIcon-root').click()
    cy.get('.MuiButton-outlined').click()

    //Opening lesson
    cy.get('.MuiGrid-container > :nth-child(5)').click()
    cy.wait(6000)

    //Help link inside lesson    
    cy.get('[title="Help"]').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/content/lessons`, '_blank')

    // Teach and Prepare
    cy.contains('Teach').click()
    cy.wait(2000)
    cy.contains('Prepare').click()
    cy.wait(2000)

    // //Fullscreen
    // cy.get('.react-pdf__Document > .MuiButtonBase-root').click()
    // cy.wait(2000)

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

    // //Exit Fullscreen
    // cy.get('.react-pdf__Document > .MuiButtonBase-root').click()
    // cy.wait(1000)

    //Go back
    cy.get('.MuiGrid-align-content-xs-center > :nth-child(1)').click()
    cy.wait(1000)
}

export default {lessons}