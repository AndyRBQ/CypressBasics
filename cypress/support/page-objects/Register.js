export class Register  {
    constructor() {
        this.registrationForm = '#customerForm';
    }
  
    registration(username, password) {
        //#loginPanel > p:nth-child(3) > a
        cy.get('#loginPanel > p > a').contains("Register").click()
        this.validateRegistrationURL('/register')
        //Fill all registration data
        cy.get(this.registrationForm).find('.input[name="customer\.firstName"]').type("tester");
        cy.get(this.registrationForm).find('.input[name="customer\.lastName"]').type("lastName");
        cy.get(this.registrationForm).find('.input[name="customer\.address\.street"]').type("street 1");
        cy.get(this.registrationForm).find('.input[name="customer\.address\.city"]').type("new york");
        cy.get(this.registrationForm).find('.input[name="customer\.address\.state"]').type("NY");
        cy.get(this.registrationForm).find('.input[name="customer\.address\.zipCode"]').type("4561");
        cy.get(this.registrationForm).find('.input[name="customer\.ssn"]').type("123456789");
        cy.get(this.registrationForm).find('.input[name="customer\.username"]').type(username);
        cy.get(this.registrationForm).find('.input[name="customer\.password"]').type(password);
        cy.get(this.registrationForm).find('#repeatedPassword').type(password);
        cy.get(this.registrationForm).find('.button[value="Register"]').click();
        this.validateAccountRegister(username)
    }
    validateRegistrationURL(stringToFind){
        cy.url().should('include', stringToFind)
    }
    validateAccountRegister(username){
        cy.get('#rightPanel > h1').should('have.text', 'Welcome ' + username)
    }
     
  };
  
  export const registerObj = new Register();