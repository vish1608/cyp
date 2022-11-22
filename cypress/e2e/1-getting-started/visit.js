import { BaseUrl } from "./consts"

const visit = () => {
    indexedDB.deleteDatabase('offline-blobs') //logs out before starting the test
    cy.visit(`${BaseUrll}/login`)
}

export default {visit}