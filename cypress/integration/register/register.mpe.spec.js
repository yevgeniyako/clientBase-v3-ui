///<reference types="cypress" />;
import RegisterPage from "../../support/page_object_model/registerPage";
import {newUser} from "../../fixtures/data.json"

const registerPage = new RegisterPage();

describe('Main Page Elements and their main functionality for Register a new user', ()=>{

it('Precondition, visit register page', ()=>{
        cy.visit('/user/register')
});

it('Header Create an Account', ()=>{
    registerPage.headerCreateAnAccount().should('be.visible').should('have.text', "Create an account")
});
it('Input First Name contains "Firs tName"', ()=>{
    registerPage.firstNameField().should('be.visible').should('have.attr', 'placeholder', 'First Name')
});
it('Input Last Name contains "Last Name"', ()=>{
    registerPage.lastNameField().should('be.visible').should('have.attr', 'placeholder', 'Last Name')
});
})
