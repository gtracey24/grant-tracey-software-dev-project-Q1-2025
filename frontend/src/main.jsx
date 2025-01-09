import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'

import App from './App'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import NoPage from './pages/NoPage'
import LogOut from './pages/LogOut'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/transactions',
                element: <Transactions />,
            },
            {
                path: '/logout',
                element: <LogOut />,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)