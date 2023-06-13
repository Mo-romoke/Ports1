describe('All login Tests', function(){

    it ('Book an Appointment', function(){
cy.visit ('https://portsconnect.co/#/#home/')
//cy.contains('Get Started').click({force: true})
cy.contains('Get Started').click()

cy.contains('Book an appointment').click()
cy.get(':nth-child(1)').should('be.visible')
cy.get(':nth-child(1)').eq(1).click({force:true});

cy.get(':nth-child(1)').click("book an appointment");
  
//cy.get(':nth-child(1)').click({multiple:true})

//cy.contains('Filter by').click()
//cy.get('#menu-button-\:rj\:').should ('be.selected')


//cy.get('#menu-button-\:rj\: > .chakra-button__icon > svg').click()

//cy.get('#menu-button-\:rj\: > .chakra-button__icon > svg').click()
//cy.get('#menu-button-\:rj\:'). click()

//cy.get(':nth-child(1) > .css-xi606m > .partnerLogo'). click()

//cy.get('#menu-button-\:r2\:').click({force: true})


//cy.contains('Home').click()
//cy.get('#popover-trigger-\:r1g\: > .chakra-text').click()
//cy.get('#popover-trigger-\:r2m\: > .chakra-text').click


    })
})