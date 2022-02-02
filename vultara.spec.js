/// <reference types="cypress" />

import HomePage from "./PageObject/HomePage"

describe("Vultara Test Suite", function()
{
  it("Vultara Page Loaded Successfully", function () 
  {
    const homepage = new HomePage();
    homepage.navigate();
    cy.wait(3000)
    homepage.clickOnAcceptCookies();
    cy.wait(2000)
    cy.xpath('//*[@id="dynamic-tagline-104095"]').should('have.text', 'Cybersecurity by Design')
  })

  it("Automotive Page Loaded", function () 
  {
    const homepage = new HomePage();
    homepage.navigate();
    cy.wait(1000)
    homepage.clickOnAcceptCookies();
    homepage.ClickOnNavBar();
    cy.wait(1000)
    homepage.ClickOnPlatform();
    cy.wait(1000)
    homepage.ClickOnAutomotive();
  })

  it("About Us Page Loaded", function () 
  {
    const homepage = new HomePage();
    homepage.navigate();
    cy.wait(1000)
    homepage.clickOnAcceptCookies();
    homepage.ClickOnNavBar();
    cy.wait(1000)
    homepage.ClickOnAboutUs();
  })

  it("Career Page Loaded", function () 
  {
    const homepage = new HomePage();
    homepage.navigate();
    cy.wait(1000)
    homepage.clickOnAcceptCookies();
    homepage.ClickOnNavBar();
    cy.wait(1000)
    homepage.ClickOnCareer();
  })

  it("Contact Page Loaded", function () 
  {
    const homepage = new HomePage();
    homepage.navigate();
    cy.wait(1000)
    homepage.clickOnAcceptCookies();
    homepage.ClickOnNavBar();
    cy.wait(1000)
    homepage.ClickOnContact();
  })

  it("Help Page Loaded", function () 
  {
    const homepage = new HomePage();
    homepage.navigate();
    cy.wait(1000)
    homepage.clickOnAcceptCookies();
    cy.wait(1000)
    homepage.ClickOnHelp();
  })

  it("Learn More Page Loaded", function () 
  {
    const homepage = new HomePage();
    homepage.navigate();
    cy.wait(1000)
    homepage.clickOnAcceptCookies();
    cy.contains('LEARN MORE ABOUT US').scrollIntoView();
    cy.contains('LEARN MORE ABOUT US').click();
  })

  it("Linkdin Page Loaded", function () 
  {
    const homepage = new HomePage();
    homepage.navigate();
    cy.wait(1000)
    homepage.clickOnAcceptCookies();
    cy.xpath('//*[@id="8f9da362-fa8a-4df3-a2a0-1152cac2862b"]/div/section/div/div/div[1]/div[2]/a[1]').scrollIntoView();
    cy.xpath('//*[@id="8f9da362-fa8a-4df3-a2a0-1152cac2862b"]/div/section/div/div/div[1]/div[2]/a[1]').click();
  })

  it("Twitter Page Loaded", function () 
  {
    const homepage = new HomePage();
    homepage.navigate();
    cy.wait(1000)
    homepage.clickOnAcceptCookies();
    cy.xpath('//*[@id="8f9da362-fa8a-4df3-a2a0-1152cac2862b"]/div/section/div/div/div[1]/div[2]/a[2]').scrollIntoView();
    cy.xpath('//*[@id="8f9da362-fa8a-4df3-a2a0-1152cac2862b"]/div/section/div/div/div[1]/div[2]/a[2]').click();
  })
})