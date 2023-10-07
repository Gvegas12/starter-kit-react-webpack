import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev,
  devServer,
  apiUrl,
  analyzer,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const API_URL = isDev
    ? `http://localhost:${devServer?.port}${apiUrl.segment}/`
    : `${apiUrl.target}${apiUrl.segment}/`;

  const plugins = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),

    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
      __IS_DEV__: JSON.stringify(isDev),
      __API_URL__: JSON.stringify(API_URL),
    }),
  ];

  const pluginsForDevMode: webpack.WebpackPluginInstance[] = [
    new webpack.HotModuleReplacementPlugin(),
  ];

  if (analyzer) {
    pluginsForDevMode.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: true,
      })
    );
  }

  if (isDev) {
    plugins.push(...pluginsForDevMode);
  }

  return plugins;
}
