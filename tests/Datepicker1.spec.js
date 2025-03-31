const {test , expect} =require('@playwright/test')

test('Handle Date Picker', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //select the start date
    await page.waitForSelector("//input[@id='start-date']");
    await page.locator("//input[@id='start-date']").click();
    await page.locator("//input[@id='start-date']").fill("2025-12-12");
    console.log("Date entered");

    //select the end date
    await page.waitForSelector("//input[@id='end-date']");
    await page.locator("//input[@id='end-date']").click();
    await page.locator("//input[@id='end-date']").fill("2025-12-20");
    console.log("Date entered");

    //Click on the submit button
    await page.locator(".submit-btn").click();
    console.log("Submit button clicked");


    //verify the result
    const result = await page.locator("#result");
    const resultText = await result.textContent();
    console.log("Result: ", resultText);
    await expect(result).toHaveText("You selected a range of 8 days.");
    console.log("Result verified");
    


    //screenshot
    await page.screenshot({path: 'Screenshot\\screenshot6.png'});
    console.log("Screenshot taken");

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
    console.log("Browser closed");



    
    
})