const { Then, Given, When } = require('cucumber');
import validationHelper from '../framework/validation-helper';
import  HomePage from '../pages/home_page';
import LoginPage from '../pages/login_page'
import product_details_page from '../pages/product_details_page';
import wishlist_page from '../pages/wishlist_page';

  let productTitle;

  Given('I am on the WestwingNow home page', function () {
    browser.url("/")
  });

  When('I search for "möbel"', function () { 
      HomePage.searchProduct("möbel");
  });

  Then('I should see product listing page with a list of products', function () {
      validationHelper.toExist(product_details_page.productList);
  });
  
  
  When('I click on wishlist icon of the first found product', function () { 
      product_details_page.clickOnWishListIcon();
  });
  
  Then('I should see the login and registration overlay', function () {
     LoginPage.verifyLoginPage();
  });

  When('I switch to login form of the overlay', function () { 
    // No need this steps
    //LoginPage.verifyLoginPage();
  });

  When('I log in with existing credentials', function () { 
      LoginPage.loginInApp(browser.config.userName, browser.config.password);
  });
  
  Then('the product should be added to the wishlist', function () {
     product_details_page.verifyWishListCOunt("1");
  });

  Then('I go to the wishlist page', function () { 
     product_details_page.clickonWishList();
  });

  Then('I delete the product from my wishlist', function () { 
      wishlist_page.clickOnDeleteWishList();
      wishlist_page.verifyProductdeleted()
  });