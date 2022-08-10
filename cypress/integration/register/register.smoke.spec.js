///<reference types="cypress" />;
import RegisterPage from "../../support/page_object_model/registerPage";
import {newUser} from "../../fixtures/data.json"

const registerPage = new RegisterPage();

describe('Smoke tests for Register a new user', ()=>{
describe('Smoke tests for Register a new user with valid credentials - Positive Test', ()=>{
it('Precondition, visit register page', ()=>{
        cy.visit('/user/register')
});

it('Header Create an Account', ()=>{
        registerPage.headerCreateAnAccount().should('be.visible').should('have.text', "Create an account")
});
it('FirstName input', ()=>{
        registerPage.firstNameField().type(newUser.firstName)
});
it('LastName input', ()=>{
    registerPage.lastNameField().type(newUser.lastName)
});
it('Email input', ()=>{
    registerPage.emailField().type(registerPage.randomEmail())
});
it('Password input', ()=>{
    registerPage.passwordField().type(registerPage.randomPassword())
});
it('Click on register button', ()=>{
    registerPage.submitBtn().click()
});
it('Header Confirm email', ()=>{
    registerPage.headerConfirmEmail().should('be.visible').should('have.text', "Confirm Email")
});
})
describe('Smoke tests for Register a new user with existing credentials - Negative Test', ()=>{
    it('Precondition, visit register page', ()=>{
            cy.visit('/user/register')
    });
    
    it('Header Create an Account', ()=>{
            registerPage.headerCreateAnAccount().should('be.visible').should('have.text', "Create an account")
    });
    it('FirstName input', ()=>{
            registerPage.firstNameField().type(newUser.firstName)
    });
    it('LastName input', ()=>{
        registerPage.lastNameField().type(newUser.lastName)
    });
    it('Email input', ()=>{
        registerPage.emailField().type(newUser.email)
    });
    it('Password input', ()=>{
        registerPage.passwordField().type(registerPage.randomPassword())
    });
    it('Click on register button', ()=>{
        registerPage.submitBtn().click()
    });
    it('Header Confirm email', ()=>{
        registerPage.headerError().should('have.text', "User with this e-mail exists")
    });
})
})