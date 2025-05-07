import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import MoviePage from './pages/MoviePage.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import InfoPage from "./pages/InfoPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/moviepage',
        element: <MoviePage/>
    },
    {
        path: '/info',
        element: <InfoPage />
    }
])
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
