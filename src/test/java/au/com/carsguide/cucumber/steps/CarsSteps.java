package au.com.carsguide.cucumber.steps;

import au.com.carsguide.pages.NewAndUsedCarsSearchPage;
import au.com.carsguide.pages.UsedCarsPage;
import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.ResultPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class CarsSteps {
    @When("^I mouse hover on 'buy \\+ sell' tab$")
    public void iMouseHoverOnBuySellTab() throws InterruptedException {
        new HomePage().mouseHoverOnBuySellTab();
    }

    @When("^I click ‘Search Cars’ link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickOnSearchLink();
    }

    @Then("^I navigate to ‘new and used car search’ page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        new NewAndUsedCarsSearchPage().VerifyPageTitle("New & Used");
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
        new NewAndUsedCarsSearchPage().selectCarMakeFromdropdown(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {
        new NewAndUsedCarsSearchPage().selectModelFromDropdown(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {
        new NewAndUsedCarsSearchPage().selectLocationFromDropdown(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {
        new NewAndUsedCarsSearchPage().selectMaxPriceFromDropdown(price);
    }

    @And("^I click on 'Find My Next Car' tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarsSearchPage().clickOnFindMyNextCarButton();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {
        new ResultPage().verifyMakeInSearchResult(make);
    }

    @When("^I click ‘Used’ link$")
    public void iClickUsedLink() {
        new HomePage().clickOnUsedLink();
    }

    @Then("^I navigate to ‘Used Cars For Sale’ page$")
    public void iNavigateToUsedCarsForSalePage() {
        new UsedCarsPage().VerifyPageTitle("Used Cars");
    }
}