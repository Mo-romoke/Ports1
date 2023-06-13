
import {RegisterPage} from "./pages/register_page"
const registerPage = new RegisterPage()
//describe('All Signup Tests', function(){

it ('Register a Personnel user', function(){
cy.visit ('https://portsconnect.co/#/#home/')

cy.contains('Get Started').click({force: true})
cy.contains('Personnel').click({force: true})
//cy.contains('Register your organisation')
cy.wait(8000)
//cy.get('.css-wsjef9').click({force: true})    //for clicking on personnel

registerPage.enterFirstname()
registerPage.enterLastname()

registerPage.enterEmail()

cy.get('.chakra-input__left-element').click()
cy.get('.css-8j94h7 > .chakra-input').type('Nigeria')
cy.get('.css-1l7g26l > .chakra-text').click()
cy.get('.css-79elbk > .chakra-input__group > .chakra-input').type('7033982948')
//registerPage.enterPhoneNumber()
registerPage.enterPassword()
//registerPage.enterConfirmPassword()
cy.get('#repeatPassword').type('Admin@123')
cy.get('.chakra-checkbox__control').click()
cy.get('.css-1usnmje > .chakra-button').click()


})




/*it('register an organization', function(){

cy.contains('Get Started').click({force: true})
cy.get('#menu-list-\:re\:-menuitem-\:rf\:').click
cy.contains('Register').click()
cy.get('#firstname').type('cisca')
cy.get('#lastname').type('Red')
cy.get('#username').type('redhood')
cy.get('#bizName').type('Bon specialist clinic')
cy.get('#email').type('aromoke14@gmail.com')
cy.get('#address').type('Lagos, Nigeria')
cy.get('#organizationSize').should ('be.visible')
cy.contains('Organization Size').should ('be.visible')
cy.get('#organizationSize').select(2).invoke("val").should("eq", "10-50")

cy.get('#country').select(6).invoke("val").should("eq", "Andorra")

cy.get('#category').select(2).invoke("text").should("eq", "schools")

cy.get('#category').select(["hospitals"])

// //cy.get('#stateProvince').select(2).invoke("text").should("eq", "Andora la vella")
cy.get('#stateProvince').select(["Encamp"])

cy.get('#phoneNumber').type('07033982948')

cy.get('#password').type('Admin@123')

cy.get('#description').type('At Bon specialist Clinic, we care a lot about you.')

cy.get('.chakra-stack > .chakra-button').click()



cy.get('.css-12u9i0c').click()

})












//registerPage.enterUsername()
//registerPage.enterBusinessName()
//registerPage.enterAddress()
//registerPage.enterOrganizationSize()
//registerPage.enterCountry()
//registerPage.enterCategory()
//registerPage.enterState()
//registerPage.enterAddress()
//registerPage.enterOrganizationSize()
//registerPage.enterCountry()
//registerPage.enterCategory()
//registerPage.enterState()
//registerPage.enterDescription()
//registerPage.clickRegister()


//cy.contains('Register').click()
//cy.get('#chakra-modal--body-\:rf\:').click()
//cy.get('.css-bq719 > .chakra-text').select(0).invoke("val").should("eq", "Register you organization")
// cy.get('.chakra-modal__close-btn > .chakra-icon > path').select('have.class', 'disabled')
// cy.get('.css-bq719 > .chakra-text').eq(0).select('1');
// cy.get('select').eq(0).select('1');

// .should('be visible')
// .contains('Register')
// .click()*/