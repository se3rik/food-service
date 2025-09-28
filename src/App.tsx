import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {

	return (
		<>
			<Button onClick={() => console.log('Clicked')}>Button</Button>
			<Button appearence='big' onClick={() => console.log('Clicked')}>Button BIG</Button>
			<Input placeholder='Email' />
		</>
	);
}

export default App;
