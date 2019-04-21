"use strict";
//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943
exports.__esModule = true;
var Seadragon_Config_1 = require("./Seadragon.Config");
//import { getString } from "./
var Debug = /** @class */ (function () {
    function Debug() {
    }
    Debug.prototype.log = function (msg, important) {
        var console = window.console || {};
        var debug = Seadragon_Config_1.getConfig().debugMode;
        if (debug && console.log) {
            console.log(msg);
        }
        else if (debug && important) {
            alert(msg);
        }
    };
    ;
    Debug.prototype.error = function (msg, e) {
        var console = window.console || {};
        var debug = Seadragon_Config_1.getConfig().debugMode;
        if (debug && console.error) {
            console.error(msg);
        }
        else if (debug) {
            alert(msg);
        }
        if (debug) {
            // since we're debugging, fail fast by crashing
            throw e || new Error(msg);
        }
    };
    ;
    Debug.prototype.fail = function (msg) {
        alert(SeadragonStrings.getString("Errors.Failure"));
        throw new Error(msg);
    };
    ;
    return Debug;
}());
exports.Debug = Debug;
;
