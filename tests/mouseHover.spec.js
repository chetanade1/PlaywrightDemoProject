const {test , expect} =require('@playwright/test')

test("Handle mouse hover", async ({page}) => {

    //open the browser
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //mouse hover
    const button = await page.locator("//button[text()='Point Me']");
    const Laptops = await page.locator("//a[text()='Laptops']");

    //mouse hover on desktops
    await button.hover();;
    console.log("Mouse hovered on Point me");

    //mouse hover on macbook
    await Laptops.hover();
    console.log("Mouse hovered on Laptops");

    //click on laptops
    await Laptops.click();
    console.log("Clicked on Laptops");



    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
    console.log("Browser closed");


})