const {test , expect} =require('@playwright/test')

test("Handle Keyboard Actions", async ({page}) => {

    await page.goto("https://gotranscript.com/text-compare");
    console.log("Browser opened");

    //locator for text area
    await page.locator("//textarea[@name='text1']").fill("Hello automation");
    console.log("Text entered in the text area");

    await page.waitForTimeout(5000);

    //Control + A
    await page.keyboard.press('Control+A');
    console.log("Control + A action performed");

    //Control + C
    await page.keyboard.press('Control+c');

    //Control + Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    console.log("Control + Tab action performed");

    //Control + V
    await page.keyboard.press('Control+v');
    console.log("Control + V action performed");





    //wait for 5 min
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();

})