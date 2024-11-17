class PIMPage {
    navigateToPIM() {
      cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    }
  
    verifyPIMPage() {
      cy.get('.oxd-topbar-header-breadcrumb > h6').should('contain.text', 'PIM');
    }
  }
  
  export default PIMPage;
  