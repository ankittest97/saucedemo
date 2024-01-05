$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/SauceLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to SauceDemo",
  "description": "",
  "id": "login-to-saucedemo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-to-saucedemo;user-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Application Page Tittle is SauceDemo",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigate to Product page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User verifies whether product results are as per requirement",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-to-saucedemo;user-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "login-to-saucedemo;user-login-scenario;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 15,
      "id": "login-to-saucedemo;user-login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-to-saucedemo;user-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Application Page Tittle is SauceDemo",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"standard_user\" and \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigate to Product page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User verifies whether product results are as per requirement",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLogin.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 16393824100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLogin.application_Page_Tittle_is_SauceDemo()"
});
formatter.result({
  "duration": 36848500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoLogin.user_enters_and(String,String)"
});
formatter.result({
  "duration": 424273200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLogin.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 239937700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLogin.user_navigate_to_Product_page()"
});
formatter.result({
  "duration": 17802700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLogin.user_verifies_whether_product_results_are_as_per_requirement()"
});
formatter.result({
  "duration": 3088275600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLogin.close_the_Browser()"
});
formatter.result({
  "duration": 1014860100,
  "status": "passed"
});
});