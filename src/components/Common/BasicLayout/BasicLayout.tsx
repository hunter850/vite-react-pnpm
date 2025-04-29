import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Common/Header";
import Spinner from "@/components/Common/Spinner";

function BasicLayout(): React.JSX.Element {
    return (
        <>
            <Header />
            <Suspense fallback={<Spinner />}>
                <Outlet />
            </Suspense>
        </>
    );
}

export default BasicLayout;
