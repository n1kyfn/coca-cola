import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div className="app">
            <main>
                <Outlet />
            </main>
        </div>
    )
}
