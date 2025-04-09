const {test , expect}=require('@playwright/test')

test("Handle Drag and Drop", async ({page}) => {

    //open the browser
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Browser opened");

    
    //locator for drag and drop
    const sourceLoc = await page.locator("#draggable");
    const targetLoc = await page.locator("#droppable");

    //drag and drop
    await sourceLoc.dragTo(targetLoc);
    console.log("Drag and drop action performed");

    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
})