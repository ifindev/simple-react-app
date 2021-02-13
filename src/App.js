import React, {useState} from 'react';
import Tweet from './tweet';

function App() {

	const [isRed, setRed] = useState(false);
	const [count, setCount] = useState(0);

	// Tweet data from the api
	const [users, setUser] = useState([
		{name:'Ifindev', message:"Hello there!"},
		{name:'Luffy', message:"I am Awesome!"},
		{name:'Zoro', message:"Meet my sword!!"}
	]);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	const changeColor = () => {
		setRed(!isRed);
	};

	return(
		<div className="app">
			<div className="group-item">
				<button onClick={changeColor}>Click!</button>
				<h1 className={isRed ? "red" : ""}>Hello React</h1>
			</div>
			<div className="group-item">
				<button onClick={decrement}>-</button>
				<button onClick={increment}>+</button>
				<h1>{count}</h1>
			</div>
			<div className="group-item">
				<Tweet name = "Arifin" message="React is awesome!"/>
				<Tweet name = "Traversy Media" message="New tutorial is released! Go checkout my youtube."/>
				<Tweet name = "Dev Ed" message="Thanks for watching my video"/>
			</div>
			<div className="group-item">
				<Tweet name = "Lorem Ipsum" message="I am the most usable text in the world. You cannot escape me!"/>
				<Tweet name = "Vercel Media" message="try vercel man!"/>
				<Tweet name = "Garyvee" message="Do shit before you going shit!"/>
			</div>
			<div className="group-item">
				{users.map(user => (
					<Tweet name={user.name} message={user.message}/>
				))}
			</div>
		</div>
	);
}

export default App;