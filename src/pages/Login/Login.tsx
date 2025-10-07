import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import axios, { AxiosError } from 'axios';

import styles from './Login.module.css';

import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';

import { BASE_URL } from '../../helpers/API';

import type { LoginResponse } from '../../interfaces/auth.interface';

export type LoginForm = {
	email: {
		value: string
	},
	password: {
		value: string
	}
}

function Login() {
	const [error, setError] = useState<string | null>();
	const navigate = useNavigate();

	async function submitForm(e: FormEvent) {
		e.preventDefault();
		setError(null);
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		await sendAuthData(email.value, password.value);
	};

	async function sendAuthData(email: string, password: string) {
		try {
			const { data } = await axios.post<LoginResponse>(`${BASE_URL}/auth/login`, { email, password });
			localStorage.setItem('jwt', data.access_token);
			navigate('/');
		} catch (error) {
			if (error instanceof AxiosError) {
				setError(error.response?.data.message);
			}
		}
	}

	return (
		<div className={styles['login']}>
			<Headling>Вход</Headling>
			{error &&
				<div className={styles['error']}>{error}</div>
			}
			<form className={styles['form']} onSubmit={submitForm}>
				<div className={styles['field']}>
					<label htmlFor='email'>Ваш email</label>
					<Input
						id='email'
						name='email'
						placeholder='Email'
					/>
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>Ваш пароль</label>
					<Input
						id='password'
						name='password'
						type='password'
						placeholder='Пароль'
					/>
				</div>
				<Button appearence='big'>Вход</Button>
			</form>
			<div className={styles['links']}>
				<div>Нет аккаунта?</div>
				<Link to={'/auth/registration'}>Зарегистрироваться</Link>
			</div>
		</div>
	);
}

export default Login;