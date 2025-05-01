import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import BasicLayout from "@/components/Common/BasicLayout";
import ErrorBoundary from "@/components/Common/ErrorBoundary";
import ErrorBoundaryFallback from "@/components/Common/ErrorBoundaryFallback";

const Home = lazy(() => import("@/components/Home"));
const Greeting = lazy(() => import("@/components/Greeting"));

function App() {
    return (
        <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
            <Routes>
                <Route element={<BasicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/greeting" element={<Greeting />} />
                    <Route path="/greeting/:geetingWord" element={<Greeting />} />
                </Route>
            </Routes>
        </ErrorBoundary>
    );
}

export default App;
