import {test , expect} from '@playwright/test'

test('Single file upload', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");  

    //click on file upload
    await page.waitForSelector("//input[@id='singleFileInput']");
    await page.locator("//input[@id='singleFileInput']").click();
    await page.locator("//input[@id='singleFileInput']").setInputFiles("uploadFiles\\Into-The-Spider-Verse-Wallpaper-HD-Free-download.png");

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
    console.log("Browser closed");




})