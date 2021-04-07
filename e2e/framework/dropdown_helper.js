import WaitHelper from './wait_helper'

class DropDownHelper {

    /**
     * Select dropdown value by value
     * @param {*} element 
     * @param {*} value 
     */
    selectByValue(element, value){   
        WaitHelper.waitForElementDisplay(element)   
        return element.selectByAttribute('value', value);
    }

    /**
     * Select dropdown value by Text
     * @param {*} element 
     * @param {*} text 
     */
    selectByText(element, text){   
        WaitHelper.waitForElementDisplay(element)   
        return element.selectByVisibleText(text);
    }

    /**
     * Select dropdown value by index
     * @param {*} element 
     * @param {*} index 
     */
    selectByIndex(element, index){   
        WaitHelper.waitForElementDisplay(element)   
        return element.selectByIndex(index);
    }

}
export default new DropDownHelper();