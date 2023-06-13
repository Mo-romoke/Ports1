

it ('Assertions Demo', () => {

    cy.visit('https://example.cypress.io')
   
    cy.contains('get').click()
    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class', 'query-btn')  //the .should can be replaced with .and cos it has been used mulitple times
    .should('be.visible')  //.should can be changed to .and cos it has been used multiple times
    .should('be.enabled') //.should can be changedd to .and
    

    expect(true).to.be.true
    assert.equal(4,4, 'NOTEQUAL')
})


