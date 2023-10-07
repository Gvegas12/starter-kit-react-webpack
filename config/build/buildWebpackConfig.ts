import type { Configuration } from "webpack";
import type { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: Omit<BuildOptions, "isDev">
): Configuration {
  const { mode, paths } = options;

  const isDev = mode === "development";

  const buildOptions = {
    ...options,
    isDev,
  };

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
      publicPath: "/",
    },
    plugins: buildPlugins(buildOptions),
    module: {
      rules: buildLoaders(buildOptions),
    },
    resolve: buildResolvers(buildOptions),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(buildOptions) : undefined,
  };
}
