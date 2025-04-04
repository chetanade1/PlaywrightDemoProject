/*
Hooks - 
1. Before All - 
- Runs once before all tests in the file.
- Useful for setting up global state or resources.
2. After All -
- Runs once after all tests in the file.
- Useful for cleaning up global state or resources.
3. Before Each -
- Runs before each test in the file.
- Useful for setting up state or resources needed for each test.
4. After Each -
- Runs after each test in the file.
- Useful for cleaning up state or resources after each test.

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

test("Product page test", async ({page}) => {

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

    //Click on the product
    await page.locator("//h4[@class='card-title']/a[text()='Samsung galaxy s6']").click();
    console.log("Product clicked");

    //Add to cart
    await page.locator("//a[text()='Add to cart']").click();
    console.log("Add to cart button clicked");

    //Accept the alert
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain("Product added");
        console.log(dialog.message());
        await dialog.accept();
    })

    //Logout
    await page.locator("#logout2").click();
    console.log("Logout button clicked");



})
