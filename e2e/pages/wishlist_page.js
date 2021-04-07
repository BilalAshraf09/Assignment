import Page from './page'
import TextboxHelper from '../framework/textbox_helper';
import ElementHelper from '../framework/element_helper';
import element_helper from '../framework/element_helper';
import validationHelper from '../framework/validation-helper';

class LoginPage extends Page  {

    get deleteWishListItem() { return $('[class="blockListProduct__delete qaBlockListProduct__delete"]') }
    get noProductText() { return $('[class="wishlistNoProducts__text"]') }
  
    clickOnDeleteWishList(){
        element_helper.clickOn(this.deleteWishListItem);
    }

    verifyProductdeleted(){
        validationHelper.toExist(this.noProductText);
    }

}
export default new LoginPage();