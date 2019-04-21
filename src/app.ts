//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943

// this line overwrites any previous window.Seadragon value in IE before this file
// executes! since this is a global variable, IE does a forward-reference check
// and deletes any global variables which are declared through var. so for now,
// every piece of code that references Seadragon will just have to implicitly
// refer to window.Seadragon and not this global variable Seadragon.
// UPDATE: re-adding this since we're now wrapping all the code in a function.
interface Seadragon {
    Browser

}


let Seadragon: Seadragon

import { getConfig } from "./Seadragon.Config"
Seadragon.Config = getConfig()

import {
    getMessage,
    getString,
    setString,
} from "./Seadragon.Strings"

import { Debug } from "./Seadragon.Debug"

import { Profiler } from "./Seadragon.Profiler"

import { Point } from "./Seadragon.Point"

import { Rect } from "./Seadragon.Rect"

import { Spring } from "./Seadragon.Spring"

import { Utils } from "./Seadragon.Utils"


"Seadragon.Utils.js"
    "Seadragon.MouseTracker.js"
    "Seadragon.EventManager.js"
    "Seadragon.ImageLoader.js"
    "Seadragon.Buttons.js"
    "Seadragon.TileSource.js"
    "Seadragon.DisplayRect.js"
    "Seadragon.DeepZoom.js"
    "Seadragon.Viewport.js"
    "Seadragon.Drawer.js"
    "Seadragon.Viewer.js"



window.Seadragon = Seadragon
// Seadragon.Debug is a static class, so make it singleton instance
// SeadragonDebug = Seadragon.Debug = new SeadragonDebug();
// var SeadragonPoint = Seadragon.Point;
// var SeadragonRect = Seadragon.Rect;
// seadragonpsring seadrong.spring
