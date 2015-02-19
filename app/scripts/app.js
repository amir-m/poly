(function (document) {
  'use strict';

  document.addEventListener('polymer-ready', function () {
    // Perform some behaviour
    console.log('Polymer is ready to rock!----');

    function connectWebViewJavascriptBridge(callback) {
	    if (window.WebViewJavascriptBridge) {
	    		callback(WebViewJavascriptBridge)
	    	} else {
	    		document.addEventListener('WebViewJavascriptBridgeReady', function() {
	    			callback(WebViewJavascriptBridge)
	    		}, false)
	    	}
	}

    connectWebViewJavascriptBridge(function(bridge) {

    	/* Init your app here */

    	bridge.init(function(message, responseCallback) {
    		alert('Received message: ' + message)   
    		if (responseCallback) {
    			responseCallback({"res": "Right back atcha"})
    		}
    	})
    	bridge.send({message: 'Hello from the javascript'})
    	bridge.send({message: 'Please respond to this'}, function responseCallback(responseData) {
    		alert("Javascript got its response", responseData)
    	})

    	bridge.registerHandler('testJavascriptHandler', function(data, responseCallback) {
			log('ObjC called testJavascriptHandler with', data)
			var responseData = { 'Javascript Says':'Right back atcha!' }
			log('JS responding with', responseData)
			responseCallback(responseData)
		})


    })


    setTimeout(function(){
    	if (bridge) {
	    	bridge.callHandler('testObjcCallback', {'foo': 'bar'}, function(response) {
				log('JS got response', response)
			});
    	}
    }, 3000)


  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
