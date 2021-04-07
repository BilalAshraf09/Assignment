const chaiExpect = require('chai').expect;

class ValidationHelper {
    
    /**
     * Check browser has url
     * @param {*} url 
     */
    toHaveUrl(url){
        expect(browser).toHaveUrl(url)
    }

     /**
      * verify title 
      * @param {*} title 
      */
    toHaveTitle(title){
        expect(browser).toHaveTitle(title)
    }

     /**
      * check element is displayed
      * @param {} elem 
      */
    toBeDisplayed(elem){        
        expect(elem).toBeDisplayed()
    }

     /**
      * Check element is visible
      * @param {} elem 
      */
    toBeVisible(elem){
        expect(elem).toBeVisible()
    }

     /**
      * Check element exit
      * @param {} elem 
      */
    toExist(elem){
        expect(elem).toExist()
    }

    /**
     * Check Element is present
     * @param {*} elem 
     */ 
    toBePresent(elem){
        expect(elem).toBePresent();
    }

    /**
     * Check element attribute value
     * @param {*} element 
     * @param {*} attribure 
     * @param {*} value 
     */
    toHaveAttribute(element, attribure, value){
        expect(element).toHaveAttributeContaining(attribure, value)
    }
  
    /**
     * Check element has attribute value
     * @param {*} element 
     * @param {*} attribure 
     * @param {*} value 
     */
    toHaveAttributeContaining(element, attribure, value){
        expect(element).toHaveAttributeContaining(attribure, value)
    }

    /**
     * Check input box value
     * @param {*} element 
     * @param {*} value 
     */
    toHaveValue(element, value){
        expect(element).toHaveValue(value, { ignoreCase: true })
    }

    /**
     * Check input box contain value
     * @param {*} element 
     * @param {*} value 
     */
    toHaveValueContaining(element, value){
        expect(element).toHaveValue(value)
    }
  
    /**
     * Check element disabled
     * @param {*} element 
     */
    toBeDisabled(element){
        expect(element).toBeDisabled()
    }

    /**
     * Check element selected
     * @param {*} element 
     */
    toBeSelected(element){
        expect(element).toBeSelected()
    }

    /**
     * Verify element is checked
     * @param {*} element 
     */
    toBeChecked(element){
        expect(element).toBeChecked()
    }

    /**
     * Verify element has href link
     * @param {*} element 
     * @param {*} link 
     */
    toHaveHref(element, link){
        expect(element).toHaveHref(link)
    }

    /**
     * Verify element contains link
     * @param {*} element 
     * @param {*} link 
     */
    toHaveHrefContaining(element, link){
        expect(element).toHaveHrefContaining(link)
    }

    /**
     * Verify element contains Text
     * @param {*} element 
     * @param {*} text 
     */
    toHaveText(element, text){
        expect(element).toHaveText(text)
    }

    /**
     * Verify element contains text
     * @param {*} element 
     * @param {*} text 
     */
    toHaveTextContaining(element, text){
        expect(element).toHaveTextContaining(text)
    }
  

    //-------------------------- Chai Assertions
    /**
     * Verify two values are equals
     * @param {*} actual -- actual value
     * @param {*} expected  -- expected value
     */
    equals(actual, expected){
        chaiExpect(actual).to.equal(expected);
    }

    /**
     * Verify value are not equals
     * @param {*} actual  -- expected value
     * @param {*} expected  -- actual value
     */
    notEquals(actual, expected){
        chaiExpect(actual).to.not.equal(expected)
    }


    /**
     * check whether object is included value or not
     * Ex: expectIncluded('foobar', 'foo'), isIncluded([1, 2, 3], 2); 
     * isIncluded({a: 1, b: 2, c: 3}, {a: 1, b: 2});
     * @param {*} mainObj  -- actual 
     * @param {*} expectedValue --
     */
    expectIncluded(mainObj, expectedValue){
        chaiExpect(mainObj).to.include(expectedValue);
    }

    /**
     * check whether object is included value or not
     * Ex: expectNotIncluded('foobar', 'foo'), expectNotIncluded([1, 2, 3], 2); 
     * expectNotIncluded({a: 1, b: 2, c: 3}, {a: 1, b: 2});
     * @param {*} mainObj  -- actual object
     * @param {*} expectedValue -- expected value
     */
    expectNotIncluded(mainObj, expectedValue){
        chaiExpect(mainObj).to.not.include(expectedValue);
    }

    /**
     * Check if value is true
     * @param {*} booleanValue 
     */
    isTrue(booleanValue){
        chaiExpect(booleanValue).to.be.true;
    }

     /**
     * Check if value is false
     * @param {*} booleanValue 
     */
    isFalse(booleanValue){
        chaiExpect(booleanValue).to.be.false;
    }


    /**
     * check value is null
     * @param {*} booleanValue 
     */
    isNull(booleanValue){
        chaiExpect(booleanValue).to.be.null;
    }

    /**
     * Expected array length 
     * Ex: expectLengthOfArray([1, 2, 3], 3); 
     * expectLengthOfArray('foo', 3);
     * @param {*} arrayObj 
     * @param {*} length 
     */
    expectLengthOfArray(obj, length){
        chaiExpect(obj).to.have.lengthOf(length); 
    }

  }
  export default new ValidationHelper();