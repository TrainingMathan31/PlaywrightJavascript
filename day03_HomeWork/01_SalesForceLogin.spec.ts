import { chromium, test } from "@playwright/test";

test("Login to Salesforce with valid credential and retrive the title and url",async()=>{
    const browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserConext = await browser.newContext();
    const page = await browserConext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("mathan@credosystemz.sanbox");
    await page.fill("#password","MyLearning$1");
    await page.click("#Login");
    await page.waitForTimeout(10000);
    const pageTitle = await page.title();
    const url = page.url();
    console.log(`Page Title is ${pageTitle} and Page URL is ${url}`);
 })