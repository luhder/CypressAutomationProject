class TimePage {
    navigateToTime() {
      cy.get('a[href="/web/index.php/time/viewTimeModule"]').click();
    }
  
    verifyTimePage() {
      cy.get('.oxd-topbar-header-breadcrumb > h6').should('contain.text', 'Time');
    }
  }
  
  export default TimePage;