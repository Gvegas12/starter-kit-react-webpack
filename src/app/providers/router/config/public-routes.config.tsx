import { RouteProps } from "react-router-dom";
import { publicRoutePaths } from "@/shared/config/routes";
import AuthPage from "@/pages/AuthPage";


export const publicRoutesConfig: RouteProps[] = [
  {
    path: publicRoutePaths.auth,
    element: <AuthPage />,
  },
];
