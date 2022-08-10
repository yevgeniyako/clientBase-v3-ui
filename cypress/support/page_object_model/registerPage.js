export default class RegisterPage{
    //selectors
    headerCreateAnAccount =()=> cy.get('form#user_login').children('h1')
    firstNameField =()=> cy.get('input#user_login_firstName')
    lastNameField =()=> cy.get('input#user_login_lastName')
    emailField =()=> cy.get('input#user_login_email')
    passwordField =()=> cy.get('input#user_login_password"')
    submitBtn =()=> cy.get('button[type="submit"]')
    headerConfirmEmail =()=> cy.get('span[class="ms-2 fw-bold"]')
    headerError =()=> cy.get('div[class=ant-notification-notice-message]')

    //methods
    randomEmail=()=> {
        return (`newuser${Math.floor(Math.random() * 1000)}@gmail.com`); 
    }
    randomPassword=()=> {
        return (`newuser${Math.floor(Math.random() * 1000)}`); 
  }
//     checkInputField=(selector)=>
}
