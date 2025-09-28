import { Link, Outlet } from 'react-router';

import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

export function Layout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img src="/images/Avatar.png" alt="user-avatar" className={styles['avatar']} />
					<div className={styles['name']}>
						Антон Ларичев
					</div>
					<div className={styles['email']}>
						larich@ya.ru
					</div>
				</div>
				<div className={styles['menu']}>
					<Link to="/" className={styles['link']}>
						<img src="/icons/MenuIcon.svg" alt="menu-icon" />
						Menu
					</Link>
					<Link to="/cart" className={styles['link']}>
						<img src="/icons/CartIcon.svg" alt="cart-icon" />
						Cart
					</Link>
				</div>
				<Button className={styles['leave-btn']}>
					<img src="/icons/LeaveIcon.svg" alt="leave-button" />
					Выйти
				</Button>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}