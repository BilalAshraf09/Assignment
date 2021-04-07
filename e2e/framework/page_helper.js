class PageHelper {

    /**
     * switch windiw by title or url
     * @param {*} urlOrTitle 
     */
    switchWindowByTitleOrUrl(urlOrTitle){
        browser.switchWindow(urlOrTitle)
    }

    /**
     * Open new window with url
     * @param {*} url 
     */
    openNewWindow(url){
        browser.newWindow(urlOrTitle)
    }

    /**
     * Navigate url
     * @param {*} url 
     */
    openUrl(url){
        browser.url(url);
    }

    /**
     * Get current url
     */
    getCurrentUrl(){
        return browser.getUrl();
    }

    /**
     * Set window size
     * @param {*} width 
     * @param {*} height 
     */
    setWindow(width, height){
        browser.setWindowSize(width, height)
    }

    refreshPage(){
        browser.refresh();
    }
}
export default new PageHelper();