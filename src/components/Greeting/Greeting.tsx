import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Greeting(): React.JSX.Element {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");

    useEffect(() => {
        console.log("HELLO: ", import.meta.env.VITE_HELLO);
    }, []);

    return (
        <main className="mx-auto min-h-[calc(100vh-48px)] max-w-xl content-center p-8 text-center">
            <h1 className="text-5xl font-bold">Hello {`${name ? name : "Anonymous"}`}</h1>
        </main>
    );
}

export default Greeting;
