require("babel-core/register")({presets: ["es2015"]});

var SpecReporter = require('jasmine-spec-reporter');

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
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['ang03-spec.js'],

    allScriptsTimeout: 1000,
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({displayStackTrace: true}));
    }
};