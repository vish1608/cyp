import 'cypress-if'
// import csvParse from 'csv-parse'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const vid2 = () => {

    // caches.delete('cache-storage-1'); // clears cache storage

    cy.readFile('vid.csv').then((fileContent) => {

        const rows = fileContent.split('\n').slice(1).map((row) => row.split(','));

        rows.forEach((record) => {

            const url = record[0]
            const slide = record[1]

            cy.visit(url)

            cy.get('.MuiButton-outlined', { timeout: 80000 }).click();

            cy.get('.MuiSlider-thumb', { timeout: 5000 }).type('{rightarrow}'.repeat(slide/2), { delay: 0 });

            if (slide % 2 === 0) {
                cy.get('#previous').click();
            }

            cy.get('#video-wrapper', { timeout: 10000 })
            .then(($video) => {
                $video[0].play();
                            
                // check if video is playing
                cy.get('video').should('have.prop', 'paused', false).and('have.prop', 'ended', false);
            })
        })
    }) 
}

export default {vid2}