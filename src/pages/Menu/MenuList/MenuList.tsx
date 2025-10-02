import ProductCard from '../../../components/ProductCard/ProductCard';

import styles from './MenuList.module.css';

import type { MenuListProps } from './MenuList.props';

function MenuList({ products }: MenuListProps) {
	return (
		<div className={styles['wrapper']}>
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
	);
}

export default MenuList;