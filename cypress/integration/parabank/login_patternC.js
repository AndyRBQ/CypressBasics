import { register } from '../../support/pageObjects_pC/Register';
import { loginRegMenu } from '../../support/pageObjects_pC/loginRegMenu';

describe('Test to validate login with a new account', function () {
    context('Querying', () => {
        before(function () {
            //registration
            cy.visit("")
            register.registration(username, password)
            //login out 
            cy.get('#leftPanel > ul > li > a').contains("Log Out").click()

        });

        it("Verify if is possible to sign in with a new account", function () {
            //open parabank login page
            cy.visit("")
            loginRegMenu.login(username, password);
            //login out 
            cy.get('#leftPanel > ul > li > a').contains("Log Out").click()

        });
    });
});
