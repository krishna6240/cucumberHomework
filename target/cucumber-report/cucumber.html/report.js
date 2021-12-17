$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/au/com/carsguide/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"\u003cMAKE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"\u003cMODEL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"\u003cLOCATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"\u003cPRICE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"\u003cMAKE\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "MAKE",
        "MODEL",
        "LOCATION",
        "PRICE"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A1",
        "NSW - Sydney",
        "$50,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "NSW - All",
        "$20,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Ford",
        "Fiesta",
        "SA - Adelaide",
        "$15,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Nissan",
        "Qashqai",
        "VIC - Melbourne",
        "$40,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Jaguar",
        "F-Pace",
        "ACT - All",
        "$80,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover Evoque",
        "QLD - Brisbane",
        "$40,000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14985263200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 761340100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"A1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2494133800,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 516973200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 189450800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 314724000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 187541100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 257303300,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6277650500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 544053200,
  "status": "passed"
});
formatter.after({
  "duration": 1361950100,
  "status": "passed"
});
formatter.before({
  "duration": 7070446200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 784180400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Civic\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2677097400,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 488446700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 149845700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Civic",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 295312800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 209989800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 210830500,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5717716000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 445094800,
  "status": "passed"
});
formatter.after({
  "duration": 1112530900,
  "status": "passed"
});
formatter.before({
  "duration": 6608560900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 745273500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Fiesta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"SA - Adelaide\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2485041500,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 565365700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 152716600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fiesta",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 295280100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - Adelaide",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 320643200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 177618800,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6844390200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 576284100,
  "status": "passed"
});
formatter.after({
  "duration": 1401205800,
  "status": "passed"
});
formatter.before({
  "duration": 7002473300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 785597400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Qashqai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 408595000,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 2575511400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 174860700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qashqai",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 174611500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Melbourne",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 234541900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 214754300,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5705467700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 552130200,
  "status": "passed"
});
formatter.after({
  "duration": 1133259300,
  "status": "passed"
});
formatter.before({
  "duration": 7378543100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 552391400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"F-Pace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Jaguar\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2393104800,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 523273800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 162887900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "F-Pace",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 237445000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 243413800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 204794400,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6261616200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 593603500,
  "status": "passed"
});
formatter.after({
  "duration": 1464310900,
  "status": "passed"
});
formatter.before({
  "duration": 7151574200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 479037900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Range Rover Evoque\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"QLD - Brisbane\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Land Rover\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 381859800,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 2419179300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 144509300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Range Rover Evoque",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 285963400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - Brisbane",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 259333800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 148544500,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3083095100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 573214500,
  "status": "passed"
});
formatter.after({
  "duration": 1183458700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"\u003cMAKE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"\u003cMODEL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"\u003cLOCATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"\u003cPRICE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"\u003cMAKE\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "MAKE",
        "MODEL",
        "LOCATION",
        "PRICE"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Ford",
        "Focus",
        "NSW - New England",
        "$50,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "4 Series",
        "NSW - Hunter",
        "$80,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Volkswagen",
        "Polo",
        "SA - North",
        "$35,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Nissan",
        "Qashqai",
        "VIC - Melbourne",
        "$40,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Jaguar",
        "F-Pace",
        "WA - Perth",
        "$100,000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover Evoque",
        "QLD - Brisbane",
        "$70,000"
      ],
      "line": 44,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7322311900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 462755100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"Focus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 3053547800,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 59340100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 159758400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Focus",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 196415200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 191272200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 225488700,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6379239600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 57566700,
  "status": "passed"
});
formatter.after({
  "duration": 1125724900,
  "status": "passed"
});
formatter.before({
  "duration": 6806221100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 269428100,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"4 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 871914200,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1952425600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 419954600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 Series",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 225393100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 173571000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 153536900,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3833635000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 788003700,
  "status": "passed"
});
formatter.after({
  "duration": 1200055900,
  "status": "passed"
});
formatter.before({
  "duration": 6988382200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 583671000,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"Polo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"SA - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2820981500,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 407378100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 212617800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Polo",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 218920200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - North",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 254726700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 211073400,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4158057300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 20120115400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[@class\u003d\u0027listing-search-title\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DELL7480\u0027, ip: \u0027172.30.64.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f2c93906750345114e7a57273cb44be7, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\Krishna\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:65113}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65113/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f2c93906750345114e7a57273cb44be7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat au.com.carsguide.pages.ResultPage.verifyMakeInSearchResult(ResultPage.java:24)\r\n\tat au.com.carsguide.cucumber.steps.CarsSteps.iShouldSeeTheMakeInResults(CarsSteps.java:56)\r\n\tat ✽.Then I should see the make \"Volkswagen\" in results(src/test/java/au/com/carsguide/resources/featurefile/buy.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1429035600,
  "status": "passed"
});
formatter.before({
  "duration": 6503602300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 566031200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"Qashqai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 521102300,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 3186953500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 549739900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qashqai",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 154680600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Melbourne",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 158610300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 128696000,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5073185000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 399364400,
  "status": "passed"
});
formatter.after({
  "duration": 951130200,
  "status": "passed"
});
formatter.before({
  "duration": 6477319300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 544011100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"F-Pace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"WA - Perth\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Jaguar\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 574827500,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 2141705300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 169160800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "F-Pace",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 514876100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - Perth",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 246821100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 156809100,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6147426400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 761592700,
  "status": "passed"
});
formatter.after({
  "duration": 1474442400,
  "status": "passed"
});
formatter.before({
  "duration": 7042535900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "CarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 619021100,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"Range Rover Evoque\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"QLD - Brisbane\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Land Rover\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarsSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 980551600,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 2603387200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "CarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 286357100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Range Rover Evoque",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 409931000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - Brisbane",
      "offset": 19
    }
  ],
  "location": "CarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 168086900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 16
    }
  ],
  "location": "CarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 133357900,
  "status": "passed"
});
formatter.match({
  "location": "CarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4874576900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "CarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 416614000,
  "status": "passed"
});
formatter.after({
  "duration": 1182492600,
  "status": "passed"
});
});