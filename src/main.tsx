import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import axios from 'axios';

import './index.css';

import { Layout } from './layout/Menu/Layout.tsx';

import Menu from './pages/Menu/Menu.tsx';
import Cart from './pages/Cart/Cart.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import Product from './pages/Product/Product.tsx';
import { BASE_URL } from './helpers/API.ts';

const root = document.getElementById('root');

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Menu />
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
		path: '*',
		element: <NotFound />
	}
]);

createRoot(root!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
