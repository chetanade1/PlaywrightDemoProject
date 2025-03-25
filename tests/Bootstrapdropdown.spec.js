import {test , expect} from 'playwright/test'

test('Bootstrap dropdown', async ({page}) => {







    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
})