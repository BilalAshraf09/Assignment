import Page from './page'

import element_helper from '../framework/element_helper';
import textbox_helper from '../framework/textbox_helper';

class HomePage extends Page  {

   get acceptCookies() { return $('[id="onetrust-accept-btn-handler"]') }
    get loginButton() { return $('//span[text()="Log in"]') }
    get searchInput() { return $('[data-testid="search-input"]') }
    get searchButtoIcon() { return $('[data-testid="header-search-icon"]') }
    
    searchProduct(product) {
      element_helper.clickOn(this.acceptCookies)
      textbox_helper.clearAndinputText( product, this.searchInput)
      browser.keys('Enter');
      //element_helper.clickOn(this.searchButtoIcon)    
    }    
}
export default new HomePage();