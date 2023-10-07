import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./types/config";

export function buildDevServer({
  apiUrl,
  devServer,
}: BuildOptions): DevServerConfiguration {
  return {
    port: devServer?.port,
    open: true,
    historyApiFallback: true,
    hot: true,
    proxy: {
      [`${apiUrl.segment}/**`]: {
        target: apiUrl.target,
        changeOrigin: true,
      },
    },
  };
}
