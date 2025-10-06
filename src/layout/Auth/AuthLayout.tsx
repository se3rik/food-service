import { Outlet } from 'react-router';
import styles from './AuthLayout.module.css';

function AuthLayout() {

	return (
		<div className={styles['layout']}>
			<div className={styles['logo']}>
				<img src="/icons/LogoIcon.svg" alt="logo" />
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}

export default AuthLayout;