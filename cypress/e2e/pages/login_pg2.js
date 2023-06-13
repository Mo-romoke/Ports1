export class loginPage{

    
userLoginId_textbox = '#id_userLoginId'
password_textbox= '#id_password'
login_button = '.btn'


    enterUserLoginId(userloginId){
        
        cy.get(this.userLoginId_textbox).type(userloginId)
    }r
    
    enterPassword(password){
        cy.get(this.password_textbox).click()
    cy.get(this.password_textbox).type(password)
    }
    clickLogin(){
        cy.get(this.login_button).click()
    }
}