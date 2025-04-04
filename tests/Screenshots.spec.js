import {test , expect} from '@playwright/test'
import { only } from 'node:test';

test("Screenshot test", async ({page}) => {

    //open the browser
    await page.goto("https://demo.opencart.com/");
    console.log("Browser opened");

    //take screenshot
    await page.screenshot({path: 'Screenshot/'+Date.now()+'HomePage.png'});

  
})

test("Full Screenshot test", async ({page}) => {

    //open the browser
    await page.goto("https://demo.opencart.com/");
    console.log("Browser opened");

    //Full page screenshot
    await page.screenshot({path: 'Screenshot/'+Date.now()+'HomePage1.png', fullPage: true});
    console.log("Full page screenshot taken");
})

//purticular area screenshot

test.only("Full Screenshot test2", async ({page}) => {

    //open the browser
    await page.goto("https://www.demoblaze.com/index.html");
    console.log("Browser opened");

    //locator for the element
    const sumsung = await page.locator("(//div[@class='col-lg-4 col-md-6 mb-4']/div[@class='card h-100'])[1]");

    //Full page screenshot
    await page.locator(sumsung).screenshot({path: 'Screenshot/'+Date.now()+'HomePage2.png'});
    console.log("Full page screenshot taken");
})