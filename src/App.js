import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateTeam from './Component/CreateTeam';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import ScoreCard from './Component/ScoreCard';
import StartMatch from './Component/StartMatch';

const App = () => {
  	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={() => <Home />} />
				<Route path='/start' component={() => <StartMatch />} />
				<Route path='/create' component={() => <CreateTeam />} />
				<Route path='/scorecard' component={() => <ScoreCard />} />
			</Switch>
		</BrowserRouter>
  	);
}

export default App;
