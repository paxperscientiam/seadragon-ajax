"use strict";
exports.__esModule = true;
function getConfig() {
    return {
        debugMode: false,
        animationTime: 1.5,
        blendTime: 0.5,
        alwaysBlend: false,
        autoHideControls: true,
        constrainDuringPan: true,
        immediateRender: false,
        logarithmicZoom: true,
        wrapHorizontal: false,
        wrapVertical: false,
        wrapOverlays: false,
        transformOverlays: false,
        // for backwards compatibility, keeping this around and defaulting to null.
        // if it ever has a non-null value, that means it was explicitly set.
        minZoomDimension: null,
        minZoomImageRatio: 0.8,
        maxZoomPixelRatio: 2,
        visibilityRatio: 0.8,
        springStiffness: 5.0,
        imageLoaderLimit: 2,
        clickTimeThreshold: 200,
        clickDistThreshold: 5,
        zoomPerClick: 2.0,
        zoomPerScroll: Math.pow(2, 1 / 3),
        zoomPerSecond: 2.0,
        proxyUrl: null,
        imagePath: "img/"
    };
}
exports.getConfig = getConfig;
