// import { helpBaseUrl, BaseUrl } from "./consts"

import 'cypress-if'
// import csvParse from 'csv-parse'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const vid2 = () => {

    // //email
    // cy.get('.MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input')
    // .type('vishal@ontum.co')

    // cy.get('.MuiButton-label').click()

    // cy.wait(3000)

    // //Check for the text "Verification Code"
    // cy.contains('Verification Code')

    // //Help
    // cy.window().then(win => {
    //     cy.stub(win, 'open').as('open')
    // })
    // cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    // cy.get('@open').should('calledWithExactly', `${helpBaseUrl}/troubleshooting/otp-is-not-working`, '_blank')

    // //otp
    // cy.get('.MuiInputBase-input')
    // .type('wcS7AENcmF4P')
    
    // cy.get('.MuiButton-contained').click()

    // // cy.wait(10000)

    // cy.url().should('be.equal', `${BaseUrl}/home`)

    // cy.wait(3000)

    
    cy.readFile('vid.csv').then((fileContent) => {

        const rows = fileContent.split('\n').slice(1).map((row) => row.split(','));

        rows.forEach((record) => {

            const url = record[0]
            const slide = record[1]

            cy.visit(url)

            // cy.url().then(urll => {
            //     cy.writeFile('url.csv', `${urll}`) // paste
            // });

            cy.get('.MuiButton-outlined', { timeout: 80000 }).click({force: true});

            cy.get('.react-pdf__Page__canvas', { timeout: 80000 });

            cy.get('[style="position: absolute; bottom: 5px; left: 50%; transform: translate(-50%, 0px); width: 100%; background: rgba(2, 2, 2, 0.71); display: flex; justify-content: center; align-items: center; height: 100%;"]').should('not.exist');

            cy.get('body', { timeout: 8000 }).focus().type(Cypress._.repeat('{rightarrow}', (slide-1)), { delay: 0 });

            // cy.get('.MuiSlider-thumb', { timeout: 8000 }).type('{rightarrow}'.repeat(slide/2), { delay: 0 });

            // // compare page number
            // cy.get('.MuiSlider-thumb').then(($currentpage) => {
            //     const currentnum = $currentpage.text()
            
            //     cy.get('#forward').click();

            //     cy.get('.MuiSlider-thumb').then(($nextpage) => {
            //         const nextnum = $nextpage.text()
                
            //         if (currentnum !== nextnum) {
            //             cy.get('#previous').click();

            //             if (slide % 2 === 0) {
            //                 cy.get('#previous').click();
            //             }
            //         } 
            //     })
            // })

            cy.get('#video-wrapper', { timeout: 5000 }).if('visible')
            .then(($video) => {
                $video[0].play();
                            
                // check if video is playing
                cy.get('video').should('have.prop', 'paused', false).and('have.prop', 'ended', false);
            })
            .else()
            .then(() => {

                cy.get('body').trigger('mousemove')

                // Lesson link
                cy.url().then(url => {
                    cy.writeFile('lessons.csv', `${url}` + ',' , { flag: 'a+' }) // paste
                });

                // Slide number
                if (slide != null) {
                    const slider = slide.replace(/[^0-9]/g, '');
                    cy.writeFile('lessons.csv', `${slider}` + ',' , { flag: 'a+' })
                }

                // Lesson Name
                cy.get('[direction="column"] > .MuiGrid-root > .MuiTypography-root')
                .then(($temp)=>{
                    const txt = $temp.text() // copy
                    cy.writeFile('lessons.csv',  `${txt}` + ',' , { flag: 'a+' }) // paste
                })

                // Lesson details
                cy.get('.MuiTypography-root').eq(3)
                .then(($tempp)=>{
                    const txtt = $tempp.text() // copy
                    const txttt = txtt.replace(/\|/g, ',')
                                      .replace(/Curriculum: /g, '')
                                      .replace(/Subject: /g, '')
                                      .replace(/Semester: /g, '')
                                      .replace(/Grade: /g, '')
                                      .replace(/Language: /g, '');
                    cy.writeFile('lessons.csv', `${txttt}` + '\n', { flag: 'a+' }) // paste
                })

            })

            cy.window().then((win) => {
                caches.delete('cache-storage-1');
                caches.delete('images');
            });

            cy.readFile('vid.csv').then((file) => {

                // Split the file content into rows
                const rowss = file.split('\n');

                // Remove the second row
                rowss.splice(1, 1);
                
                // Join the rows back into a string
                const newFile = rowss.join('\n');
                
                // Write the updated file back to disk
                cy.writeFile('vid.csv', newFile);
            });

        })
    }) 
}

export default {vid2}