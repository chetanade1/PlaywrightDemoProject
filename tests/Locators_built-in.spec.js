import {test,expect} from '@playwright/test';

test('Locators_built-in' ,async ({page}) => 
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Verify whether logo is visible or not
    //await page.waitForSelector('company-branding');
    const logo = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    console.log("Logo is visible");

    //Verify whether placeholder field is visible or not
    const placeholder1 = page.getByPlaceholder('Username');
    //const placeholder = page.getByPlaceholderText('Username');
    await expect(placeholder1).toBeVisible();
    console.log("Placeholder is visible");

    //Login to the application
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', {type: 'submit'}).click();
    console.log("Button is clicked");
    console.log("Button is visible");



    //take a screenshot
    await page.screenshot({path: 'D:\\PlaywrightAutomation\\Screenshot\\screenshot2.png'});

    //close the browser
    await page.close();
});
