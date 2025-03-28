const {test , expect}=require('@playwright/test')

test('Handle frame', async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    console.log("Browser opened");

    //number of frames present on webpage
    const allframes =  await page.frames();
    console.log("number of frames present on webpage are: ", allframes.length);






})