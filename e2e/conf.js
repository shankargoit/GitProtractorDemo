exports.config={
    drirectConnect : true,
    /*
    If true,protractr will connect directly to the browser drivers,
    Only firefox and chrome are supported for direct connect.
    default:false
    */
    framework : 'jasmine',
    allScriptTimeout:60000,
    multiCapabilities :[
        {browserName:'chrome'},
       // {browserName:'firefox'}
    ],
    jasmineNodeOpts:{
        showColors:true, //in the terminal it will show the colors
        defaultTimeoutInterval:60000,
    },

    onPrepare :function () {
        browser.driver.manage().window().maximize();
    },

    suites:{

        smoke:['tests/smoke/*.spec.js'],

        regression:['tests/regression/*.spec.js']
    }


}