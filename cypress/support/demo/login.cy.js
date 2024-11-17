class LoginPage {
    enterUsername(username) {
      cy.get('input[name="username"]').type(username);
    }
  
    enterPassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    clickLoginButton() {
      cy.get('button[type="submit"]').click();
    }
  }
  export default LoginPage;