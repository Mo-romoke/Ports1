import {RegisterPage} from "./pages/register_page"
const registerPage = new RegisterPage()

it('register an organization', function(){
    cy.visit ('https://portsconnect.co/#/#home/')

    //cy.contains('Sign up')
    cy.contains('Get Started').click({force: true})

//Navigate to Organization registration Page
cy.contains('Organization').click({force: true})
    cy.get('.css-1ybh8v2')
    //cy.get('.css-1m0k933').click({force: true})  //click on org user
    //cy.contains('Register').click()
    
    //cy.get('#firstname').click()
    //cy.get('#firstname').type('cisca')
//Fill in required personal fields   
    cy.wait(6000)
    registerPage.enterFirstname()
    //cy.get('#firstname').type('Cisca')
    cy.get('#lastname').type('Red')
    cy.get('#username').type('redhood')
    registerPage.enterEmail()
    

//Fill in required organization fields   
    cy.get('.chakra-input__left-element').click()
    cy.get('.css-8j94h7 > .chakra-input').type('Nigeria')
    cy.get('.css-1l7g26l > .chakra-text').click()
    cy.get('.css-79elbk > .chakra-input__group > .chakra-input').type('7033982948')

    cy.get('#name').type('Bluetanks')
    //cy.get('#menu-button-\:r11\: > .chakra-button__icon > svg').click({force:true})
    //cy.get('#menu-button-\:r11\: > .chakra-button__icon > svg [value="option-2"]').click()
    //cy.get('#menu-button-\:r11\: > .chakra-button__icon > svg').should('hav.text','Option 2')

//it(describe to select categoriesz)
    cy.wait(8000)
    cy.get('#menu-button-\\:r9e\\:').click({force:true})
    //cy.get('#menu-button-\\:r11\\:').click({force:true})
    cy.get('#menu-list-\\:r9e\\:-menuitem-\\:rb3\\:').click()
    //cy.get('#menu-list-\\:r11\\:-menuitem-\\:r2m\\:').click()

 
//Org Size
cy.get('#menu-button-\\:r9h\\:').click({force:true})
//cy.get('#menu-button-\\:r14\\:').click({force:true})
cy.get('#menu-list-\\:r9h\\:-menuitem-\\:rbc\\:').click()
//cy.get('#menu-list-\\:r14\\:-menuitem-\\:r2u\\:').click()


//Description   
    cy.get('#description').type('At Bon specialist Clinic, we care a lot about you.')
   // cy.get('#staffId').type(AB)

//CountryandState   
    cy.get('#menu-button-\\:r9k\\:').click()
    //cy.get('#menu-button-\\:r17\\:').click()
    cy.get('#menu-list-\\:r9k\\:').click()
    //cy.get('#menu-list-\\:r9k\\:-menuitem-\\:r1nm\\:').click()
    //cy.get('#menu-list-\\:r9k\\:-menuitem-\\:r189\\:').click()
   // cy.get('#menu-list-\\:r17\\:-menuitem-\\:r87\\:').click()
    cy.get('#menu-button-\\:r9n\\:').click()
    cy.get('#menu-list-\\:r9n\\:-menuitem-\\:rjc\\:').click()
   // cy.get('#menu-button-\\:r1a\\:').click()
    //cy.get('#menu-list-\\:r1a\\:-menuitem-\\:rbn\\:').click()
    //cy.get('#menu-list-\\:r1a\\:-menuitem-\\:rct\\:').click()
    //cy.get('#stateProvince').select(["Encamp"])


    cy.get('#address').type('Lagos, Nigeria')
    cy.get('#password').type('Admin@123')
    cy.get('#repeatPassword').type('Admin@123')
    
    
    // //cy.get('#stateProvince').select(2).invoke("text").should("eq", "Andora la vella")
    
    cy.get('.chakra-checkbox__control').click()
   // cy.get('.chakra-stack > .chakra-button').click()

   cy.get('.css-1usnmje > .chakra-button').click()
    
    //cy.get('.css-12u9i0c').click()
    
    })
    