import wait_helper from "./wait_helper";

class TextboxHelper {

    /**
     * Input text into textbox or textArea
     * @param {*} text 
     * @param {*} element 
     */
    inputText(text, element) {
        wait_helper.waitForElementDisplay(element);
        element.setValue(text);       
    }

    /**
     * Clear text of textbox or textArea
     * @param {*} element 
     */
    clearText(element) {
        wait_helper.waitForElementDisplay(element);
        element.clearValue();       
    }

    /**
     * Clear and Input text into textbox or textArea
     * @param {*} text 
     * @param {*} element 
     */
    clearAndinputText(text, element) {
        wait_helper.waitForElementDisplay(element);
        element.clearValue();   
        element.setValue(text);       
    }

    /**
     * Get Text of text box and text area
     * @param {*} element 
     */
    getInputBoxValue(element) {  
        wait_helper.waitForElementDisplay(element);     
        return element.getValue(); 
             
    }
    
}
export default new TextboxHelper();