import { mainPage } from '../support/page-objects/MainpageClass'

describe("login", function () {
    var username = "beta003"
    var password = "pass123!"
    context('Querying', () => {
        before(function () {
            //open default URL
            cy.visit("")
            //registration
            mainPage.registration(username, password);
            //login out 
            cy.get('#leftPanel > ul > li > a').contains("Log Out").click()
        });

        it("Verify if the user can login", function () {
            //open parabank login page
            cy.visit("")
            
            //login out 
            cy.get('#leftPanel > ul > li > a').contains("Log Out").click()

        });

    });

})
