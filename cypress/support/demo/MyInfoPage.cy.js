class MyInfoPage {
    navigateToMyInfo() {
      cy.get('a[href="/web/index.php/pim/viewMyDetails"]').click();
    }
  
    verifyMyInfoPage() {
      cy.get('.oxd-topbar-header-breadcrumb > h6').should('contain.text', 'My Info');
    }
  }
  
  export default MyInfoPage;
  