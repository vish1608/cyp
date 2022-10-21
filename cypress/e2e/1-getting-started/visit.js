import { BaseUrl } from "./consts"

const visit = () => {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit(`${BaseUrl}/login`)
}

export default {visit}