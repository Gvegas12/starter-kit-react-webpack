import * as path from "path";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import type { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "main.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const { API_URL, API_URL_SEGMENT } = {
    API_URL: process.env.API_URL_DEV,
    API_URL_SEGMENT: process.env.API_URL_SEGMENT || "/api",
  };

  return buildWebpackConfig({
    mode: "development",
    paths,
    devServer: env.devServer,
    apiUrl: {
      target: API_URL || "",
      segment: API_URL_SEGMENT,
    },
    analyzer: env.analyzer,
  });
};
