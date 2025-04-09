exports.HomePage = class HomePage {

    constructor(page)
    {
        this.page = page;
        this.productsList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartBtn = "//a[text()='Add to cart']";
        this.clickOnCartLink = "#cartur";
    }

    async addproductToCart(productName)
    {
        const productList = await this.page.$$(this.productsList);
        console.log("Product list length: "+productList.length);
        console.log("Product list: "+productList);
        console.log("Product name: "+productName);
        for (const product of productList) 
        {
            if(productName == await product.textContent())
            {
                await product.click();
                console.log("Product clicked");
                break;
            }
        }

            await this.page.waitForTimeout(2000);

            await this.page.on('dialog', async dialog => {
                await dialog.accept();
                console.log(dialog.message());
            })
            await this.page.locator(this.addToCartBtn).click();
    }


    async clickOnCartLink()
    {
        await this.page.locator(this.clickOnCartLink).click();
        console.log("Cart link clicked");
    }


}