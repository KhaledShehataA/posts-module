import { useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';
import axios from 'axios';

function App() {
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios
				.get('https://jsonplaceholder.typicode.com/posts')
				.catch((err) => {
					console.log('Err', err);
				});
			console.log(res);
		};
		fetchPosts();
	}, []);
	return (
		<div className='App'>
			<Posts />
		</div>
	);
}

export default App;
