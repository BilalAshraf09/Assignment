import Page from './page'
import TextboxHelper from '../framework/textbox_helper';
import ElementHelper from '../framework/element_helper';
import validationHelper from '../framework/validation-helper';

class LoginPage extends Page  {

    get loginSwitchButton() { return $('[data-testid="login_reg_switch_btn"]') }
    get loginInputId() { return $('[name="email"]') }
    get passwordInput() { return $('[name="password"]') }
    get loginButton() { return $('[data-testid="login_reg_submit_btn"]') }

    /**
     * Login into application
     * @param {user name } userName 
     * @param {password } password 
     */
    loginInApp(userName, password) {
        ElementHelper.clickOn(this.loginSwitchButton)
        TextboxHelper.inputText(userName, this.loginInputId);
        TextboxHelper.inputText(password, this.passwordInput);
        ElementHelper.clickOn(this.loginButton)
    }
    
    verifyLoginPage(){
        validationHelper.toExist(this.loginInputId)
        validationHelper.toExist(this.passwordInput)
        validationHelper.toExist(this.loginButton)
    }
}
export default new LoginPage();