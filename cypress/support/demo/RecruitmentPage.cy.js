class RecruitmentPage {
    navigateToRecruitment() {
      cy.get('a[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
    }
  
    verifyRecruitmentPage() {
      cy.get('.oxd-topbar-header-breadcrumb > h6').should('contain.text', 'Recruitment');
    }
  }
  
  export default RecruitmentPage;