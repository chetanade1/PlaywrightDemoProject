const {test , expect, chromium} =require ('@playwright/test')

test("Handling Windows", async ({}) => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = await context.pages();
    console.log("No of pages created : " , allPages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    await page2.goto("https://demowebshop.tricentis.com/");
    await expect(page2).toHaveTitle("Demo Web Shop");

})

test("Handling Multiple Windows", async ({}) => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = await context.pages();
    console.log("No of pages created : " , allPages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[text()='OrangeHRM, Inc']").click();
    const newPage = await pagePromise;
    console.log("New page title: " + await newPage.title());
    await page1.waitForTimeout(5000);
    await newPage.waitForTimeout(3000);
    ``
})
