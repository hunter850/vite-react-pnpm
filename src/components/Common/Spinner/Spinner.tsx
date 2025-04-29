import { Loader2 } from "lucide-react";

function Spinner(): React.JSX.Element {
    return (
        <Loader2 className="fixed top-1/2 left-1/2 mr-2 h-9 w-9 translate-[-50%] animate-(--animate-spinner-spin) text-zinc-500 duration-100" />
    );
}

export default Spinner;
