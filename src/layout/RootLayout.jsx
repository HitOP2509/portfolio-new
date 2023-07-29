import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: "100vh" }}>
                <Outlet />
            </main>
            <ScrollRestoration />
        </>
    );
};

export default RootLayout;
