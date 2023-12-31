import { RuleSetRule } from "webpack";
import { BuildOptions } from "../types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCSSLoader({
  isDev,
}: Pick<BuildOptions, "isDev">): RuleSetRule {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string): boolean =>
              Boolean(resPath.includes(".module.")),
            localIdentName: "[name]_[local]--[hash:base64:5]",
          },
        },
      },
      "sass-loader",
    ],
  };
}
