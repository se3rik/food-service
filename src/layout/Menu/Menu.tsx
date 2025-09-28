import { Link, Outlet } from 'react-router';

export function Layout() {
	return (
		<div>
			<div>
				<Link to="/">Menu</Link>
				<Link to="/cart">Cart</Link>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}