import WaitHelper from "./wait_helper";

class ElementHelper {

    /**
     * Click on elemenet
     * @param {*} element 
     */
    clickOn(element){
        WaitHelper.waitForClickable(element)
        element.click();
    }

      /**
     * Click on elemenet
     * @param {*} element 
     */
    jsClick(element){
        browser.execute("arguments[0].click();", element);
    }

    /**
     * Double click on element
     * @param {*} element 
     */
    doubleClick(element){
        WaitHelper.waitForClickable(element)
        element.doubleClick();
    }

    /**
     * Drag and drop element
     * @param {*} elementSource 
     * @param {*} elementTarget 
     */
    dragAndDrop(elementSource, elementTarget){
        WaitHelper.waitForElementDisplay(elementSource)
        WaitHelper.waitForElementDisplay(elementTarget)
        elementSource.dragAndDrop(elementTarget)
    }
    
    /**
     * Get Attribute of element
     * @param {*} element 
     * @param {*} attribute 
     */
    getAttribute(element, attribute){
        WaitHelper.waitForElementDisplay(element)
        return element.getAttribute(attribute);
    }

    /**
     * Get CSS value of element
     * @param {*} element 
     * @param {*} cssname 
     */
    getCSSValue(element, cssname){
        WaitHelper.waitForElementDisplay(element)
        return element.getCSSProperty(cssname);
    }

    /**
     * Get Text of element
     * @param {*} element 
     */
    getText(element){
        WaitHelper.waitForElementDisplay(element)
        return element.getText();
    }

    /**
     * Is clickable element
     * @param {*} element 
     */
    isClickable(element){
        WaitHelper.waitForElementDisplay(element)
        return element.isClickable();
    }

    /**
     * Is element display
     * @param {*} element 
     */
    isDisplay(element){      
        return element.isDisplayed();
    }
    
    /**
     * Is enabled element
     * @param {*} element 
     */
    isEnable(element){      
        return element.isEnabled();
    }

    /**
     * Is selected element
     * @param {*} element 
     */
    isSelected(element){   
        WaitHelper.waitForElementDisplay(element)   
        return element.isSelected();
    }

    /**
     * Scroll to element 
     * @param {*} element 
     */
    scrollToElement(element){   
        WaitHelper.waitForElementDisplay(element)   
        return element.scrollIntoView();
    }

    /**
     * Move mouse pointer over or nearby element
     * @param {*} element 
     * @param {*} xOffset 
     * @param {*} yOffset 
     */
    hover(element, xOffset, yOffset){
        xOffset = !xOffset ? 0 : xOffset;
        yOffset = !yOffset ? 0 : yOffset;
        WaitHelper.waitForElementEnabled(element);
        element.moveTo({xOffset, yOffset});
    }

    /**
     * Click and drag on the screen from first offsets to second offsets
     * @param {*} element Element being interacted with
     * @param {[number,number]} offsetStart [x,y] offset from top left of element to start dragging
     * @param {[number,number]} offsetEnd [x,y] offset from top left of element to stop dragging
     * @param {number} button Which mouse button to hold Left(default)=0, Middle=1, Right=2
     */
    clickAndDrag(element, offsetStart, offsetEnd, button) {
        button = !button ? 0 : button;
        this.hover(element, offsetStart[0], offsetStart[1]);
        browser.buttonDown(button);
        this.hover(element, offsetEnd[0], offsetEnd[1]);
        browser.buttonUp(button);
    }

    /**
     * Sets the value of an element such as an input
     * @param {*} element 
     * @param {*} value 
     */
    setValue(element, value) {
        WaitHelper.waitForElementEnabled(element);
        element.setValue(value)
    }   
}
export default new ElementHelper();