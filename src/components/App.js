import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		height: '100%',
	}
});

const App = ({classes}) =>  {
	return (
		<div className={classes.root}>
			<Header />
			<Body />
		</div>
	);
};



export default withStyles(styles)(App);
