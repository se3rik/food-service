import { useParams } from 'react-router';

function Product() {
	const { id } = useParams();

	return (
		<>
			Product - {id}
		</>
	);
}

export default Product;