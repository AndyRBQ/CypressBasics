
const loginPanel = '#loginPanel';
const loginForm = '#loginPanel > form';

export const loginRegMenu = {
    login(username, password) {
        //set user name
        cy.get(this.loginForm).find('.input[name="username"]').type(username)
        //set password
        cy.get(this.loginForm).find('.input[name="password"]').type(password)
        //click login button
        cy.get(this.loginForm).find('.button[value="Log In"]').click()
        //validations
        //verify url update
        cy.get('').should('include', '/overview');
        //verify the logout option is present after login
        cy.get('#leftPanel > ul > li > a').should('be.visible');
    }
}
