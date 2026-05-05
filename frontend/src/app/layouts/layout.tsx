import { Outlet } from "react-router";
import { Header } from "widgets/header";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
