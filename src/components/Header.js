import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	pic: {
		height: '100%',
		marginTop: '5%'
	},
	cont: {
		backgroundColor: '#003a99',
		color: 'white',
		boxShadow: '3px 3px 2px #4f5256',
	}
});

const mapStateToProps = state => ({});

const ConnectedHeader = ({classes}) => (
	<Grid container spacing={24} className={classes.cont}>
		<Grid item xs={10}>
			{/* <Paper className={classes.title}> */}
			<h1>Jules Sang</h1>
			<h4>Apprenti à l'ENSIMAG</h4>
			{/* </Paper> */}
		</Grid>
		<Grid item xs={2}>
			<CardMedia image="/pictures/me.jpg" className={classes.pic} />
		</Grid>
	</Grid>
);

const Header = withStyles(styles)(connect(mapStateToProps)(ConnectedHeader));
export default Header;