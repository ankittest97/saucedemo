package stepDefinition;


import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class SauceDemoLogin {
	public WebDriver driver;   //this is done to make sure driver is accessable everywhere
	
	@Given("^User is on Application Home Page$")
	public void user_is_on_Application_Home_Page()  {

		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\main\\java\\resources\\chromedriver.exe");
	    driver = new ChromeDriver(); 
	    driver.get("https://www.saucedemo.com/");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		
	
	}

	@When("^Application Page Tittle is SauceDemo$")
	public void application_Page_Tittle_is_SauceDemo()  {
		    String actualTitleA = driver.getTitle();
		    String expectedTitleA = "Swag Labs";
		    Assert.assertEquals(expectedTitleA, actualTitleA);
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String password)  {
		  driver.findElement(By.name("user-name")).sendKeys(uname);
		  driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^User navigate to Product page$")
	public void user_navigate_to_Product_page()  {
		String actualTitleB = driver.getTitle();
	    String expectedTitleB = "Swag Labs";
	    Assert.assertEquals(expectedTitleB, actualTitleB);
	}

	@Then("^user clicks on Login Button$")
	public void user_clicks_on_Login_Button()  {
		WebElement loginBtn = driver.findElement(By.xpath("//*[@id='login-button']"));
	   // JavascriptExecutor js = (JavascriptExecutor) driver;
	   // js.executeScript("arguments[0].click();", loginBtn);
	    driver.findElement(By.xpath("//*[@id='login-button']")).click();
	}

	@Then("^User verifies whether product results are as per requirement$")
	public void user_verifies_whether_product_results_are_as_per_requirement()   {
	    WebElement pageheading = driver.findElement(By.xpath("//span[@class='title']"));
	    JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;
	    jsExecutor.executeScript("arguments[0].setAttribute('style','border:2px solid red; background:yellow')", pageheading);
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Then("^Close the Browser$")
	public void close_the_Browser()  {
	    driver.close();
	}



}
