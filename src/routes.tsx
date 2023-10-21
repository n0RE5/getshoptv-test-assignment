import { Navigate } from "react-router-dom";
import { IRoute } from "./types/globals";
import { DEFAULT_ROUTE, ERROR_ROUTE } from "./utils/consts";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";

export const routes: IRoute[] = [
    {
        path: DEFAULT_ROUTE,
        element: <MainPage />
    },
    {
        path: ERROR_ROUTE,
        element: <ErrorPage />
    },
    {
        path: '*',
        element: <Navigate to={ERROR_ROUTE} replace/>
    }
]