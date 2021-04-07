const video = require('wdio-video-reporter');
const { ReportAggregator, HtmlReporter } = require('@rpii/wdio-html-reporter') ;
const log4js = require('@log4js-node/log4js-api');
const url  = require('./config/environment');
const { getWebDriverClient, BSConfig }  = require('./config/webdriverio');
const path = require('path');
const { hooks } = require('./config/hooks');

let ENV = process.env.ENV;
console.log(ENV)
if( !ENV || !["Prod", "Qa", "Dev" ,"Stage"].includes(ENV)) {
    console.log('By default we are running in the QA env')
    ENV = "Qa"
}

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './e2e/specs/features/login.feature',
    ],
    // define specific suites
    suites: {           
     
        regression : [
            './e2e/specs/features/login.feature',
        ]
             
    },
   
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    // 
    capabilities: [{
        maxInstances: 1,
        ...getWebDriverClient
    }
    ],

    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner, @wdio/lambda-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevels: {
         webdriver: 'info',
         '@wdio/applitools-service': 'info'
     },
    
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
     baseUrl: url[ENV],
    userName: process.env.AppUser ? process.env.AppUser: 'Bilalashraf.it@gmail.com',
    password: process.env.AppPassword ? process.env.AppPassword:'Welcome!@#',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000, 
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['selenium-standalone'],
    
    // Browserstack setting
   ...BSConfig,
    
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',


    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: ['dot', 
                'spec',
                'concise',
                [video, { 
                    saveAllVideos: false,     // If true, also saves videos for successful test cases
                     videoSlowdownMultiplier: 3,  // Higher to get slower videos, lower for faster videos [Value 1-100] 
                }],
                [HtmlReporter, {
                    debug: true,
                    outputDir: './Results/html-reports/',
                    filename: 'report.html',
                    reportTitle: 'Test Report Title',
                    
                    //to show the report in a browser when done
                    showInBrowser: true,
         
                    //to turn on screenshots after every test
                    useOnAfterCommandForScreenshot: false,
         
                    // to use the template override option, can point to your own file in the test project:
                    // templateFilename: path.resolve(__dirname, '../template/wdio-html-reporter-alt-template.hbs'),
                    
                    // to add custom template functions for your custom template:
                    // templateFuncs: {
                    //     addOne: (v) => {
                    //         return v+1;
                    //     },
                    // },
         
                    //to initialize the logger
                    LOG: log4js.getLogger("default")
                }
                ],
            
                ['mochawesome',{
                    outputDir: './Results'
                }],


                ['allure', {
                    outputDir: 'allure-results',
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: false,
                    disableMochaHooks : false,
                }],
              
                ['junit', {
                    outputDir: './Results',
                    outputFileFormat: function(options) { // optional
                        return `results-${options.cid}.${options.capabilities}.xml`
                    }
                }],            
            ],

    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 300000,
    },

    cucumberOpts: {
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> module used for processing required features
        requireModule: ['@babel/register'],
        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // <boolean> invoke formatters without executing steps
        // dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,
        // <string[]> ("extension:module") require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <string[]> (file/dir) require files before executing features
        require: [
            './e2e/steps/*.js',         
        ],
        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,
        // <boolean> fail if there are any undefined or pending steps
        strict: true,
        // <string> (expression) only execute the features or scenarios with
        // tags matching the expression, see
        // https://docs.cucumber.io/tag-expressions/
        tagExpression: 'not @Pending',
        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,
        // <number> timeout for step definitions
        timeout: 20000,
    },
    ...hooks,    
}
