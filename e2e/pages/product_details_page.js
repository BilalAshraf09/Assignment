import Page from './page'

import element_helper from '../framework/element_helper';
import textbox_helper from '../framework/textbox_helper';
import validationHelper from '../framework/validation-helper';

class ProductDetailsPage extends Page  {

    get productList() { return $('[data-testid="plp-products-grid"] [data-testid="generic-product"]') }
    get firstProductWishListicon() { return $('[data-testid="wishlist-icon"]') }
    get firstProductTitle() { return $('[data-testid="product-title"] font font') }
    get wishLitsCount() { return $('[data-testid="wishlist-counter"]') }
    get iconWishList() { return $('[class="icon-wishlist"]') }
  
    clickOnWishListIcon(){
      element_helper.clickOn(this.firstProductWishListicon);
    }

    getFirstProductTitle(){
      return element_helper.getText(this.firstProductTitle)
    }
    
    verifyWishListCOunt(count) {
      validationHelper.toHaveText(this.wishLitsCount, count)
    }

    clickonWishList(){
      element_helper.clickOn(this.iconWishList)
    }
}
export default new ProductDetailsPage();