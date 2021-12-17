package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buySellTab;

    @CacheLookup
    @FindBy (xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCars;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Used']")
    WebElement usedCar;

    @CacheLookup
    @FindBy (xpath = "//a[contains(text(),'Find a Dealer')]")
    WebElement findDealer;

    public void mouseHoverOnBuySellTab() throws InterruptedException {
//        Thread.sleep(1000);
        mouseHoverToElement(buySellTab);
        log.info("Mouse hover on 'Buy + Sell' Tab  " + buySellTab.toString());
    }

    public void clickOnSearchLink(){
        mouseHoverToElementAndClick(searchCars);
        log.info("Clicking on Search link  " + searchCars.toString());
    }

    public void clickOnUsedLink(){
        mouseHoverToElementAndClick(usedCar);
        log.info("Clicking on Search link  " + searchCars.toString());
    }

    public void clickOnFindDealer(){
        mouseHoverToElementAndClick(findDealer);
        log.info("Clicking on 'Find a Dealer' link   " + findDealer.toString());
    }



}



