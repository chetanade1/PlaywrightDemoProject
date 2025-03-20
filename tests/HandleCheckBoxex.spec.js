// Handling checkboxes
/**
 * Chetan Ade
 */

import {test , expect} from '@playwright/test';

test('Handle CheckBoxes', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //Single checkbox
    //await page.locator("//input[@id='sunday' and @type='checkbox']").check();
    //console.log("Checkbox clicked");
    await page.check("//input[@id='sunday' and @type='checkbox']");
    console.log("Checkbox clicked");

    await expect(page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked();
    console.log("Checkbox is checked");

    await expect(page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();
    console.log("Checkbox is checked");

    //Negative assertions
    await expect(page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
    console.log("Checkbox is checked");

    //multiple checkboxes

    const checkboxLocators = ["//input[@id='sunday' and @type='checkbox']",
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='tuesday' and @type='checkbox']",
    "//input[@id='wednesday' and @type='checkbox']",
    ];

    for (const locator of checkboxLocators) 
    {
        await page.check(locator);
        console.log("Checkbox clicked");

    }

    await page.waitForTimeout(5000);

    //Unchecked
    for (const locator of checkboxLocators) 
        {   
            if(await page.locator(locator).isChecked())
            {
            await page.locator(locator).uncheck();
            console.log("Checkbox Unchecked");
            }
        }

    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})