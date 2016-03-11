/*eslint-env node*/
'use strict';
var SpecReporter = require('jasmine-spec-reporter');
var options = require('./test/test-options.node');
var E2EMockData = require('./test/e2e/mockData/E2EMockData');
var MockEnvironment = require('./test/e2e/MockEnvironment');


exports.config = {
    jasmineNodeOps: {
        displayStacktrace: 'all',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
        displayFailuresSummary: true, // display summary of all failures after execution
        displayPendingSummary: true,  // display summary of all pending specs after execution
        displaySuccessfulSpec: true,  // display each successful spec
        displayFailedSpec: true,      // display each failed spec
        displayPendingSpec: false,    // display each pending spec
        displaySpecDuration: false,   // display each spec duration
        displaySuiteNumber: false,    // display each suite number (hierarchical)
        colors: {
            success: 'green',
            failure: 'red',
            pending: 'yellow'
        },
        prefixes: {
            success: '✓ ',
            failure: '✗ ',
            pending: '* '
        },
        customProcessors: []
    },
    directConnect: true,
    specs: ['./build/e2e-test.js'],
    allScriptsTimeout: 20000, // I think the default is 11s but bumping it up since the backend requests during the initial run on Jenkins seems to be a bit slow
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({displayStackTrace: true}));

        var fs = require('fs');
        MockEnvironment.mockE2EBackend(fs, browser, E2EMockData);

        browser.driver.get(options.URL);
        browser.driver.findElement(by.css('input[name="username"]')).sendKeys(options.username);
        browser.driver.findElement(by.css('input[name="password"]')).sendKeys(options.password);
        browser.driver.findElement(by.id('login-submit-button')).click();

        // Login takes some time, so wait until it's done.
        // For the test app's login, we know it's done when it redirects to
        // dashboard.
        return browser.driver.wait(function () {
            return browser.driver.getCurrentUrl().then(function (url) {
                return /#\/$/.test(url);
            });
        }, 10000);
    }
};
