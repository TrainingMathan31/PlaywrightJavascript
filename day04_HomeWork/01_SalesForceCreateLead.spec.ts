import { chromium, test } from "@playwright/test";

test("Login to Salesforce with valid credential and Create Lead",async()=>{
    const browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserConext = await browser.newContext();
    const page = await browserConext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("mathan@credosystemz.sanbox");
    await page.fill("#password","MyLearning$1");
    await page.click("#Login");
    //await page.waitForTimeout(10000);
    await page.waitForLoadState('load');
    const pageTitle = await page.title();
    const url = page.url();
    console.log(`Page Title is ${pageTitle} and Page URL is ${url}`);
    await page.click("div.slds-icon-waffle");
    await page.click("text=View All");
    await page.click("//p[text()='Sales']");
    //await page.waitForLoadState('load');
    await page.waitForSelector("//a/span[text()='Leads']");
    await page.click("//a/span[text()='Leads']");
    await page.click("//div[text()='New']");
    await page.waitForLoadState('load');
    await page.click("button[name='salutation']");
    //await page.waitForTimeout(10000);
    await page.waitForSelector("//span[text()='Mr.']");
    await page.click("//span[text()='Mr.']");
    await page.fill("input[name='lastName']","Chandrasekaran");
    await page.fill("input[name='Company']","Marlow");
    await page.click("//button[text()='Save']");
    
 })