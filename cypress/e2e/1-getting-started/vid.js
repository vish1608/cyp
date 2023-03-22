import 'cypress-if'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const vid = () => {

    // caches.delete('cache-storage-1'); // clears cache storage

    cy.wait(2000)
    cy.get('.MuiToolbar-root > :nth-child(1)').click(); // Side Menu
    cy.get('#lessons > .MuiButtonBase-root').click(); // Lesson Button
    cy.get('[title="Filters"]').click(); //Filter
    cy.get(':nth-child(2) > .MuiBox-root > :nth-child(2)').click(); // Grade
    cy.get('.MuiButton-contained').click(); // Apply

    cy.wait(1000);

    for(let n = 0; n < 884; n ++) {

        cy.reload();
        caches.delete('cache-storage-1'); // clears cache storage
        
        // Opening lessons
        Cypress._.times(12, (index) => {
            cy.get(`.jss8 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(${index + 1})`, { timeout: 80000 }).click();

            cy.contains('videos').if('visible')
            .then(() => {
                cy.get('.MuiSlider-thumb', { timeout: 80000 }).type('{rightarrow}'.repeat(150), { delay: 0 }); // moves slider to last slide

                cy.get('.MuiSlider-thumb').then(($page) => {
                    const pagenum = $page.text()

                    for(let n = 0; n < pagenum; n ++) {

                        cy.get('#video-wrapper').if('visible')
                        .then(($video) => {
                            $video[0].play();
                
                            // check if video is playing
                            cy.get('video').should('have.prop', 'paused', false).and('have.prop', 'ended', false);
                        })  

                        cy.get('#previous').click();
                    }

                    // Lesson Name
                    cy.get('[direction="column"] > .MuiGrid-root > .MuiTypography-root')
                    .then(($temp)=>{
                        const txt = $temp.text() // copy
                        cy.writeFile('lessons.csv', `${txt}` + ' | ' , { flag: 'a+' }) // paste
                    })

                    // Lesson details
                    cy.get('.MuiTypography-root').eq(3)
                    .then(($tempp)=>{
                        const txtt = $tempp.text() // copy
                        cy.writeFile('lessons.csv', `${txtt}` + '\n', { flag: 'a+' }) // paste
                    })
                
                    cy.go('back');
                })

            })
            .else()
            .then(() => {
                cy.go('back');
            })
        
        });

        cy.get(':nth-child(11) > .MuiButtonBase-root').click(); // Next Page
    }
    
}

export default {vid}