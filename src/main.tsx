import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import axios from 'axios';

import './index.css';

import Layout from './layout/Menu/Layout.tsx';
import AuthLayout from './layout/Auth/AuthLayout.tsx';

import Cart from './pages/Cart/Cart.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import Product from './pages/Product/Product.tsx';
import Login from './pages/Login/Login.tsx';
import Registration from './pages/Registration/Registration.tsx';

import { BASE_URL } from './helpers/API.ts';
import RequireAuth from './helpers/RequireAuth.tsx';

const root = document.getElementById('root');

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth><Layout /></RequireAuth>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					await new Promise<void>((resolve) => {
						setTimeout(() => {
							resolve();
						}, 1000);
					});
					const { data } = await axios.get(`${BASE_URL}/products/${params.id}`);
					return data;
				}
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'registration',
				element: <Registration />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

createRoot(root!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
