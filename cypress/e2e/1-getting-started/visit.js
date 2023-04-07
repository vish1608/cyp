import { BaseUrl } from "./consts"

const visit = () => {
    indexedDB.deleteDatabase('state_store'); // logs out before starting the test
    indexedDB.deleteDatabase('offline-blobs');
    caches.delete('cache-storage-1'); // clears cache storage
    cy.visit(`${BaseUrl}/login`)
    // cy.contains('ssss')
}

export default {visit}