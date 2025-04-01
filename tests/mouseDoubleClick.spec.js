const {test , expect} =require('@playwright/test')

test('Handle double click', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //locator for double click
    const btnCopy = await page.locator("//button[text()='Copy Text']");
    console.log("Button Copy Text found");

    //double click on button
    btnCopy.dblclick();
    console.log("Double click action performed");

    //msg verify
    const msg = await page.locator("#field2");
    console.log("Message found");

    //verify the message
    await expect(msg).toHaveText("");
    console.log("Message verified");

    //verify the message
    const msg1 = await page.locator("//p[contains(text(),'Double click on button')]");
    const result = await msg1.textContent();
    console.log("message is:", result);
    console.log("Message verified");


    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
    console.log("Browser closed");
})