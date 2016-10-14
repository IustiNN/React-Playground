import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Article from './js/pages/Article';
import Articles from './js/pages/Articles';
import Careers from './js/pages/Careers';
import Company from './js/pages/Company';
import Home from './js/pages/Home';
import Work from './js/pages/Work';
import Layout from './js/pages/Layout';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={Layout}>
  		<IndexRoute component={Home}></IndexRoute>
  		<Route path="/company" name="company" component={Company}></Route>
  		<Route path="/work" name="work" component={Work}></Route>
  		<Route path="/articles" name="articles" component={Articles}>
		  <Route path="/articles/:article" name="articles" component={Article}/>
		</Route>
  	</Route>
  </Router>,
  document.getElementById('content')
);
