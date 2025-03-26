import {test , expect} from 'playwright/test'

test('Bootstrap dropdown', async ({page}) => {

    await page.goto("https://www.jquery-az.com/tools/BS5-dropdown-gen.php")






    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
})