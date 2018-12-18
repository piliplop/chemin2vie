import React from 'react';
import { connect } from 'react-redux';
import LeftMenu from './LeftMenu';
import { Grid } from '@material-ui/core';
import { TABS } from '../redux/reducers/reducer';
import Formation from './Formation';
import Competences from './Competences';
import Experiences from './Experiences';
import Interets from './Interets';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		height: '100%',
		background: '#456990',
	},
	item: {
		marginLeft: '24px',
		color: 'red'
	}
});

const mapStateToProps = state => ({
	current_tab: state.current_tab,
});


const ConnectedBody = ({current_tab, classes}) => {
	return (
		<Grid container spacing={0} className={classes.root}>
			<Grid item xs={2}>
				<LeftMenu />
			</Grid>
			<Grid item xs={10}>
				<div className={classes.item}>
					{(() => {
						switch (current_tab){
						// no break needed because of return
						case TABS.formation: return <Formation />;
						case TABS.competences: return <Competences />;
						case TABS.experiences: return <Experiences />;
						case TABS.interests: return <Interets />;
						default: return null;
						}
					})()}
				</div>
			</Grid>
		</Grid>
	);};

const Body = connect(mapStateToProps)(withStyles(styles)(ConnectedBody));
export default Body;