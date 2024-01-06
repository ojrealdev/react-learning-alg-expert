import { useState } from 'react';
import './App.css';

const App = () => {
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
};

const Modal = ({ isClicked, setIsClicked, children }) => (
	<div>
		<p>This is a Modal!</p>
		<button onClick={() => setIsClicked(false)}>Remove Modal!</button>
		{children}
	</div>
);

export default App;
