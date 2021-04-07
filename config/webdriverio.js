require("dotenv").config();
const defaultConfig = require("./global");
const env = process.env.ENV  !== undefined ? process.env.ENV  : "QA";

const commandUtils = {
  browser: defaultConfig.browser,
  platform: defaultConfig.platform,
  browserVersion: defaultConfig.version,
  runOnBS: defaultConfig.runOnBS,
  chromeHeadless: defaultConfig.chromeHeadless
};

const setBrowserVersion = () => {
  return {
    version: defaultConfig[commandUtils.platform][commandUtils.browser].browserVersion || commandUtils.browserVersion
  };
};

const setOS = () => {
  return {
    os: defaultConfig[commandUtils.platform][commandUtils.browser].os || commandUtils.platform
  };
};

const setOSVersion = () => {
  return {
    os_version: defaultConfig[commandUtils.platform][commandUtils.browser].os_version || commandUtils.platformVersion
  };
};

const setBrowserName = () => {
  return {
    browserName: defaultConfig[commandUtils.platform][commandUtils.browser].browserName
  };
};

const setChromeHeadless = () => {
  if (commandUtils.chromeHeadless) {
    return { 
      'goog:chromeOptions': 
      { 
         args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
      }
    }  
  }
}

let BSConfig;

if (commandUtils.runOnBS) {
  BSConfig = {
    // Need to add BrowserStack Credentials
    user: "**************",
    key:  "**************",
    services: [
        ['browserstack', {
      //     browserstackLocal: false
        }]
    ],
  }
}

const setDesiredCapabilities = () => { 
  if (commandUtils.runOnBS) {
    console.log("Run on BS" + commandUtils.runOnBS)
    return {      
      ...setBrowserName(),
      ...setOS(),
      ...setOSVersion(),
      ...setBrowserVersion(),
      name: env+' Environment',
      build: formatDate() + " " +env + ' Environment',
      project: 'Doodle' 
    };
  } else {
    return {
      ...setBrowserName(),
      ...setChromeHeadless(),
    };
  }
};

let defaultOptions;

defaultOptions = {
      ...setDesiredCapabilities(),     
  };

const getWebDriverClient = {
  ...defaultOptions,
};

function formatDate() {
      var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;
  return [year, month, day].join('-');
}

module.exports = {
  getWebDriverClient,
  BSConfig
};
