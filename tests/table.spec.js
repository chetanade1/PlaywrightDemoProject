const {test , expect} = require("@playwright/test");

test('handle table', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    //Table visible or not
    const table = await page.locator("#productTable");
    await expect(table).toBeVisible();
    console.log("Table is visible");

    //calculate no of columns
    const columns = await table.locator("thead tr th");
    console.log("No of columns in the table as", await columns.count());
    await expect(await columns.count()).toBe(4);

    //count the no of rows
    const rows = await table.locator("tbody tr");
    console.log("No of rows in the table as", await rows.count());
    await expect(await rows.count()).toBe(5);
    
    //select the check box of product 4
    /*
    const matchrow = rows.filter({
        has: page.locator("td"),
        hasText: "Smartwatch"


    })
    await matchrow.locator("input").check();
    console.log("Check box selected");
    */

    //select the multiple products
    /*
    await selectProduct(rows, page, "Smartwatch");
    await selectProduct(rows, page, "Laptop");
    await selectProduct(rows, page, "Smartphone");
    */

    //4. print all product details using loop
    /*
    for(let i=0; i<await rows.count(); i++)
    {
            const row = rows.nth(i);
            const tds = row.locator("td");
        for(let j=0; j< await tds.count()-1; j++)
        {
            console.log(await tds.nth(j).textContent());
        }
    }
    */
   //5. Pagination part handle in multiple pages

    const pages = await page.locator(".pagination li a");
    await pages.count();
    console.log("No of pages in the table as", await pages.count());

    for(let p=0; p<await pages.count(); p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
        }
        for(let i=0; i<await rows.count(); i++)
            {
                    const row = rows.nth(i);
                    const tds = row.locator("td");
                for(let j=0; j< await tds.count()-1; j++)
                {
                    console.log(await tds.nth(j).textContent());
                }
            }
    }

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();


})

async function selectProduct(rows, page, name)
    {
        const matchrow = rows.filter({
            has: page.locator("td"),
            hasText: name
    
    
        })
        await matchrow.locator("input").check();
        console.log("Check box selected");

    }