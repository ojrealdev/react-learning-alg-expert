import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
	const [isClicked, setIsClicked] = useState(false);
	const [name, setName] = useState('John!');
	const [count, setCount] = useState(0);

	useEffect(() => {}, []);

	const setClick = (msg) => {
		alert(msg);
		setIsClicked(true);
	};

	return (
		<div className='App-header'>
			<header className='App-header'>
				<section>
					<header>Welcome {name}</header>
					<div>Ligin times: {count}</div>
				</section>
				<h1>A Modal will appear if you click the button below</h1>
				<button onClick={() => setClick('hello world!')}>Create Modal</button>
				{isClicked ? (
					<Modal
						className='modal'
						isClicked={isClicked}
						setIsClicked={setIsClicked}
						setName={setName}
						setCount={setCount}
					>
						<div>
							<label htmlFor='name'>Name:</label>
							<input
								placeholder='Enter name'
								id='name'
								onChange={(event) => setName(event.target.value)}
							/>
						</div>
					</Modal>
				) : null}
			</header>
		</div>
	);
}

function Modal({ isClicked, setIsClicked, setCount, children }) {
	const handleClick = (event) => {
		console.log(event);
		setIsClicked(false);
	};

	const handleAddCount = () => {
		setCount((prevCount) => prevCount + 1);
		setCount((prevCount) => prevCount + 1);
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<p>This is a Modal!</p>
			{children}
			<button onClick={(event) => handleClick(event)}>Remove Modal!</button>
			<button onClick={handleAddCount}>Add Count</button>
		</div>
	);
}
