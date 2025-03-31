const {test , expect} =require('@playwright/test')


test('Handle Date Picker2', async ({page}) => {


    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //click on date picker
    await page.locator("#txtDate").click();
    console.log("Date picker clicked");

    const day = "10";

        //get the month and year
        //const currentyear = await page.locator(".ui-datepicker-year").textContent();
        await page.waitForSelector(".ui-datepicker-year")
        const currentyear = await page.locator(".ui-datepicker-year").selectOption({value: '2027'});
        await page.waitForSelector(".ui-datepicker-month")
        const currentmonth = await page.locator(".ui-datepicker-month").selectOption({value: '4'});
        
        console.log("Current month: ", currentmonth);
        console.log("Current year: ", currentyear);

        const date = await page.locator(`//a[@class='ui-state-default'][text()='${day}']`)
        console.log("Date matched");
        await date.click();
        console.log("Date clicked");
        console.log("date is :", day)

    
    //select the date
    //get the date
    //const date = await page.locator(`//a[@class='ui-state-default'][text()='${day}']`)

})