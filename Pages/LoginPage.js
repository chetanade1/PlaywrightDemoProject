exports.loginPage = 
class loginPage {

    constructor(page)
    {
        this.page = page;
        this.loginLink = '#login2';
        this.username = "#loginusername";
        this.password = "#loginpassword";
        this.loginBtn = "//button[text()='Log in']";

    }

    async gotoTheLoginPage()
    {
        await this.page.goto("https://www.demoblaze.com/index.html");
        console.log("Browser opened");
    }

    async clickOnLoginLink()
    {
        await this.page.locator(this.loginLink).click();
        console.log("Login button clicked");
    }

    async login(username, password)
    {
        await this.page.locator(this.username).fill(username);
        console.log("Username entered");

        await this.page.locator(this.password).fill(password);
        console.log("Password entered");
    }

    async clickOnLoginBtn()
    {
        await this.page.locator(this.loginBtn).click();
        console.log("Login button clicked");
    }
}