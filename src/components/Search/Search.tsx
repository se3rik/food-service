import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './Search.module.css';

import type { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search({ className, isValid = true, ...props }, ref) {

	return (
		<div className={styles['input-wrapper']}>
			<input
				{...props}
				ref={ref}
				className={cn(styles['input'], className, {
					[styles['invalid']]: !isValid
				})}
			/>
			<img src="/icons/SearchIcon.svg" className={styles['icon']} alt="search-icon" />
		</div>
	);
});

export default Search;