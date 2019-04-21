//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943

export function getMessage() {
    return {
        Errors: {
            Failure: "Sorry, but Seadragon Ajax can't run on your browser!\n" +
                "Please try using IE 8 or Firefox 3.\n",
            Dzc: "Sorry, we don't support Deep Zoom Collections!",
            Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
            Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
            Empty: "You asked us to open nothing, so we did just that.",
            ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.",
            Security: "It looks like a security restriction stopped us from " +
                "loading this Deep Zoom Image.",
            Status: "This space unintentionally left blank ({0} {1}).",
            Unknown: "Whoops, something inexplicably went wrong. Sorry!"
        },

        Messages: {
            Loading: "Loading..."
        },

        Tooltips: {
            FullPage: "Toggle full page",
            Home: "Go home",
            ZoomIn: "Zoom in (you can also use your mouse's scroll wheel)",
            ZoomOut: "Zoom out (you can also use your mouse's scroll wheel)"
        }
    }
}

export function getString(prop: string) {
    var props = prop.split('.');
    let message = getMessage();

    // get property, which may contain dots, meaning subproperty
    for (var i = 0; i < props.length; i++) {
        message = message[props[i]] || {};    // in case not a subproperty
    }

    // in case the string didn't exist
    if (typeof(message) != "string") {
        message = ""
    }

    // regular expression and lambda technique from:
    // http://frogsbrain.wordpress.com/2007/04/28/javascript-stringformat-method/#comment-236
    var args = arguments;
    return message.replace(/\{\d+\}/g, (capture: string) => {
        var i = parseInt(capture.match(/\d+/)) + 1;
        return i < args.length ? args[i] : "";
    });
};

export function setString(prop: string, value: string|number) {
    var props = prop.split('.');
    var container = getMessage()

    // get property's container, up to but not after last dot
    for (var i = 0; i < props.length - 1; i++) {
        if (!container[props[i]]) {
            container[props[i]] = {};
        }
        container = container[props[i]];
    }

    container[props[i]] = value;
};
