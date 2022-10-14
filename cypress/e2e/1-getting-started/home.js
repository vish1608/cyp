import { helpBaseUrl } from "./consts"

const home = () => {

    //Help
    cy.window().then(win => {
        cy.stub(win, 'open').as('open')
    })

    cy.get('[title="Help"]').click()
    cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/content/home`, '_blank')

    //Grade
    const Grade = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', 'Elementary%20(1-3)', 'Middle%20(6-8)', 'Primary%20(4-5)' ]
    Grade.forEach ( ( selector ) => {
    cy.get(`[href="/bundles?filters=%7B%22grade%22%3A%5B%22${selector}%22%5D%7D"] > .MuiCardContent-root`).click()
    cy.go('back')
    })

    //Subject
    const Subject = [ 'English', 'Environmental%20Science', 'MELA', 'Mathematics', 'Phonics', 'Science', 'Social%20Science', 'Teacher%20Training' ]
    Subject.forEach ( ( selector ) => {
    cy.get(`[href="/bundles?filters=%7B%22subject%22%3A%5B%22${selector}%22%5D%7D"] > .MuiCardContent-root`).click()
    cy.go('back')
    })

    //Semester
    const Semester = [ '1', '2', 'Home' ]
    Semester.forEach ( ( selector ) => {
    cy.get(`[href="/bundles?filters=%7B%22semester%22%3A%5B%22${selector}%22%5D%7D"] > .MuiCardContent-root`).click()
    cy.go('back')
    })

    //Curriculum
    const Curriculum = [ 'ALL', 'Bridge%20Course', 'KA.S.B', 'Learn%20at%20Home', 'N.C.E.R.T', 'N.E', 'NCERT-OnGround', 'S.C.E.R.T', 'Teacher%20Training' ]
    Curriculum.forEach ( ( selector ) => {
    cy.get(`[href="/bundles?filters=%7B%22curriculum%22%3A%5B%22${selector}%22%5D%7D"] > .MuiCardContent-root`).click()
    cy.go('back')
    })

    //Language
    const Language = [ 'English', 'Hindi', 'Kannada' ]
    Language.forEach ( ( selector ) => {
    cy.get(`[href="/bundles?filters=%7B%22language%22%3A%5B%22${selector}%22%5D%7D"] > .MuiCardContent-root`).click()
    cy.go('back')
    })
}

export default {home}