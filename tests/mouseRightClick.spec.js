const {test , expect} =require('@playwright/test')  

test('Handle right click', async ({page}) => {

    //open the browser
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    console.log("Browser opened");

    //right click on button
    const rightButton = await page.locator("//span[contains(text(),'right click me')]");
    console.log("Right click button clicked");

    //right click on button
    await rightButton.click({button: 'right'});
    console.log("Right click action performed");


    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();
})
    