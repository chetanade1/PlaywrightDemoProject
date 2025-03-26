import {test , expect} from '@playwright/test'

test('handle auto suggestion', async ({page}) => {

    await page.goto("https://www.agoda.com/");

    await page.locator("//h6[text()='Flights']").click();
    
    await page.locator("#flight-origin-search-input").fill('pune');

    await page.waitForSelector("//ul[@aria-label='Flying from']")

    const options = await page.$$("//ul[@aria-label='Flying from']/li");

    for (let option1 of options)
    {
       const value =  await option1.textContent();
       console.log(value);

       if(value.includes("Puno, PeruAll airports"))
       {
            await option1.click();
       }
       
    }

    //wait for 5s
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})