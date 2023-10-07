import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "../providers";
import { ErrorBoundary } from "../providers/error_boundary";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
