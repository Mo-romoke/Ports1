
import {LoginPage} from "./pages/login_page2"

const loginPage = new LoginPage()


it ('NetflixLogin', function(){
    cy.visit('https://portsconnect.co/#/#home/')

    loginPage.enterUserLoginId('dolapomadea@gmail.com')
    loginPage.enterPassword('Excellency@1')
    loginPage.clickLogin()

    //cy.get('#id_userLoginId').click('topRight')
    //cy.get('#id_userLoginId').type('folaseye08@gmail.com')
    
    //cy.get('#id_password').click()
    //cy.get('#id_password').type('Excellency@1')
    //cy.get('.btn').click()

    
    

  //'Excellency@1'
   //'folaseye08@gmail.com'
})