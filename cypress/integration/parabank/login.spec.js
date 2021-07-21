describe("login", function(){

    var username = "alfa001"
    var password = "pass123!"

    before(function(){
        //registration
        cy.visit("")
        //open registration  
        cy.get('#loginPanel > p:nth-child(3) > a').click()

        cy.url().should('include','/register')

        // set first name 
        cy.get('.input[name="customer\.firstName"]').type("tester")
        // set last name 
        cy.get('.input[name="customer\.lastName"]').type("lastName")
        // set address 
        cy.get('.input[name="customer\.address\.street"]').type("street 1")
        // set city 
        cy.get('.input[name="customer\.address\.city"]').type("new york")
        // set state 
        cy.get('.input[name="customer\.address\.state"]').type("NY")
        // set zip code 
        cy.get('.input[name="customer\.address\.zipCode"]').type("4561")
        // set ssn 
        cy.get('.input[name="customer\.ssn"]').type("123456789")
        // set user name 
        cy.get('.input[name="customer\.username"]').type(username)
        // set password 
        cy.get('.input[name="customer\.password"]').type(password) 
        // set password confirmation 
        cy.get('#repeatedPassword').type(password)

        //submit registration
        cy.get('.button[value="Register"]').click()
        //login out 
        cy.get('#leftPanel > ul > li > a').contains("Log Out").click()

    })
    it("sign in", function(){
        //open parabank login page
        cy.visit("")
        //set user name
        cy.get('.input[name="username"]').type(username)
        //set password
        cy.get('.input[name="password"]').type(password)
        //click login button
        cy.get('.button[value="Log In"]').click()
        //validations
        //verify url update
        cy.url().should('include','/overview')
        //verify the logout option is present after login
        cy.get('#leftPanel > ul > li > a').should("be.visible")
        
        //login out 
        cy.get('#leftPanel > ul > li > a').contains("Log Out").click()

    })
})
