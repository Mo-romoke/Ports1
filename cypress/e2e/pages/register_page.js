import { faker } from '@faker-js/faker';
const email = faker.internet.email()

export class RegisterPage{

    clickGetStarted(){
    cy.contains('Get Started').click({force: true})
    }

    clickRegister(){
        cy.contains('Register').click()
    }

    enterFirstname(){
        cy.get('#firstname').type('cisca')
    }

    enterLastname(){
        cy.get('#lastname').type('Red')
    }

    enterUsername(){
        cy.get('#username').type('redhood')

    }
  
        


        enterBusinessName(){
            cy.get('#bizName').type('Bon specialist clinic')
        }

        enterEmail(){
            cy.get('#email').type(email)
        }

        enterAddress(){
            cy.get('#address').type('Lagos, Nigeria')
        }

        enterOrganizationSize(){
           
            cy.contains('Organization Size').should ('be.visible')
            cy.get('#organizationSize').select(2).invoke("val").should("eq", "10-50")
        }
        enterCountry(){
            cy.get('#country').select(6).invoke("val").should("eq", "Andorra")
        }


        enterCategory(){
            cy.get('#category').select(["hospitals"])
        }

        enterState(){
            cy.get('#stateProvince').select(["Encamp"])
        }

        enterPhoneNumber(){
        cy.get('#phoneNumber').type('7033982948')
        }

        enterState(){
            cy.get('#stateProvince').select(["Encamp"])
        }

        enterPassword(){
        cy.get('#password').type('Admin@123')
        }

        enterConfirmPassword(){
            cy.get('#password').type('Admin@123')
            }

        enterDescription(){
        cy.get('#description').type('At Bon specialist Clinic, we care a lot about you.')
        }

        clickLogin(){
        cy.get('.chakra-stack > .chakra-button').click()
    }
        }

    

