/// <reference types="Cypress"/>
describe('My Test Suite', function() {
    it('Verify Title', function() {
      
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.title().should('include','GreenKart - veg and fruits kart')
       cy.get("input[type='search']").type('ca')
       cy.wait(3000)
     //cy.get('.product').should('have.length',5)

     //handling alias
     cy.get('.products').as('productLocator')
     
     cy.get('@productLocator').find('.product').should('have.length',4)

     cy.get(':nth-child(3) > .stepper-input >.increment').click()
     cy.get(':nth-child(3) > .product-action > button').click()


     cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
      {
    console.log('sf')
      })

      cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{

       const txt = $e1.find('h4.product-name').text()
       if(txt.includes('cashews'))
       {
          $e1.find('button').click()
       }

      })

      //Assertions text correctly displayed
      cy.get('div .brand').should('have.value','GREENKART')

    })
  })