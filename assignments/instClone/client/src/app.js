import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Please Login</h1>
					<div>
						<p>Username: </p>
						<input/>
					</div>

					<div>
						<p>Password: </p>
						<input/>
					</div>

					<div>
						<button> Sign In </button>
					</div>

					<div>
						<button> Cancel </button>
					</div>

					<div>
						<button> New Account</button>
					</div>
				
			</div>

		);
	}
}

export default App;