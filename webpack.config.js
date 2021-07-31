import { join, resolve as _resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const entry = join(__dirname, "src", "index.js");
export const output = {
    path: join(__dirname, "build"),
    filename: "index.bundle.js",
};
export const mode = process.env.NODE_ENV || "development";
export const resolve = {
    modules: [_resolve(__dirname, "src"), "node_modules"],
};
export const devServer = { contentBase: join(__dirname, "build") };
export const module = {
    rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        {
            test: /\.(css|scss|sass)$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: ["file-loader"],
        },
    ],
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: join(__dirname, "src", "index.html"),
    }),
];