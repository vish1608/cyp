#!/usr/bin/env python

import fileinput

# Replace "old_text" with "new_text"
def replace_text(file_path):
    for line in fileinput.input(file_path, inplace=True):
        print(line.replace("cy.get('.MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').type('vish@ontum.co')", "cy.get('.MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').type('vich@ontum.co')"), end="")

# Provide the path to the file you want to modify 
replace_text("c/Users/vc168/cyp/cypress/e2e/1-getting-started/signin.js")
