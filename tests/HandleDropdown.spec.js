/**
 * chetan Ade
 */

const {test , expect} = require('@playwright/test');

    const TargetURL = "https://testautomationpractice.blogspot.com/";

test('Handle Dropdown', async ({page}) => {

    await page.goto(TargetURL);
    console.log("Browser opened");

    //multiple ways to select option from the dropdown
    //await page.locator('#country').selectOption({label: 'India'});
    await page.locator('#country').selectOption("India");
    //await page.locator('#country').selectOption({value: 'uk'});
    //await page.locator('#country').selectOption({index: 2});
    //await page.selectOption('#country', 'India');

    //Assertions
    //1. check no of option in dropdown
    const options = await page.locator("//select[@id = 'country']/option");
    await expect.soft(options).toHaveCount(10);
    console.log("Ten options are there")

    //2. Check the noumber of options in dropdown 
    const week = await page.$$("//select[@id = 'country']/option");
    console.log("number of Options :", week.length);
    await expect(week.length).toBe(10);
    
    //3. check presence of value in the dropdown
    const content = await page.locator("//select[@id = 'country']").textContent();
    await expect.soft(content.includes('India')).toBeTruthy();

    //4. Check presence of value in the dropdown - using looping
    /*
    const options1 = await page.$$("//select[@id = 'country']/option");
    let status = false;

    for (const option of options1)
    {
        console.log(await option.textContent());
        let value = await option.textContent();
        if(value = 'India')
        {
            status = true;
            break;
        }
        await expect(status).toBeTruthy();
    }
        */

    //select the options fro the dropdown using loop

    const options2 = await page.$$("//select[@id = 'country']/option");
    let status = true;

    for (const opt of options2)
    {
        console.log(await opt.textContent());

        let value1 = await opt.textContent();

        if(value1.includes('India'))
        {
            await page.selectOption("#country", value1)
            status = true;
            break;
        }
        await expect(status).toBeTruthy();
    }



    await page.waitForTimeout(5000);
})























