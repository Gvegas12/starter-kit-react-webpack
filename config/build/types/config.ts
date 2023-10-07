export type BuildMode = "production" | "development" | "stage";
export type WebpackBuildMode = "production" | "development";

export interface BuildApiUrlPaths {
  API_URL: string;
  API_ROOT_PATH: string;
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildDevServer {
  port: number;
}

export interface BuildApiUrl {
  target: string;
  segment: string;
}

export interface BuildEnv {
  mode: BuildMode;
  devServer?: BuildDevServer;
  analyzer?: boolean;
  port?: number;
}

export interface BuildOptions extends Omit<BuildEnv, "mode"> {
  mode: WebpackBuildMode;
  paths: BuildPaths;
  apiUrl: BuildApiUrl;
  isDev: boolean
}
