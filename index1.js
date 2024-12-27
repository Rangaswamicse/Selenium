const {By,Builder,Key}=require('selenium-webdriver');

async function example(){
    const driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.com");
    await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);
}

example();