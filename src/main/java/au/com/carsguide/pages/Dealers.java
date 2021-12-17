package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;

public class Dealers extends Utility {
    private static final Logger log = LogManager.getLogger(Dealers.class.getName());

    @CacheLookup
    @FindBy(xpath = "//div[@class='dealer-heading row']")
    WebElement getMessage;

    @CacheLookup
    @FindBy (xpath = "//div[@class='dealerListings--name']")
    List<WebElement> dealers;

    public void verifyNavigateToCarDealerPage(String message){
        String actualString = getTextFromElement(getMessage);
        String expectedString = (message);
        Assert.assertTrue(actualString.contains(expectedString));
        log.info("Verifying Car 'Make' in search result  " + message + getMessage.getText());
    }

    public void verifyDealerNames(String list) {
        for (WebElement dealersName : dealers) {
            if (list == dealersName.getText()) {
                Assert.assertTrue(true);
                log.info("verifying 'Dealers Name' from the list  " + list);
                break;
            } else Assert.assertFalse(false);
        }
    }
}
