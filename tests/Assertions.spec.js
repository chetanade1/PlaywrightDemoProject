//Assdertions are used to validate the expected results of the test case. It is used to validate the actual result with the expected result. If the actual result is matched with the expected result then the test case is passed otherwise it is failed. There are many assertions available in Playwright. Some of them are as follows:
//1. toHaveURL  
//2. toHaveTitle
//3. toHaveText
//4. toBeVisible
//5. toBeEnabled
//6. toBeChecked
//7. toBeSelected
//8. toHaveAttribute
//9. toContainText
//10. toHaveValue
//11. toHaveCount






import {test, expect} from '@playwright/test';

test('AssertionsTest',async ({page}) => {

    //open app url
    await page.goto('https://demo.nopcommerce.com/register');

    //to have URL ---> Page Has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    console.log("URL is correct");

    //to have title ---> Page Has Title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    console.log("Title is correct");

    //to have text ---> Page Has Text
    await expect(page.locator('h1')).toHaveText('Register');
    console.log("Text is correct");

    //to be visible ---> Logo is visible
    await expect(page.locator('.header-logo')).toBeVisible();
    console.log("Logo is visible");

    const Title =await page.locator("//strong[text()='Your Personal Details']");
    await expect(Title).toBeVisible();
    console.log("Your Personal Details is visible");

    //to be enabled ---> Button is enabled
    const searchBox = await page.locator('#small-searchterms');
    await expect(searchBox).toBeEnabled();
    console.log("Search input box is enabled");  
    
    //to be checked ---> Checkbox is checked
    const maleGender = await page.locator('#gender-male');
    await maleGender.check();
    await expect(maleGender).toBeChecked();
    console.log("Male Radio button is checked");

    const femaleGender = await page.locator('#gender-female');
    await femaleGender.check();
    await expect(femaleGender).toBeChecked();
    console.log("Female radio button is checked");

    //to be selected ---> checkbox is selected
    const newsletterCheckbox = await page.locator('#Newsletter');
    await expect(newsletterCheckbox).toBeChecked();
    console.log("Newsletter checkbox is checked");

    //to be attribute ---> Attribute value
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');
    console.log("Register button is present");

    //to contain text ---> Page Contains Text
    await expect(page.locator("//strong[text()='Company Details']")).toContainText('Company');
    console.log("Company Details is present");

    //to have value ---> Page Has Value
    const firstNameValue = await page.locator('#FirstName');
    await firstNameValue.fill("tantan")
    await expect(firstNameValue).toHaveValue("tantan");
    console.log("First Name value is present");

    //to have count ---> Page Has Count
    const links = await page.$$('a');
    await expect(links).toHaveLength(62);    
    console.log("Links count is correct");

    //take a screenshot
    await page.screenshot({path: 'D:\\PlaywrightAutomation\\Screenshot\\screenshot3.png'});
    














    //close the browser
    await page.close();









});