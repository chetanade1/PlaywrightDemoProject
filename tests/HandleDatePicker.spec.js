const {test , expect} =require('@playwright/test')

test('Handle Date Picker', async ({page}) => 

    {
        await page.goto("https://testautomationpractice.blogspot.com/");
        console.log("Browser opened");

        //await page.locator("#datepicker").fill("12/12/2023");
        //console.log("Date entered");

        //click on date picker
        const year = "2023";
        const month = "December";
        const day = "12";

        while(true)
        {
            //click on date picker
            await page.locator("#datepicker").click();
            console.log("Date picker clicked");

            //get the month and year
            const currentyear = await page.locator(".ui-datepicker-year").textContent();
            const currentmonth = await page.locator(".ui-datepicker-month").textContent();
            console.log("Current month: ", currentmonth);
            console.log("Current year: ", currentyear);

            //check if the month and year are same
            if(currentyear ==year && currentmonth)
            {
                console.log("Year and month matched");
                break;
            }
            await page.locator('[title="Prev"]').click();
            console.log("Previous month clicked");
            
            //get the date
           // const date = await page.locator(`//a[@class='ui-state-default'][text()='{$day}']`)
        }

        const date = await page.$$("//a[@class='ui-state-default']");

            for(let dt of date)
            {
                if(await dt.textContent()==day)
                {
                    console.log("Date matched");
                    await dt.click();
                    //console.log("current day is:", date)
                    break;
                }

            }



        //wait 5 se
        await page.waitForTimeout(5000);

        //close the browser
        await page.close();
    })

test('Handle Date Picker2', async ({page}) => {


    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //click on date picker
    await page.locator("#txtDate").click();
    console.log("Date picker clicked");

    const year = "2027";
    const month = "May";
    const day = "10";

    while(true)
    {
        //get the month and year
        const currentyear = await page.locator(".ui-datepicker-year").textContent();
        const currentmonth = await page.locator(".ui-datepicker-month").textContent();
        console.log("Current month: ", currentmonth);
        console.log("Current year: ", currentyear);

        //check if the month and year are same
        if(currentmonth==month &&currentyear==year )
        {
            console.log("Year and month matched");
            break;
        }

        //click on next page
        await page.locator('[title="Next"]').click();
        console.log("Previous month clicked");


    }

    const date = await page.locator(`//a[@class='ui-state-default'][text()='${day}']`);
    await date.click();
    console.log("Date clicked");

    
    //wait 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})