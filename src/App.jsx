import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
