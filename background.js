var main_window = null;

(function() {

    chrome.app.runtime.onLaunched.addListener(function(intent) {

        if (intent) { console.log('launched with intent',intent) }

        //var page = 'examples/blank.html'
        //var page = 'http://127.0.0.1:4224';
        main_window = chrome.app.window.create('index.html',
                                               { defaultWidth: 1000,
                                                 id:'mainpage',
                                                 minHeight: 700,
                                                 defaultHeight: 700 }
                                              );
    });

    chrome.runtime.onSuspend.addListener(function() { 
        // Do some simple clean-up tasks.
        console.log('suspend');
        
    });


}).call(this);
