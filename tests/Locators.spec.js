import {test, expect} from '@playwright/test';

test('Locators' ,async ({page}) => {

    await page.goto("https://www.demoblaze.com/index.html");

    //Click on log in link
    //await page.locator('id="login2"').click();
    await page.click('id=login2');

    //provide username and password
    //await page.locator('id="loginusername"').fill("pavanol");
    await page.fill('#loginusername', "pavanol");
    //await page.type('id="loginpassword"', "Enter");

    //provide Password
    //await page.locator('id="loginpassword"').fill("pavanol");
      await page.fill('#loginpassword', "test@123");

    //click on login button
      await page.click('xpath=//button[contains(text(),"Log in")]');

    //Take a screenshot
      await page.screenshot({path: 'D:\\PlaywrightAutomation\\Screenshot\\screenshot1.png'});

    //verify logout link presence
      await expect(page.locator('id=logout2')).toBeVisible();

    //click on logout button
      const logoutlink = await page.click('id=logout2');

    //close the browser
      await page.close();

    

})
