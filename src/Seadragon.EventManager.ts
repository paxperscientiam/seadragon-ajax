//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943

import { Debug } from "./Seadragon.Debug"

export class EventManager {
    // Fields

    public listeners = {}; // dictionary of eventName --> array of handlers

    // Methods

    addListener(eventName, handler) {
        if (typeof(handler) != "function") {
            return;
        }

        if (!listeners[eventName]) {
            listeners[eventName] = [];
        }

        listeners[eventName].push(handler);
    };

    removeListener(eventName, handler) {
        var handlers = listeners[eventName];

        if (typeof(handler) != "function") {
            return;
        } else if (!handlers) {
            return;
        }

        for (var i = 0; i < handlers.length; i++) {
            if (handler == handlers[i]) {
                handlers.splice(i, 1);
                return;
            }
        }
    };

    clearListeners(eventName) {
        if (listeners[eventName]) {
            delete listeners[eventName];
        }
    };

    trigger(eventName) {
        var handlers = listeners[eventName];
        var args = [];

        if (!handlers) {
            return;
        }

        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        for (var i = 0; i < handlers.length; i++) {
            try {
                handlers[i].apply(window, args);
            } catch (e) {
                // handler threw an error, ignore, go on to next one
                Debug().error(e.name + " while executing " + eventName +
                        " handler: " + e.message, e);
            }
        }
    };

};