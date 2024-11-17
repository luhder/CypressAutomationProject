class AdminPage {
    navigateToAdmin() {
      cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
    }
  
    verifyAdminPage() {
      cy.get('.oxd-topbar-header-breadcrumb > h6').should('contain.text', 'Admin');
    }
  }
  
  export default AdminPage;
  