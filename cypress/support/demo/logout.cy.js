class LogoutPage {
   Logoutoftheapp (){
        cy.get('.oxd-userdropdown-name').click()
        cy.get('.oxd-dropdown-menu').as('dropdown')
        cy.get('@dropdown').find('[role="menuitem"]').each(($ele)=>{
        if($ele.text()=='Logout'){
            cy.wait(2000)
            cy.wrap($ele).click()
        }
    })
    }
  }
  
  export default LogoutPage;