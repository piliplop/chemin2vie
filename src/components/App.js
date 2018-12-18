import React from 'react';
import Header from './Header';
import Formation from './Formation';
import Competences from './Competences';
import Experience from './Experience';
import Interests from './Interests';
import { Button, Menu, MenuItem} from '@material-ui/core';
import { connect } from 'react-redux';
import { toggleMenu } from '../redux/actions/actions';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = state => ({
	menu_open: state.menu_open,
});

const mapDispatchToProps = dispatch => ({
	toggleMenu: () => dispatch(toggleMenu())
});

const styles = theme => ({
	root: {
		height: '100%',
		overflow: 'hidden'
	},
	button_menu: {
		color: 'red',
	},
	menu: {
		// top: '0'
	}
});

const App = ({classes}) =>  {
	return (
		<div className={classes.root}>
			<MyMenu />
			<Header />
			{/* <Formation />
			<Competences />
			<Experience />
			<Interests /> */}
		</div>
	);
};

const MyMenuConnected = withStyles(styles)(({classes, toggleMenu, menu_open}) => {
	return (
		<div>
			<Button onClick={toggleMenu} className={classes.button_menu}>
			Open menu
			</Button>
			<Menu anchorOrigin={{vertical: 'top', horizontal: 'left'}}
				transformOrigin={{vertical: 'top', horizontal: 'left'}}
				id="menu" open={menu_open} onClose={toggleMenu} className={classes.menu}>
				<MenuItem>Yo</MenuItem>
				<MenuItem>Ma</MenuItem>
				<MenuItem>Ggle</MenuItem>
			</Menu>
		</div>
	);
});

const MyMenu = connect(mapStateToProps, mapDispatchToProps)(MyMenuConnected);



export default withStyles(styles)(App);
