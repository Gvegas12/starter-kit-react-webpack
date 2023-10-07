import type { ResolveOptions } from "webpack";
import {  BuildOptions } from "./types/config";

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js", ".png", ".jpg"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": paths.src,
    },
  };
}
