import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeTab } from '../redux/actions/actions';
import { TABS } from '../redux/reducers/reducer';

const mapDispatchToProps = dispatch => ({
	changeTab: new_tab => dispatch(changeTab(new_tab))
});

const styles = theme => ({
	root: {
		height: '100%',
		// boxShadow: '3px 3px 2px #4f5256',
	},
	list: {
		height: '100%',
		background: '#007090'
	},
	text: {
		color: 'white',
		lineHeight: '1.5'
	},
	list_item: {
	}
});

const LeftMenu = ({ classes, changeTab }) => (
	<div className={classes.root}>
		<List component="nav" className={classes.list}>
			<ListItem button onClick={() => {changeTab(TABS.formation);}} className={classes.list_item}>
				<ListItemText disableTypography className={classes.text}>Formation</ListItemText>
			</ListItem>
			<hr></hr>
			<ListItem button onClick={() => {changeTab(TABS.competences);}} className={classes.list_item}>
				<ListItemText disableTypography className={classes.text}>Compétences</ListItemText>
			</ListItem>
			<hr></hr>
			<ListItem button onClick={() => {changeTab(TABS.experiences);}} className={classes.list_item}>
				<ListItemText disableTypography className={classes.text}>Expériences professionnelles</ListItemText>
			</ListItem>
			<hr></hr>
			<ListItem button onClick={() => {changeTab(TABS.interests);}} className={classes.list_item}>
				<ListItemText disableTypography className={classes.text}>Centres d'intérêt</ListItemText>
			</ListItem>
		</List>
	</div>
);

export default connect(null, mapDispatchToProps)(withStyles(styles)(LeftMenu));