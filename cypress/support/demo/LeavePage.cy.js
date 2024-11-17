class LeavePage {
    navigateToLeave() {
      cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click();
    }
  
    verifyLeavePage() {
      cy.get('.oxd-topbar-header-breadcrumb > h6').should('contain.text', 'Leave');
    }
  }
  
  export default LeavePage;