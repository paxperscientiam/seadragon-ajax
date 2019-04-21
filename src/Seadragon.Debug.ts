//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943

export interface Console {
    log(): void
    error(): void
}

export interface Debug {
    log(msg: string, important: boolean): void
    error(msg: string, e): void
    fail(msg: string): void
}


import { getConfig } from "./Seadragon.Config"
//import { getString } from "./


export class Debug {
    log(msg: string, important: boolean) {
        var console = window.console || {};
        var debug = getConfig().debugMode;

        if (debug && console.log) {
            console.log(msg);
        } else if (debug && important) {
            alert(msg);
        }
    };

    error(msg: string, e) {
        var console = window.console || {};
        var debug = getConfig().debugMode;

        if (debug && console.error) {
            console.error(msg);
        } else if (debug) {
            alert(msg);
        }

        if (debug) {
            // since we're debugging, fail fast by crashing
            throw e || new Error(msg);
        }
    };

    fail(msg: string) {
        alert(SeadragonStrings.getString("Errors.Failure"));
        throw new Error(msg);
    };

};
