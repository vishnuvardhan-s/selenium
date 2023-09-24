import { Builder, Capabilities, By } from 'selenium-webdriver';

const automate = async () => {
    const webdriver = new Builder().withCapabilities(Capabilities.firefox()).build();
    await webdriver.get("https://google.com");
    console.log("Google loaded!!");
    const searchBox = await webdriver.findElement(By.id('APjFqb'));
    await searchBox.sendKeys("Who is Mukesh?");
    const searchButtons = await webdriver.findElements(By.className("gNO89b"));
    // const buttonsVisible = searchButtons.map(async (button) => {
    //     const isVisible = await button.isDisplayed();
    //     return isVisible;
    // });
    // await Promise.all(buttonsVisible);
    const actualSearchButton = searchButtons[1];
    await actualSearchButton.submit();
    await webdriver.sleep(5000);
    const links = await webdriver.findElements(By.css("a"));
    const ovvoruitem = async (link) => {
        const href = await link.getAttribute("href");
        return href;
    }
    const hrefs = links.map(ovvoruitem);
    await Promise.all(hrefs);
    console.log(hrefs);
    await webdriver.close();
    console.log('Automation done!!');
}

automate();