import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main style={{ height: "100vh" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
