package au.com.carsguide.cucumber.steps;

import au.com.carsguide.pages.Dealers;
import au.com.carsguide.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealersSteps {

    @When("^I click on 'Find a Dealer' link$")
    public void iClickOnFindADealerLink() {
        new HomePage().clickOnFindDealer();
    }

    @Then("^I navigate to 'Car Dealers' page$")
    public void iNavigateToCarDealersPage() {
        new Dealers().verifyNavigateToCarDealerPage("Car Dealers");
    }

    @And("^I should see the dealers names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealersNamesAreDisplayOnPage(String dealer) {
        new Dealers().verifyDealerNames(dealer);
    }
}

