import { chromium, test } from "@playwright/test";

test("Login to Salesforce with valid credential and retrive the title and url",async()=>{
    const browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserConext = await browser.newContext();
    const page = await browserConext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.fill("#password","crmsfa");
    await page.click("input.decorativeSubmit");
    await page.waitForTimeout(2000);
    const pageTitle = await page.title();
    const url = page.url();
    console.log(`Page Title is ${pageTitle} and Page URL is ${url}`);
    const firstName = "Madhan";
    const companyName = "CTS";
    await page.click("//a/img");
    await page.click("//a[text()='Create Lead']");
    await page.fill("#createLeadForm_companyName",companyName);
    await page.fill("#createLeadForm_firstName",firstName);
    await page.fill("#createLeadForm_lastName","C");
    await page.click("//input[@name='submitButton']");
    await page.waitForLoadState("load");
    const result = await page.locator("//div[text()='View Lead']").isVisible();
    if(result){
        console.log("Leads Creation is successfully.");
     }else{
        console.log("Leads Creation is failed.");
     }
     // Click on Edit button
     await page.click("//a[text()='Edit']");
     const newCompanyName = "Cognizant";
     const oCompanyName = page.locator("#updateLeadForm_companyName");
     await oCompanyName.clear();
     oCompanyName.fill(newCompanyName);
     await page.locator(".smallSubmit").nth(0).click();
     const oNewCompanyName = page.locator("#viewLead_companyName_sp");
     const actualCompanyName = await oNewCompanyName.innerText();
     console.log("Actual Company Name is : "+actualCompanyName);
     if(actualCompanyName.includes(newCompanyName)){
        console.log("Edit Lead Test Case is Passed");
      }else{
        console.log("Edit Lead Test Case is Failed");
        
      }
     
     

    
 })