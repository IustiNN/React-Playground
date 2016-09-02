import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Articles from './js/pages/Articles';
import Careers from './js/pages/Careers';
import Company from './js/pages/Company';
import Work from './js/pages/Work';
import Layout from './js/pages/Layout';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Layout}>
  		<IndexRoute component={Company}></IndexRoute>
  		<Route path="careers" name="careers" component={Careers}></Route>
  		<Route path="work" name="work" component={Work}></Route>
  		<Route path="articles/:article" name="articles" component={Articles}></Route>
  	</Route>
  </Router>,
  document.getElementById('root')
);
