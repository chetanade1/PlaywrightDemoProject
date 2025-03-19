//verify the soft assertions
//Soft assertions are used to validate the expected results of the test case. It is used to validate the actual result with the expected result. If the actual result is matched with the expected result then the test case is passed otherwise it is failed. There are many assertions available in Playwright. Some of them are as follows:

import { test, expect } from '@playwright/test';

test('softAssrtionsTest', async ({ page }) => {

    //open app url
    await page.goto('https://demoblaze.com/index.html');
    console.log("URL is correct");

    //Hard Assertion
    //to have title
    await expect(page).toHaveTitle('STORE');
    console.log("Title is correct");

    //to have url
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    console.log("URL is correct");

    //to logo visible
    const logo = await page.locator('#nava');
    await expect(logo).toBeVisible;
    console.log("Logo is visible");

    //soft assertion
    await expect.soft(page).toHaveTitle('STORE123');
    console.log("Title is correct");


    //close the browser
    await page.close();

})
