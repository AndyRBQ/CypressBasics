
import { BasePage } from './BasePage';
import { registerObj } from './Register';
import { loginRegMenu } from './LoginRegMenu';

export class MainPage extends BasePage {
  constructor() {
    super();
  }

  registration(username, password) {
    registerObj.registration(username, password);
  }

  login(username, password) {
    loginRegMenu.login(username, password)    
  }
};

export const mainPage = new MainPage();