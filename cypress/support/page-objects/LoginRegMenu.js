export class LoginRegMenu {
    constructor() {
        this.loginPanel = '#loginPanel';
        this.loginForm = '#loginPanel > form';
        this.urlBase = '';
    }

    login(username, password) {
        //set user name
        cy.get(this.loginForm).find('.input[name="username"]').type(username)
        //set password
        cy.get(this.loginForm).find('.input[name="password"]').type(password)
        //click login button
        cy.get(this.loginForm).find('.button[value="Log In"]').click()
        //validations
        //verify url update
        this.verifyUrl('/overview')
        //verify the logout option is present after login
        this.verifyElements()
    }

    verifyUrl(stringToFind) {
        cy.get(this.urlBase).should('include', stringToFind);
    }

    verifyElements() {
        cy.get('#leftPanel > ul > li > a').should('be.visible');
    }
};

export const loginRegMenu = new LoginRegMenu();