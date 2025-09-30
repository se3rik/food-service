import ProductCard from '../../../components/ProductCard/ProductCard';

import type { MenuListProps } from './MenuList.props';

function MenuList({ products }: MenuListProps) {
	return (
		products.map(product => (
			<ProductCard
				key={product.id}
				id={product.id}
				name={product.name}
				ingredients={product.ingredients}
				image={product.image}
				price={product.price}
				rating={product.rating}
			/>
		))
	);
}

export default MenuList;