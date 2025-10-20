import { type ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import type { RootState } from '../store/store';

function RequireAuth({ children }: { children: ReactNode }) {
	const jwt = useSelector((state: RootState) => state.user.jwt);

	if (!jwt) {
		return <Navigate to='/auth/login' replace />;
	}

	return children;
}

export default RequireAuth;