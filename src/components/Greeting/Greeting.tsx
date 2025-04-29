import { useEffect } from "react";

function Greeting(): React.JSX.Element {
    useEffect(() => {
        console.log("HELLO: ", process.env.VITE_HELLO);
    }, []);

    return (
        <main className="mx-auto min-h-[calc(100vh-48px)] max-w-xl content-center p-8 text-center">
            <h1 className="text-5xl font-bold">Hello</h1>
        </main>
    );
}

export default Greeting;
