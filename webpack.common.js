const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
});

const copyWebpackPlugin = new CopyWebpackPlugin({
    patterns: [{ from: "public/assets", to: "assets" }],
});

module.exports = {
    context: path.resolve(__dirname),
    plugins: [copyWebpackPlugin, htmlPlugin],
    entry: path.resolve("src", "main.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
};
