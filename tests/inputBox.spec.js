import {test , expect} from '@playwright/test';

test('Handle inputBox', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //Textbox visible or not
    const nameTextbox = await page.locator("//input[@id='name']");
    await expect(nameTextbox).toBeVisible();
    console.log("Textbox is visible");

    //Textbox empty or not
    const nameTextbox1 = await page.locator("//input[@id='name']");
    await expect(nameTextbox1).toBeEmpty;
    console.log("Textbox is empty");

    //textbox editable or not
    const nameTextbox2 = await page.locator("//input[@id='name']");
    await expect(nameTextbox2).toBeEditable;
    console.log("Textbox is editable");

    //textbox enabled or not
    const nameTextbox3 = await page.locator("//input[@id='name']");
    await expect(nameTextbox3).toBeEnabled;
    console.log("Textbox is enabled");


    //Enter the name
    //await page.getByRole('textbox', {name: 'name'}).fill('Pavan');
    //await page.fill('id=name', 'pavan');
    await page.locator('#name').fill('Chetan');
    console.log("Name entered");

    //Textbox empty or not
    const nameTextbox4 = await page.locator("//input[@id='name']");
    await expect(nameTextbox4).toBeEmpty;
    console.log("Textbox is empty");

    //Enter e-mail address
    const Email = await page.locator("//input[@placeholder='Enter EMail']");
    await Email.fill("chetandae@gmail.com");
    console.log("Email entered");

    //Enter phone number
    await page.locator("#phone").fill("1234567890");
    console.log("Phone number entered");
    




})


