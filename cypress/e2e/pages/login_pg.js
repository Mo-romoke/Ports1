export class LoginPage{ //you can either choose to import or export this file

email_textbox = '#email'                       //these are the class variables
password_textbox = '#password'                   //class variable
login_button = '._6dgzsvq'                      //class variable


    enterEmail(email){
cy.get(this.email_textbox).type(email)
    }
    
    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

clickLogin(){
    cy.get(this.login_button).click()
}
}