const {test , expect} =require('@playwright/test')

test('Handle alert', async ({page}) => {

    //open the browser
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    console.log("Browser opened");

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();

    })

    await page.locator('.btn btn-danger');
    console.log("Alert button clicked");

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})

test("Handle confirm alert", async ({page}) => {

    //open the browser
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    console.log("Browser opened");

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept();
    })

    await page.locator('.btn btn-primary');
    console.log("Confirm button clicked");
    await expect(page.locator('#demo')).toHaveText(" ");
    console.log("Text verified");

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();


})

test("Handle prompt alert", async ({page}) => {

    //open the browser
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    console.log("Browser opened");

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain("please enter your name");
        expect(dialog.defaultValue()).toContain("Automation Testing user");
        await dialog.accept("Chetan Ade");
    })

    await page.locator('.btn btn-info');
    console.log("Prompt button clicked");
    await expect(page.locator('#demo1')).toContainText(" ");
    console.log("Text verified");


})