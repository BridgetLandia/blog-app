import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Articles from '../Articles';
import Nav from '../../components/Nav';
import Article from '../Article';

function App() {
	return (
		<div className="App">
			<Nav />
			<Switch>
				<Route exact path="/" component={Articles} />
				<Route exact path="/article/:id" component={Article} />
			</Switch>
		</div>
	);
}

export default App;
