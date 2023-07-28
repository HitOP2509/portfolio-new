import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: "100vh" }}>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </>
    );
};

export default RootLayout;
