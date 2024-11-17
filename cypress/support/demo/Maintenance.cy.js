class MaintenancePage {
    navigateToMaintenance() {
      cy.get('a[href="/web/index.php/maintenance/viewMaintenanceModule"]').click();
    }
  
    verifyMaintenancePage() {
      cy.get('.oxd-topbar-header-breadcrumb > h6').should('contain.text', 'Maintenance');
    }
  }
  
  export default MaintenancePage;