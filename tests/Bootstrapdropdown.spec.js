import {test , expect} from 'playwright/test'

test('Bootstrap dropdown', async ({page}) => {

    await page.goto("https://getbootstrap.com/docs/5.0/components/dropdowns/")
    console.log("open browser");

    //Verify Title
    const Title = await page.title();
    await expect(Title).toBe("Dropdowns · Bootstrap v5.0");

    //click on dropdown
    await page.locator("#dropdownMenuButton1").click();
    console.log('element clicked');

    //count the number
    const options = await page.$$("//ul[@class='dropdown-menu show']/li");
    //await expect(options).toHaveCount(3);
    console.log("number of options is:", options.length);
    for (let option of options)
    {
        const value = await option.textContent();
        //console.log(value);
        if(value.includes("Action") || value.includes("Another action"))
        {
            await option.click();
            console.log("clicked");
            break;
        }

    }



    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
})