describe("login", function(){

    //set user name 
    var username = "alfa001"
    //set password
    var password = "pass123!"

    before(function(){
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
    })
    it("Verify if is possible to create a new account", function(){
        //go to new oder link
        cy.get('#leftPanel > ul > li > a').contains("Open New Account").click()
        //select type of accout
        cy.get('#type').select("SAVINGS")
        //confirm account creation
        cy.get('.button[value="Open New Account"]').click({ force: true })
        //verify title confirmation
        cy.get('.title').should('have.text','Account Opened!')
    })
})
