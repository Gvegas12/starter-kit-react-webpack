import { RouteProps } from "react-router-dom";

import { privateRoutePaths } from "@/shared/config/routes";

import MainPage from "@/pages/MainPage";
import AboutPage from "@/pages/AboutPage";


export const privateRoutesConfig: RouteProps[] = [
  {
    index: true,
    element: <MainPage />,
  },
  {
    path: privateRoutePaths.about,
    element: <AboutPage />,
  },
];
