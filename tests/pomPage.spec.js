import {test , expect} from '@playwright/test'
import { loginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage';


test("test1", async ({page}) => {

    const logIn = new loginPage(page);
    const home = new HomePage(page);
    //open the browser
    await logIn.gotoTheLoginPage();
    await logIn.clickOnLoginLink();
    await logIn.login("pavanol","test@123");
    await logIn.clickOnLoginBtn();

    //Homepage
    await home.addproductToCart("Samsung galaxy s6");
    await page.waitForTimeout(3000);
    //await home.clickOnAddToCartBtn();
    //await home.clickOnCartLink();








})