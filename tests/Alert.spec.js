const {test , expect} = require('@playwright/test')

test('Handle alert', async ({page}) => {

    //Open the browser
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //write dialog window handle
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })

    await page.locator('#alertBtn');
    console.log("Alert button clicked");

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //Close the browser
    await page.close();

}) 

test('Handle confirm alert', async ({page}) => {

    //Open the browser
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //write dialog window handle
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept();
    })

    await page.locator('#confirmBtn').click();
    console.log("Confirm button clicked");
    await expect(page.locator('#demo')).toHaveText("You pressed OK!");
    console.log("Text verified");

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //Close the browser
    await page.close();

})

test('Handle prompt alert', async ({page}) => {

    //Open the browser
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //write dialog window handle
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain("Please enter your name");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept("Chetan Ade");
    })

    await page.locator('#promptBtn').click();
    console.log("Prompt button clicked");
    await expect(page.locator('#demo')).toHaveText("Hello Chetan Ade! How are you today?");
    console.log("Text verified");

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //Close the browser
    await page.close    

})