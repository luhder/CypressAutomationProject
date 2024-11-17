class DashboardPage {
    verifyDashboardHeader(headerText) {
      cy.get('.oxd-topbar-header-breadcrumb > h6').should('contain.text', headerText);
    }
  }
  export default DashboardPage;