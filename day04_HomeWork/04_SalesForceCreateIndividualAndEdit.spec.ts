import { chromium, test } from "@playwright/test";

test("Login to Salesforce with valid credential and Create Lead",async()=>{
    const browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserConext = await browser.newContext();
    const page = await browserConext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("mathan@credosystemz.sanbox");
    await page.fill("#password","MyLearning$1");
    await page.click("#Login");
    await page.waitForLoadState('load');
    const pageTitle = await page.title();
    const url = page.url();
    console.log(`Page Title is ${pageTitle} and Page URL is ${url}`);
    await page.waitForSelector("div.slds-icon-waffle");
    await page.waitForTimeout(3000);
    await page.click("div.slds-icon-waffle");
    await page.click("text=View All");
    await page.click("//p[text()='Individuals']");
    await page.waitForSelector("(//span[text()='Individuals'])[1]");
    await page.click("//div[text()='New']");
    await page.waitForLoadState('load');
    await page.locator("//div/a[text()='--None--']").nth(0).click();
    //await page.waitForTimeout(10000);
    const salutation = "Mr.";
    await page.waitForSelector("//a[text()='"+salutation+"']");
    await page.click("//a[text()='"+salutation+"']");
    const lastName = "Maddy" + Math.floor(Math.random() * 1001);
    console.log("Random Last name is : "+lastName);
    
    await page.fill("input[placeholder='Last Name']",lastName);
    await page.click("//button[@title='Save']/span[text()='Save']");
    await page.waitForLoadState('load');
    const actualIndividual = "//div/span[contains(text(),'"+lastName+"')]";
    console.log("Actual Locator is : "+actualIndividual);
    const actualValue = await page.locator(actualIndividual).innerText();
    console.log("Actual Inner Text is : "+actualValue);
       if(actualValue.includes(lastName)){
        console.log("Unique Individual is created and validated ");
        }else{
        console.log("Unique Individual is not created and validated ");
        }

    // Click on Edit button
    await page.click("//div[text()='Edit']");
    await page.waitForLoadState('load');
    await page.locator("div a.select").nth(0).click();
    const editedSalutation = "Prof.";
    await page.waitForSelector("//a[text()='"+salutation+"']");
    await page.click("//a[text()='"+editedSalutation+"']");
    await page.click("//button[@title='Save']/span[text()='Save']");
    const actualSalutation = "//div/span[contains(text(),'"+editedSalutation+"')]";
    console.log("Actual Salutation Locator is : "+actualSalutation);
    const actualSalutationText = await page.locator(actualSalutation).innerText();
    console.log("Actual Inner Text is : "+actualSalutationText);
       if(actualSalutation.includes(editedSalutation)){
        console.log("Unique Individual salutation is edited and validated ");
        }else{
        console.log("Unique Individual salutation is not edited and validated ");
        }

      
 })