const MoreOptions = () => {

    cy.reload()

    cy.get('.jss24 > .MuiSvgIcon-root').click()

    //Translate

    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    
    cy.get('.MuiSelect-root').select('Hindi')
    cy.contains('अनुवाद')

    cy.get('.MuiSelect-root').select('English')
    cy.contains('Translate')

    //Help
    // cy.window().then(win => {
    //     cy.stub(win, 'open').as('open')
    // })

    // cy.get('.jss67 > .MuiButtonBase-root').click()
    // cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/features/translate`, '_blank')
    
    //Escape Key
    cy.get('body').trigger('keydown', { keyCode: 27})

    //Settings (Theme)

    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()

    //Help
    // cy.window().then(win => {
    //     cy.stub(win, 'open').as('open')
    // })

    // cy.get('.jss57 > .MuiButtonBase-root').click()
    // cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/features/settings`, '_blank')

    const theme = [ {a:'Light', b:'255, 255, 255'}, {a:'One Dark', b:'40, 44, 52'},{a:'Unicorn', b:'42, 45, 61'},{a:'Ontum', b:'245, 244, 244'} ]
    theme.forEach ( ( selector ) => {
        cy.get('.MuiSelect-root').select(`${selector.a}`) //dropdown
        cy.get('.MuiButton-label').click() //save button
        cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click() //settings button
        cy.get(':nth-child(5) > .MuiPaper-root').should('have.css', 'background-color', `rgb(${selector.b})`) //color check
    })

    //Escape Key
    cy.get('body').trigger('keydown', { keyCode: 27})
    cy.get('body').trigger('keydown', { keyCode: 27})
    cy.wait(500)
}

export default {MoreOptions}