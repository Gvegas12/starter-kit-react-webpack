import webpack from "webpack";
import path from "path";
import {  BuildPaths } from "../build/types/config";
import { buildCSSLoader } from "../build/loaders/buildCSSLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve!.modules?.push(paths.src);
  config.resolve!.extensions?.push(".ts", ".tsx");
  config.resolve!.alias = {
    "@": paths.src,
  };

  config.module!.rules = config.module!.rules?.map((rule) => {
    if (
      typeof rule === "object" &&
      rule?.test &&
      /svg/.test(rule.test as string)
    ) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module!.rules?.push(buildCSSLoader({ isDev: true }), {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};
