import {LoginPage} from "./pages/login_page"
const loginPage = new LoginPage()


describe('All login Tests', function(){

    it ('Login with valid credentials', function(){

        cy.visit('https://www.coursera.org/')
        cy.get('.c-ph-log-in > a').click('topRight')
    
        loginPage.enterEmail('dolapomadea@gmail.com')
        loginPage.enterPassword('Modele')
        loginPage.clickLogin()
      
    
    
        //cy.get('#email').type('dolapomadea@gmail.com')
        //cy.get('#password').type('Modele28')
       // cy.get('._6dgzsvq').click()
        
    })
    
    it ('Login with invalid password', function(){
    
        cy.visit('https://www.coursera.org/')
        cy.get('.c-ph-log-in > a').click('topRight')
    
        loginPage.enterEmail('dolapomadea@gmail.com')
        loginPage.enterPassword('Modele28')
        loginPage.clickLogin()
       
    
        //cy.get('#email').type('dolapomadea@gmail.com')
        //cy.get('#password').type('Modele28')
       // cy.get('._6dgzsvq').click()
        
    })
})
