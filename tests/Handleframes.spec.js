const {test , expect}=require('@playwright/test')

test('Handle frame', async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    console.log("Browser opened");

    //number of frames present on webpage
    const allframes =  await page.frames();
    console.log("number of frames present on webpage are: ", allframes.length);

    /*
    //open the frame
    const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    console.log("Frame opened");

    //await page.waitForSelector("//input[@name='mytext1']");
    //console.log("Textbox is visible");

    //enter the text in textbox1
    await frame1.locator("//input[@name='mytext1']").fill("chetan");
    */

    //2. using frame locator
    const frame1 = await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']");
    await frame1.fill("chetan");
    console.log("Text entered in frame1");


    //wait for 5 sec
    await page.waitForTimeout(5000);

    //close the browser
    await page.close();










})