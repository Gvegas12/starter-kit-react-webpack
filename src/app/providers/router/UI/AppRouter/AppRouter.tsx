import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { privateRoutesConfig, publicRoutesConfig } from "../../config";
import { privateRoutePaths } from "@/shared/config/routes";
import MainLayout from "@/processes/MainLayout";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} path={privateRoutePaths.home}>
        {privateRoutesConfig.map(({ path, index, element }, i) => (
          <Route
            key={i}
            index={index}
            path={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
            }
          />
        ))}
        {publicRoutesConfig.map(({ path, element }, i) => (
          <Route
            key={i}
            path={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
