import { BaseUrl } from "./consts"

const visit = () => {
    cy.visit(`${BaseUrl}/login`)
}

export default {visit}