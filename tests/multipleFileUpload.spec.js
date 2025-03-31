const {test , expect} =require('@playwright/test')

test('Handle multiple file upload', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //click on file upload
    await page.waitForSelector("#multipleFilesInput");
    await page.locator("#multipleFilesInput").click();
    await page.locator("#multipleFilesInput").setInputFiles(["uploadFiles\\test.pdf","uploadFiles\\test1.pdf"]);

    //screenshot
    await page.screenshot({path: 'D:\\PlaywrightAutomation\\Screenshot\\screenshot5.png'});
    console.log("Screenshot taken");

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
    console.log("Browser closed");



})