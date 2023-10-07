import type { RuleSetRule } from "webpack";
import { buildCSSLoader } from "./loaders/buildCSSLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders({
  isDev,
}: Pick<BuildOptions, "isDev">): Array<RuleSetRule> {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = buildCSSLoader({ isDev });

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fontsLoader: RuleSetRule = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      publicPath: "/assets/fonts/",
      outputPath: "assets/fonts/",
    },
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    type: "asset/resource",
    generator: {
      publicPath: "/assets/images/",
      outputPath: "assets/images/",
    },
  };

  return [fileLoader, fontsLoader, svgLoader, typescriptLoader, cssLoader];
}
