import { test, expect } from '@playwright/test';


test('validate UI components on ShopClues', async ({ page }) => {
    await page.goto('https://www.shopclues.com/');

    // Validate the presence of the search bar
    const searchBar = page.locator('#autocomplete');
    await expect(searchBar).toBeVisible();

    // Validate the presence of the main banner
    const mainBanner = page.locator('.home_slider');
    await expect(mainBanner).toBeVisible();

    // Validate the presence of the category menu
    const categoryMenu = page.locator('.nav-category');
    await expect(categoryMenu).toBeVisible();

    // Validate the presence of the footer
    const footer = page.locator('.footer');
    await expect(footer).toBeVisible();

    // Validate the presence of the cart icon
    const cartIcon = page.locator('.cart_ic');
    await expect(cartIcon).toBeVisible();
});