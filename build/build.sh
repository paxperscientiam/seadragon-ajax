#!/usr/bin/env bash

declare -a files=(
    "_intro.txt"
    "Seadragon.Core.js"
    "Seadragon.Config.js"
    "Seadragon.Strings.js"
    "Seadragon.Debug.js"
    "Seadragon.Profiler.js"
    "Seadragon.Point.js"
    "Seadragon.Rect.js"
    "Seadragon.Spring.js"
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
    "_outro.txt"
)

IFS=' '

files=( "${files[@]/#/src\/}" )

test ! -e dist && mkdir dist

cat "${files[@]}" | uglifyjs --compress --mangle -- >| "dist/seadragon.min.js"
