package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class UsedCarsPage extends Utility {
    private static final Logger log = LogManager.getLogger(UsedCarsPage.class.getName());
    public UsedCarsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (xpath = "//div[contains(@class,'heading main-heading item-ad-wrapper')]")
    WebElement getSearchPageTitle;


    public void VerifyPageTitle(String message){
        String actualString = getTextFromElement(getSearchPageTitle);
        String expectedString = (message);
        Assert.assertTrue(actualString.contains(expectedString));
        log.info("Confirming Page Navigate to Used car Page  " + message + getSearchPageTitle.getText());
    }


}