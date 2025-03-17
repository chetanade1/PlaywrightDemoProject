import {test, expect} from '@playwright/test';

test('verify title', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');
    const title = await page.title();
    expect(title).toBe('STORE');
    const pageURL = page.url();
    console.log('URL of the page is: ' + pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    console.log('Title of the page is: ' + title);
    await page.close();
})
