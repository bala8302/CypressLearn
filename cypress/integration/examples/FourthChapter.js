///<reference types="Cypress"/>
describe('FourthSuite',function()
    {

it('Fourthtestcase',function()
{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("tr td:nth-child(2)").each(($e1,index,$list)=>
    {
        const txt = $e1.text()
        if(txt.includes("Python")){
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
            const pricee = price.text()
            expect(pricee).to.equal('25')

        })
    }
    })
    
}
)
})
