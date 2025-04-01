const {test , expect} =require('@playwright/test')

test('handle drag and drop', async ({page}) => {

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    console.log("Browser opened");

    //locator for drag and drop
    const seoul = await page.locator("#box5");
    const Norway = await page.locator("#box101");

    /*
    //Approach 1
    //drag and drop
    await seoul.hover();
    console.log("Mouse hovered on seoul");
    await page.mouse.down();

    await Norway.hover();
    console.log("Mouse hovered on norway");
    await page.mouse.up();
    console.log("Mouse up action performed");
    */

    //Approach 2
    //drag and drop
    const rome = await page.locator('#box6');
    const sweden = await page.locator('#box102');

    await rome.dragTo(sweden);
    console.log("Drag and drop action performed");

    await page.waitForTimeout(3000);

    await seoul.dragTo(Norway);
    console.log("Drag and drop action performed");


    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
    console.log("Browser closed");

    
})