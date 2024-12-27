const {Builder,Key,until,By}=require('selenium-webdriver');
const chrome=require('selenium-webdriver/chrome');

(async()=>{
    let driver;
    try{
        driver= await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();

        await driver.get("https://www.google.com");
        await driver.wait(until.titleContains('Google'),10000);
        console.log("Test 1 Passed");


        await driver.findElement(By.name('q')).sendKeys('Selenium',Key.RETURN);
        await driver.wait(until.titleContains('Selenium'),10000);
        console.log("Test 2 Passed");

        const searchResults = await driver.findElements(By.css('div.g'));
        console.log('Test Case 3 Passed: Found ${searchResults.length} search results');

        const searchInput=await driver.findElement(By.name('q'));
        const isSearchInputDisplayed=await searchInput.isDisplayed();
        console.log('Search Input Displayed=,isSearchInputDisplayed');
    }
    catch(error){
        console.log("Error during testing:"+error);
    }
    finally{
        await driver.quit();
    }
})();