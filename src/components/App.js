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
	
});

const App = ({classes}) =>  {
	return (
		<div className={classes.root}>
			<MyMenu />
			<Header />
			<Formation />
			<Competences />
			<Experience />
			<Interests />
		</div>
	);
};

const MyMenuConnected = withStyles(styles)(({classes, toggleMenu, menu_open}) => {
	return (
		<div>
			<Button id="menu_button" onClick={toggleMenu} className={classes.button_menu}>
			Open menu
			</Button>
			<Menu id="menu" open={menu_open} onClose={toggleMenu} anchorEl={document.getElementById('menu_button')} >
				<MenuItem>Formation</MenuItem>
				<MenuItem>Compétences</MenuItem>
				<MenuItem>Expériences professionnelles</MenuItem>
				<MenuItem>Centres d'intérêt</MenuItem>
			</Menu>
		</div>
	);
});

const MyMenu = connect(mapStateToProps, mapDispatchToProps)(MyMenuConnected);



export default withStyles(styles)(App);
