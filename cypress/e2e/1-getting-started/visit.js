import { BaseUrl } from "./consts"

const visit = () => {
    indexedDB.deleteDatabase('offline-blobs') //logs out before starting the test
    cy.visit(`${BaseUrl}/login`)
    // cy.contains('ssss')
}

export default {visit}