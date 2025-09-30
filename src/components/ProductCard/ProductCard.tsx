import { Link } from 'react-router';
import styles from './ProductCard.module.css';

import type { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
	return (
		<Link to={`/product/${props.id}`} className={styles['card-link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{ backgroundImage: `url('${props.image}')` }}>
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']}>
						<img src="/icons/AdditionalCardIcon.svg" alt="cart-button" />
					</button>
					<div className={styles['rating']}>
						{props.rating}
						<img src="/icons/RatingIcon.svg" alt="rating-icon" />
					</div>
				</div>

				<div className={styles['footer']}>
					<div className={styles['title']}>{props.name}</div>
					<div className={styles['description']}>{props.ingredients.join(', ')}</div>
				</div>
			</div >
		</Link>
	);
}

export default ProductCard;