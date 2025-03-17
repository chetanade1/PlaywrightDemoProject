import {test, expect } from "@playwright/test";

test('Locating Multiple Elements', async ({page}) => 
{
    await page.goto("https://www.demoblaze.com/index.html");

    /*
    const links = await page.$$('a');   
    
    for (const link of links) 
    {
       const linkage = await link.textContent();
        console.log(linkage);
        //console.log(await link.textContent());
    }
        */

   // page.waitForSelector("//div[@id = 'tbodyid']//div//h4//a");
    const products = await page.$$("//div[@id = 'tbodyid']//div//h4//a");

    for (const product of products) 
    {
        const noOfProducts = products.length;
        console.log(noOfProducts);
        const productName = await product.textContent();
        console.log(productName);
        //console.log(await product.textContent());
    }

    await page.close();

});
