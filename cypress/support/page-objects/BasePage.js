export class BasePage  {
    constructor() {
      this.mainElement = 'body';
      this.urlBase = '';
    }
  
    verifyElements() {
      cy.get(this.mainElement).should('be.visible');
    }
     
    verifyUrl(stringToFind) {
      cy.get(this.urlBase).should('include',stringToFind);
    }
  };
  