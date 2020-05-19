///<reference types="Cypress"/>
describe('ThirdSuite',function()
    {

it('Thirdtestcase',function()
{

    cy.visit("http://qaclickacademy.com/practice.php")
    //cy.get("#alertbtn").click()
    //alert
    cy.get("#confirmbtn").click()

    cy.on("window:alert",(str)=>
    {
     //Mocha
     expect(str).to.equal('Hello , Are you sure you want to confirm?')
    }
    )

    cy.get("#opentab").invoke('removeAttr','target').click()
    cy.url().should('include','rahulshetty')

    
     cy.go('back')

}
)
})
