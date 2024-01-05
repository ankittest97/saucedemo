Feature: Login to SauceDemo


Scenario Outline: User Login Scenario
	Given User is on Application Home Page 
	When Application Page Tittle is SauceDemo
	Then user enters "<username>" and "<password>"
	And user clicks on Login Button
	Then User navigate to Product page
	Then User verifies whether product results are as per requirement
	Then Close the Browser
	
Examples:
	| username | password |
	| standard_user | secret_sauce |
	