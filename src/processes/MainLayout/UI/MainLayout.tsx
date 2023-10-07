import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default MainLayout;
