import { useEffect, useState } from 'react';

import styles from './Menu.module.css';

import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import ProductCard from '../../components/ProductCard/ProductCard';

import { BASE_URL } from '../../helpers/API';

import type { Product } from '../../interfaces/product.interface';

function Menu() {
	const [products, setProducts] = useState<Product[]>([]);

	const getMenu = async () => {
		try {
			const res = await fetch(`${BASE_URL}/products`);
			if (!res.ok) {
				return;
			}
			const data = await res.json() as Product[];
			setProducts(data);
		} catch (error) {
			console.error(error);
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
				{products.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						ingredients={product.ingredients}
						image={product.image}
						price={product.price}
						rating={product.rating}
					/>
				))}
			</div>
		</>
	);
}

export default Menu;