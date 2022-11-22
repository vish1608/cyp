import { BaseUrl } from "./consts"

const visit = () => {
    indexedDB.deleteDatabase('offline-blobs') //logs out before starting the test
    cy.visit(`${BaseUrl}/login`)
}

export default {visit}