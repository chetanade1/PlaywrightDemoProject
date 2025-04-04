const {test , expect} =require('@playwright/test')

let page;

test.beforeAll(async ({browser}) => {

    page = await browser.newPage();
    
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
});

test.afterAll(async () => {

    //Logout
    await page.locator("#logout2").click();
    console.log("Logout button clicked");

})


test("Home page test", async () => {


    //Find the all the elements
    const links = await page.$$('a');   
    
    for (const link of links) 
    {
       const linkage = await link.textContent();
        console.log(linkage);
        //console.log(await link.textContent());
    }

})

test("Product page test", async () => {

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

    



})
