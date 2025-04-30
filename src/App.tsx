import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LandingPage = lazy(() => import("@/pages/LandingPage"));
import Error404 from "@/pages/Error404";
import Preloader from "@/components/PreLoader";
import PreloaderAnimate from "@/components/PreloaderAnimate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Preloader />}>
                <LandingPage />
                <PreloaderAnimate />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<Preloader />}>
                <Error404 />
                <PreloaderAnimate />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
