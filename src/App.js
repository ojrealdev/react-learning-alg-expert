import { useState } from 'react';
import './App.css';

export default function App() {
	const [isClicked, setIsClicked] = useState(false);

	const setClick = (msg) => {
		alert(msg);
		setIsClicked(true);
	};

	return (
		<div className='App-header'>
			<header className='App-header'>
				<h1>A Modal will appear if you click the button below</h1>
				<button onClick={() => setClick('hello world!')}>Create Modal</button>
				{isClicked ? (
					<Modal
						className='modal'
						isClicked={isClicked}
						setIsClicked={setIsClicked}
					>
						<button>click!</button>
					</Modal>
				) : null}
			</header>
		</div>
	);
}

function Modal({ isClicked, setIsClicked, children }) {
	const handleClick = (event) => {
		console.log(event);
		setIsClicked(false);
	};

	return (
		<div>
			<p>This is a Modal!</p>
			<button onClick={(event) => handleClick(event)}>Remove Modal!</button>
			{children}
		</div>
	);
}
