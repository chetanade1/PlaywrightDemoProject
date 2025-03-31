import {test , expect} from '@playwright/test'

test("Handle auto suggest dropdown", async ({page}) => {

    await page.goto("https://www.redbus.in/");

    //locate the element
    await page.locator('#src').fill("pune");

    await page.waitForSelector("(//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[@class='placeHolderMainText'])[1]")

    const fromCityOptions = await page.$$("(//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[@class='placeHolderMainText'])");

    for(let option of fromCityOptions)
    {
        const value = await option.textContent();
        console.log(value);

        if(value.includes('Wakad'))
        {
            await option.click();
            break;
        }


    }


    //wait for some time
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();


})