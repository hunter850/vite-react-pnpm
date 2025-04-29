import { useLocation, useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

function ErrorBoundaryFallback(): React.JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();
    function backToHome() {
        navigate("/");
        window.location.reload();
    }
    function reloadPage() {
        window.location.reload();
    }
    return (
        <div className="bg-background flex min-h-screen items-center justify-center p-4">
            <div className="bg-card text-card-foreground w-full max-w-md rounded-lg border shadow-lg">
                <div className="flex flex-col space-y-1.5 p-6 text-center">
                    <div className="mb-4 flex justify-center">
                        <AlertTriangle className="text-destructive h-16 w-16" />
                    </div>
                    <h3 className="text-2xl leading-none font-semibold tracking-tight">出錯了</h3>
                    <p className="text-muted-foreground text-sm">應用程式發生了意外錯誤，請嘗試重新載入或返回首頁。</p>
                </div>
                <div className="p-6">
                    <div className="bg-muted/50 text-muted-foreground max-h-32 overflow-auto rounded-md p-4 text-sm">
                        <p>錯誤頁面: {location.pathname}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 p-6">
                    <button
                        onClick={backToHome}
                        className="bg-primary text-primary-foreground ring-offset-background hover:bg-primary/90 focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                        返回首頁
                    </button>
                    <button
                        onClick={reloadPage}
                        className="border-input bg-background ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                        重新載入
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ErrorBoundaryFallback;
