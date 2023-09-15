import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./routes/Home";
import Service from "./routes/Service";

const router = createBrowserRouter([
    {
        path: "",
        element: <Home />,
    },
    {
        path: "/service",
        element: <Service />,
    },
]);

const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Montserrat", "Noto Sans kr", sans-serif;
    font-size: 16px;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
