/*
Tracing -
what is tracing?
Tracing is a feature in Playwright that allows you to capture a detailed record of the actions performed during a test run. This includes information about the page's state, network requests, and other events that occur during the test. Tracing can be useful for debugging and analyzing test failures, as it provides a comprehensive view of what happened during the test execution.

*/

const {test , expect} =require('@playwright/test')

test("Home page test", async ({page}) => {

    await page.goto("https://www.demoblaze.com/index.html");
    console.log("Browser opened");
    
    //Click on login button
    await page.locator("#login2").click();
    console.log("Login button clicked");

    //Enter the username
    const username = await page.locator("#loginusername");
    await username.fill("pavanol");

    //Enter the password
    const password = await page.locator("#loginpassword");
    await password.fill("test@123");

    //Click on login button
    const loginBtn = await page.locator("//button[text()='Log in']");
    await loginBtn.click();
    console.log("Login button clicked");

    //Find the all the elements
    const links = await page.$$('a');   
    
    for (const link of links) 
    {
       const linkage = await link.textContent();
        console.log(linkage);
        //console.log(await link.textContent());
    }

    //Logout
    await page.locator("#logout2").click();
    console.log("Logout button clicked");


})
