let browserstackOption = process.env.BrowserStack;
browserstackOption = browserstackOption !== undefined && browserstackOption.toLowerCase() == "true" ? true : false;
let chromeHeadLess = process.env.ChromeHeadLess  !== undefined ? process.env.ChromeHeadLess  : false;

module.exports = { 
  platform: process.env.PLATFORM || 'windows',
  platformVersion: process.env.PLATFORMVersion || '8.1',
  browser: process.env.BROWSERNAME || 'chrome',
  runOnBS: browserstackOption,
  chromeHeadless: chromeHeadLess,
  version: "83.0",
  mac: {
    chrome: {
      browserName: "chrome",
      os: "macOS 10.14",
      browser_version: "83.0"
    },
    firefox: {
      browserName: "firefox",
      os: "macOS 10.13",
      browser_version: "83.0"
    },
    safari: {
      browserName: "safari",
      os: "macOS 10.14",
      browser_version: "12.0"
    }
  },
  windows: {
    chrome: {
      browserName: "chrome",
      os: "Windows",
      os_version: "8.1",
      browser_version: "83.0"
    },
    firefox: {
      browserName: "firefox",
      os: "Windows 10",
      browser_version: "88.0"
    },
    ie: {
      browserName: "internet explorer",
      os: "Windows 10",
      browser_version: "11.285"
    },
    edge: {
      browserName: "MicrosoftEdge",
      os: "Windows 10",
      browser_version: "16.16299"
    }
  }  
};
