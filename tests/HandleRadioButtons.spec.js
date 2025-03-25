//Handle Radio Buttons

/**
 Chetan Ade
 */


import {test, expect} from '@playwright/test';

test('Handle Radio Buttons', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //Radio button visible or not
    const maleRadioButton = await page.locator('#male');
    await expect(maleRadioButton).toBeVisible();
    console.log("Radio button is visible");

    //Radio button Clicked
    const maleRadioButtonChecked = await page.locator('#male');
    await expect(maleRadioButtonChecked).toBeChecked;
    console.log("Radio button is checked");

    //radio button
    //await page.locator("//input[@value='male']").check();
    await page.check("//input[@value='male']");
    console.log("Radio button clicked");

    //Radio button checked or not
    await expect(page.locator('#male').isChecked()).toBeTruthy();
    console.log("Radio button is checked");

    //Female radio button visible or not

    const femaleRadioButton = await page.locator("//input[@value='female']");
    await expect(femaleRadioButton).toBeVisible();
    console.log("Radio button is visible");


    await expect(page.locator('#female').isChecked()).toBeTruthy();
    console.log("Radio button is checked");

    await page.check('#female');
    console.log("Radio button clicked");


    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})