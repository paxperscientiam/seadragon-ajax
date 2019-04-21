"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fuse_box_1 = require("fuse-box");
fuse_box_1.Sparky.context(() => {
    return fuse_box_1.FuseBox.init({
        debug: true,
        globals: { default: "*" },
        homeDir: "src",
        output: "dist/$name.js",
        target: "browser@es6",
        plugins: [
            fuse_box_1.WebIndexPlugin({
                appendBundles: true,
                template: "src/index.html",
            }),
        ],
    });
});
fuse_box_1.Sparky.task("default", context => {
    const fuse = context;
    fuse.dev();
    fuse
        .bundle("seadragon")
        .instructions(" > app.ts")
        .hmr({ reload: true })
        .watch();
    fuse.run();
});
fuse_box_1.Sparky.task("clean", async (context) => {
    await fuse_box_1.Sparky.src("./dist")
        .clean("dist/")
        .exec();
});
//# sourceMappingURL=fuse.js.map