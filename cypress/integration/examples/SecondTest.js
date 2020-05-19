

/// <reference types="Cypress"/>
describe('My Second Test Suite',function(){

    it('SecondExercise',function()
    {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //Checkboxes
      cy.get("#checkBoxOption1").check().should('be.checked').should('have.value','option1')

      //cy.get("#checkBoxOption1").check().should('be.checked').should('have.string','option1')

      cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
      cy.get('input[type="checkbox"]').check(['option2','option3'])

      //static dropdown

      cy.get("#dropdown-class-example").select('Option1').should('have.value','option1')

      //dynamic dropdown

      cy.get('#autocomplete').type('ind')

      cy.wait(3000)

      cy.get('.ui-menu-item div').each(($e1,index,$list)=>
      {

        if($e1.text()==='India')
        {
          $e1.click()
        }
      })

      cy.get('#autocomplete').should('have.value','India')

      //Visibleandinvisible

      cy.get("#displayed-text").should('be.visible')
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      //radio button

      cy.get('.radioButton').check(['radio1','radio2']).should('be.checked')


      
      }
    )


})