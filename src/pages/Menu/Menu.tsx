import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

import styles from './Menu.module.css';

import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';

import { BASE_URL } from '../../helpers/API';

import type { Product } from '../../interfaces/product.interface';
import MenuList from './MenuList/MenuList';

function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 1000);
			});
			const { data } = await axios.get<Product[]>(`${BASE_URL}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			if (error instanceof AxiosError) {
				setError(error.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search placeholder='Введите блюдо или состав' />
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && <MenuList products={products} />}
				{isLoading && <>Загружаем продукты...</>}
			</div>
		</>
	);
}

export default Menu;