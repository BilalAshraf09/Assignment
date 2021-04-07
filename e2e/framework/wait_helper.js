class WaitHelper {

  get timeOut() { return 30000; }

  /**
   * Wait for element not clickable
   * @param {*} element 
   */
  waitForClickable(element){
    element.waitForClickable({ 
         timeout: this.timeOut,
          interval: 500 
        });
  }

  /**
   * Wait for element not clickable
   * @param {*} element 
   */
  waitForNotClickable(element){
    element.waitForClickable({ 
         timeout:  this.timeOut,
          reverse: true, 
          interval: 500 
        });
  }
    
  /**
   * Wait for element display
   * @param {*} element 
   */
  waitForElementDisplay(element){
    element.waitForDisplayed({  
        timeout:  this.timeOut,
         interval: 500 });
  }
    
  /**
   * Wait for element not display
   * @param {} element 
   */
  waitForElementNotDisplay(element){
    element.waitForDisplayed({  
        timeout:  this.timeOut,
        reverse: true,      
         interval: 500 });
  }

  /**
   * Wait for element enabled
   * @param {*} element 
   */
  waitForElementEnabled(element){
    element.waitForEnabled({  
        timeout:  this.timeOut,
        interval: 500 });
  }

  /**
   * Wait for element disabled
   * @param {*} element 
   */
  waitForElementDisabled(element){
    element.waitForEnabled({  
        timeout:  this.timeOut,
        reverse: true,       
         interval: 500 });
  }

  /**
   * Waits for the element to exist
   * @param {*} element 
   */
  waitForElementExist(element) {
    element.waitForExist({  
      timeout:  this.timeOut,      
       interval: 500 });
  }

  /**
   * Waits for the element to not exist
   * @param {*} element
   */
  waitForElementNotExist(element) {
    element.waitForExist({  
      timeout:  this.timeOut,
      reverse: true,      
       interval: 500 });
  }
}
export default new WaitHelper();