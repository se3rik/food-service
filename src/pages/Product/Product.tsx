import { useLoaderData } from 'react-router';
import type { Product } from '../../interfaces/product.interface';

function Product() {
	const data = useLoaderData() as Product;

	return (
		<>
			Product - {data.name}
		</>
	);
}

export default Product as React.FC;