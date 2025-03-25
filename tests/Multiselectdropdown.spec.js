 import {test , expect} from '@playwright/test'

 test('Handle multi select dropdown', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //select multiple option from multi select dropdown

    await page.selectOption("#colors",['Blue', 'Red', 'Yellow'])

    //Assertions
    //1. check no of options
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(7);

    //2. check the number of options in dropdown using JS array
    const options1 = await page.$$('#colors option');
    console.log("number of options :", options1.length);
    await expect(options1.length).toBe(7);

    //3. Check the presence of value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Red')).toBeTruthy();

    //4. Check the Negative scenario
    const content1 = await page.locator('#colors').textContent();
    await expect(content1.includes('Gray')).toBeFalsy();




    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

 })