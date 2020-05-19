///<reference types="Cypress"/>
describe('MouseInteractionSuite',function()
    {

it('MouseInteractiontestcase',function()
{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //cy.get('div.mouse-hover-content').invoke('show')
    //cy.contains('Top').click()
   // cy.contains('Reload').click()

    // mouseover through Another Method

    cy.get('div.mouse-hover-content a:nth-child(1)').click({force:true})
    //cy.contains('Top').click({force: true})
    cy.url().should('include','top')
    
    using(SqlConnection )


}
)
})
