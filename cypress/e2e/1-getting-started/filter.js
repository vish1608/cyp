import { helpBaseUrl, BaseUrl } from "./consts"

const filter = () => {
//Filter Icon
cy.get('.jss12 > :nth-child(1)').click()

//Help
cy.window().then(win => {
    cy.stub(win, 'open').as('open')
})

cy.get('.jss57 > div > [title="Help"]').click()
cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/features/filter`, '_blank')

//Grade
const GradeFilter = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13' ]
GradeFilter.forEach ( ( selector ) => {
cy.get(`:nth-child(2) > .MuiBox-root > :nth-child(${selector})`).click()
})

//Subject
const SubjectFilter = [ '1', '2', '3', '4', '5', '6', '7', '8' ]
SubjectFilter.forEach ( ( selector ) => {
cy.get(`:nth-child(4) > .MuiBox-root > :nth-child(${selector})`).click()
})

//Semester
const SemesterFilter = [ '1', '2', '3' ]
SemesterFilter.forEach ( ( selector ) => {
cy.get(`:nth-child(6) > .MuiBox-root > :nth-child(${selector})`).click()
})

//Curriculum
const CurriculumFilter = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
CurriculumFilter.forEach ( ( selector ) => {
cy.get(`:nth-child(8) > .MuiBox-root > :nth-child(${selector})`).click()
})

//Language
const LanguageFilter = [ '1', '2', '3' ]
LanguageFilter.forEach ( ( selector ) => {
cy.get(`:nth-child(10) > .MuiBox-root > :nth-child(${selector})`).click()
})

//Apply
cy.get('.MuiButton-contained').click()

//Should show chapters
cy.url().should('be.equal', `${BaseUrl}/bundles`)

//Reset
cy.wait(2000)
cy.get('.jss12 > :nth-child(1)').click()
cy.get('.MuiButton-outlined').click()
}

export default {filter}