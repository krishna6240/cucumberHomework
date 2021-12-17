package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class NewAndUsedCarsSearchPage extends Utility {
    private static final Logger log = LogManager.getLogger(NewAndUsedCarsSearchPage.class.getName());

    public NewAndUsedCarsSearchPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "makes")
    WebElement getCarMakes;

    @CacheLookup
    @FindBy (id = "models")
    WebElement getCarModels;

    @CacheLookup
    @FindBy (id = "locations")
    WebElement getLocations;

    @CacheLookup
    @FindBy (id = "priceTo")
    WebElement getMaxPrice;

    @CacheLookup
    @FindBy (id = "search-submit")
    WebElement getSearchButton;

    @CacheLookup
    @FindBy (xpath = "//div[contains(@class,'heading main-heading item-ad-wrapper')]")
    WebElement getSearchPageTitle;


    public void selectCarMakeFromdropdown(String makes){
        selectByVisibleTextFromDropDown(getCarMakes, makes);
        log.info("Select 'Car Make' from dropdown  " + getCarMakes.toString());
    }

    public void selectModelFromDropdown(String model){
        selectByVisibleTextFromDropDown(getCarModels, model);
        log.info("Selecting 'Car Model' from dropdown  " + getCarModels.toString());
    }

    public void selectLocationFromDropdown(String location){
        selectByVisibleTextFromDropDown(getLocations, location);
        log.info("Selecting 'Location' from dropdown  " + getLocations.toString());
    }

    public void selectMaxPriceFromDropdown(String price){
        selectByVisibleTextFromDropDown(getMaxPrice, price);
        log.info("Selecting 'Maximum Price' from dropdown  " + getMaxPrice.toString());
    }

    public void clickOnFindMyNextCarButton(){
        clickOnElement(getSearchButton);
        log.info("Clicking on 'Find my Next Car' button  " + getSearchButton.toString());
    }

    public void VerifyPageTitle(String message){
        String actualString = getTextFromElement(getSearchPageTitle);
        String expectedString = (message);
        Assert.assertTrue(actualString.contains(expectedString));
        log.info("Confirming Page Navigate to NewandUsed car Page: " + message + getSearchPageTitle.getText());

    }
}


