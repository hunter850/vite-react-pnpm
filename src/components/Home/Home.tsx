import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="mx-auto min-h-[calc(100vh-48px)] max-w-xl content-center p-8 text-center">
            <div className="mb-8 flex justify-center gap-8">
                <a href="https://vite.dev" target="_blank">
                    <img
                        src={viteLogo}
                        className="h-24 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2rem_#646cffaa]"
                        alt="Vite logo"
                    />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="h-24 animate-(--animate-logo-spin) transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2rem_#61dafbaa]"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1 className="text-5xl font-bold">Vite + React</h1>
            <div className="p-8">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="mb-4 rounded-lg border-1 border-solid border-transparent bg-[#f9f9f9] px-4 py-2 text-base transition-[border] duration-250 hover:border-(--react-blue)"
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="text-[#888]">Click on the Vite and React logos to learn more</p>
        </main>
    );
}

export default App;
