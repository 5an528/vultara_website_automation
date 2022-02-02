class HomePage
{
    navigate()
    {
        cy.visit('https://vultara.com/')
    }

    ClickOnNavBar()
    {
        cy.xpath('//*[@id="1"]').click()
    }

    clickOnAcceptCookies()
    {
        cy.xpath('//*[@id="46a9f067-b4df-439e-81e8-91fc879c88e2-accept"]').click()
    }

    AssertHomepageLoaded()
    {
        cy.xpath('//*[@id="dynamic-tagline-104095"]')
    }

    ClickOnPlatform()
    {
        cy.xpath('//*[@id="5"]').click()
    }

    ClickOnAutomotive()
    {
        cy.xpath('//*[@id="bs-4"]/span/div/ul/li/a').click()
    }

    ClickOnAboutUs() // About Us 
    {
        cy.xpath('//*[@id="n-104059-navListId-mobile"]/li[3]/a').click()
    }

    ClickOnCareer() // Career
    {
        cy.xpath('//*[@id="n-104059-navListId-mobile"]/li[4]/a').click()
    }

    ClickOnContact() // Contact
    {
        cy.xpath('//*[@id="n-104059-navListId-mobile"]/li[5]/a').click()
    }

    ClickOnHelp() // How Can We Help?
    {
        cy.xpath('//*[@id="n-104059"]/div/section/div[2]/div/div[3]/div/div/div/div/div/div[3]/div/a').click()
    }

}

export default HomePage
  