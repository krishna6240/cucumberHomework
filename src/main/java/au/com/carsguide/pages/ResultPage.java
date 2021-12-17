package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement getMessage;

    public void verifyMakeInSearchResult(String message){
        String actualString = getTextFromElement(getMessage);
        String expectedString = (message);
        Assert.assertTrue(actualString.contains(expectedString));
        log.info("Verifying Car 'Make' in search result  " + message + getMessage.getText());

    }

}



